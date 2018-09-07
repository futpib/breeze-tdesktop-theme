
const TelegramBot = require('node-telegram-bot-api');
const Agent = require('socks5-https-client/lib/Agent');

const socksHost = process.env.PROXY_SOCKS5_HOST || 'localhost';
const socksPort = parseInt(process.env.PROXY_SOCKS5_PORT || '9050', 10);

const commit = process.env.TRAVIS_COMMIT;
const slug = process.env.TRAVIS_REPO_SLUG;

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

const caption = (slug && commit) ?
//	`https://github.com/${slug}/commit/${commit}` :
	commit.slice(0, 7) :
	'manual build';

async function main() {
	await bot.startPolling();
	await bot.sendDocument('@BreezeDark', './breeze-dark.tdesktop-theme', {
		caption,
	});
	await bot.stopPolling();
}

main().then(
	() => process.exit(0),
	err => {
		console.error(err);
		process.exit(1);
	},
);
