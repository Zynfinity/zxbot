const {toTimer} = require('../lib/tools')
module.exports = {
	name: ['runtime'].map((v) => v + ''),
	cmd: /^(runtime)$/i,
	category: 'other',
	async handler(m, {conn}){
		conn.reply(m.from, `Runtime : ${await toTimer(process.uptime())}`, m.id)
	}
}