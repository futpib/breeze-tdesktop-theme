
const TelegramBot = require('node-telegram-bot-api');
const Agent = require('socks5-https-client/lib/Agent');

const gulp = require('gulp');
const streamToPromise =  require('gulp-stream-to-promise');
const through = require('through2');

const socksHost = process.env.PROXY_SOCKS5_HOST || 'localhost';
const socksPort = parseInt(process.env.PROXY_SOCKS5_PORT || '9050', 10);

const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, {
	polling: {
		autoStart: false,
	},
	request: process.env.PROXY_ENABLE && {
		agentClass: Agent,
		agentOptions: {
			socksHost,
			socksPort,
		},
	},
});

async function main() {
	await bot.startPolling();

	await streamToPromise(
		gulp
			.src('./dist/*.tdesktop-theme')
			.pipe(through.obj(
				(file, encoding, cb) => bot
					.sendDocument('@BreezeDark', file.path, {
						caption: file.relative.split('.')[0],
					})
					.then(() => cb(), err => cb(err))
			))
	);

	await bot.stopPolling();
}

main().then(
	() => process.exit(0),
	err => {
		console.error(err);
		process.exit(1);
	},
);
