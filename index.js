'use strict'

const Xray = require('x-ray')
const x = new Xray()

exports.yesterday= function (module) {
	let url = 'https://www.npmjs.com/package/' + module

	return x(url, '.daily-downloads')((err, result) => {
		if (err) {console.error(err)}
		console.log('Yesterday, ' + module + ' got ' + result + ' downloads 👏.')
	})
}

exports.lastWeek = function (module) {
	let url = 'https://www.npmjs.com/package/' + module

	return x(url, '.weekly-downloads')((err, result) => {
		if (err) {console.error(err)}
		console.log('Las week, ' + module + ' got ' + result + ' downloads 👍.')
	})
}

exports.lastMonth = function (module) {
	let url = 'https://www.npmjs.com/package/' + module

	return x(url, '.monthly-downloads')((err, result) => {
		if (err) {console.error(err)}
		console.log('Last month, ' + module + ' got ' + result + ' downloads 😎.')
	})
}