const fs = require('fs')
const tools = require('../lib/tools')
const {
    db
} = require('../lib/database/database')
const dbs = require('../lib/database/database')
const textmaker = require('../lib/textmaker')
const {
    MessageMedia
} = require('whatsapp-web.js')
const sagili = require('sagiri')
const sagiri = sagili('5edd4fc72ec03f8c23d02ed08f2e3f35055d7479')
const {
    exec
} = require('child_process')
module.exports = {
    name: ['<', '$'].map((v) => v + ' <Your Code>'),
    function: true,
    category: 'owner',
    menu: true,
    async handler(m, {
        conn,
        budy,
        isOwner,
        msgId,
        zx,
        q,
    }) {
        const util = require('util')
        if (!isOwner) return
        if (budy.startsWith('<')) {
            console.log("E V A L")
            function _(rem) {
                ren = JSON.stringify(rem, null, 2)
                pes = util.format(ren)
                m.reply(pes)
            }
            try {
                await m.reply(require('util').format(eval(`(async () => { ${budy.slice(2)} })()`)))
            } catch (err) {
                e = String(err)
                m.reply(e)
            }
        } else if (budy.startsWith('$')) {
            console.log("E X E C")
            if (!budy.slice(2)) return await m.reply('Masukkan Codenya!')
            exec(budy.slice(2), async (err, stdout) => {
                if (err) return await m.reply(String(err))
                m.reply(stdout)
            })
        }
    }
}