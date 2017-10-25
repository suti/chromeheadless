const chromeLauncher = require('chrome-launcher')

chromeLauncher.launch({
	startingUrl: 'https://google.com'
}).then(chrome => {
	console.log(`Chrome debugging port running on ${chrome.port}`)
})