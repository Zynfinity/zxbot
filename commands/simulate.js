const { simulate } = require("../events/greetings")
module.exports = {
    name: ['simulate'].map((v) => v + ' <welcome/left>'),
    cmd: /^(simulate)$/i,
    category: 'group',
    desc: ['Melakukan simulasi fitur welcome/left', '.simulate <welcome/left>'],
    group: true,
    async handler(m, {conn, msgId, args}){
        if(args[0] != 'welcome' && args[0] != 'left') return await conn.reply(m, 'Pilih welcome/left')
        await conn.reply(m, 'Simulating ....', msgId)
        simulate(args[0], m, conn)
    }
}