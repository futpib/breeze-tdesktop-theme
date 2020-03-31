
const gulp = require('gulp');
const transform = require('gulp-transform');
const rename = require('gulp-rename');
const zip = require('gulp-zip');
const unzip = require('gulp-unzip');
const flatmap = require('gulp-flatmap');

const {
	pipe,
	toPairs,
	map,
	join,
	curry,
	fromPairs,
	adjust,
	split,
	last,
	filter,
	prop,
	keys,
	mapObjIndexed,
	difference,
	replace,
} = require('ramda');

const ini = require('ini');

const color = require('color');

const jimp = require('jimp');

const mapping = require('./mapping');

const mapKeys = curry((fn, obj) => fromPairs(map(adjust(0, fn), toPairs(obj))));

const hex = x => {
	if (x && /^\d+,\d+,\d+$/.test(x)) {
		x = color(x.split(',').map(x => parseInt(x, 10)));
	}
	return x.hex ?
		(x.hex() + Math.ceil(255 * parseFloat(x.alpha())).toString(16).padStart(2, '0')) :
		x;
};

const alpha = (c, a) => hex(color(c).alpha(typeof a === 'number' ? a : (parseInt(a, 16) / 255)));

const mix = (a, b, r) => hex(color(a).mix(color(b), r));

const overlay = (bg, fg) => {
	const { color: [ bgr, bgg, bgb ], valpha: bga } = color(bg);
	const { color: [ fgr, fgg, fgb ], valpha: fga } = color(fg);

	const a = bga + fga - (bga * fga);

	const r = ((fgr * fga) + ((bgr * bga) * (1 - fga))) / a;
	const g = ((fgg * fga) + ((bgg * bga) * (1 - fga))) / a;
	const b = ((fgb * fga) + ((bgb * bga) * (1 - fga))) / a;

	return hex(color([ r, g, b, a ]));
};

const parseBreezeColors = pipe(
	x => typeof x === 'string' ? x : x.toString('utf8'),
	ini.parse,
	mapKeys(pipe(split(':'), last)),
	map(map(hex)),
	map(o => new Proxy(o, {
		get(obj, prop) {
			if (prop in obj || prop === 'toJSON') {
				return obj[prop];
			}
			throw new TypeError('Undefined breeze theme property access: ' + prop);
		},
	})),
);

const evalStringRefs = intermediate => map(v => intermediate[v] || v, intermediate);
const evalThunks = intermediate => map(v => (typeof v === 'function' && v(intermediate)) || v, intermediate);

const infiniteObject = new Proxy(() => infiniteObject, {
	get() {
		return infiniteObject;
	},
});

const breezeToTelegram = pipe(
	breeze => mapping({ breeze, alpha, mix, overlay }),
	evalStringRefs,
	evalStringRefs,
	evalThunks,
	evalStringRefs,
	evalStringRefs,
	evalThunks,
);

const breezeToTelegramColors = pipe(
	parseBreezeColors,
	breezeToTelegram,
	mapObjIndexed((v, k) => {
		if (!v) {
			console.warn('color not resolved:', k);
			return '#ff0000';
		}
		return v;
	}),
	pipe(
		toPairs,
		map(join(': ')),
		map(s => s + ';\n'),
		join(''),
	),
);

const breezeToTelegramBg = pipe(
	parseBreezeColors,
	breezeToTelegram,
	tg => jimp
		.create(256, 256, tg.historyComposeAreaBg)
		.then(img => img.getBufferAsync('image/png'))
);

const breezeToHexJSON = pipe(
	parseBreezeColors,
	x => JSON.stringify(x, null, 2),
);

gulp.task(
	'breeze-to-telegram-colors',
	() => gulp
		.src('./breeze/colors/*.colors')
		.pipe(transform('utf8', breezeToTelegramColors))
		.pipe(rename(path => {
			path.dirname += '/' + path.basename;
			path.basename = 'colors';
			path.extname = '.tdesktop-theme';
			return path;
		}))
		.pipe(gulp.dest('./dist/'))
);

gulp.task(
	'breeze-to-telegram-bg',
	() => gulp
		.src('./breeze/colors/*.colors')
		.pipe(transform(breezeToTelegramBg))
		.pipe(rename(path => {
			path.dirname += '/' + path.basename;
			path.basename = 'tiled';
			path.extname = '.png';
			return path;
		}))
		.pipe(gulp.dest('./dist/'))
);

// This task is only useful for manually visually comparing colors in `rainbow-mode`
gulp.task(
	'breeze-to-hex-json',
	() => gulp
		.src('./breeze/colors/*.colors')
		.pipe(transform('utf8', breezeToHexJSON))
		.pipe(rename({ extname: '.hex.json' }))
		.pipe(gulp.dest('./dist/'))
);

gulp.task(
	'compare-tdesktop-to-mapping',
	() => gulp
		.src('./tdesktop/Telegram/Resources/night.tdesktop-theme')
		.pipe(unzip({
			filter: ({ path }) => path === 'colors.tdesktop-theme',
		}))
		.pipe(transform('utf8', pipe(
			x => (console.log(x), x),
			replace(/\/\*[\s\S]+\*\//gm, ''),
			replace(/^\/\/.*/gm, ''),
			split('\n'),
			filter(Boolean),
			map(split(': ')),
			fromPairs,
			tdesktop => {
				const tdesktopKeys = keys(tdesktop);
				const mappingKeys = keys(mapping(infiniteObject));
				const missingKeys = pipe(
					map(x => [ x, tdesktop[x] ]),
					fromPairs,
				)(difference(tdesktopKeys, mappingKeys));
				const redundantKeys = difference(mappingKeys, tdesktopKeys);
				console.log({ missingKeys, redundantKeys });
				return '';
			},
		)))
);

gulp.task(
	'breeze-to-telegram',
	gulp.series(
		gulp.parallel('breeze-to-telegram-colors', 'breeze-to-telegram-bg'),
		() => gulp
			.src('./dist/*')
			.pipe(flatmap(
				(stream, dir) => gulp
					.src(dir.path + '/*')
					.pipe(zip(dir.relative + '.tdesktop-theme'))
			))
			.pipe(gulp.dest('./dist/'))
	)
);

gulp.task('default', gulp.series('breeze-to-telegram'));

gulp.on('error', console.error);
