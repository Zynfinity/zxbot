const { gsmarena } = require("../lib/scraper")
module.exports = {
    name: ['gsmarena'].map((v) => v + ' <merek hp>'),
    cmd: /^(gsmarena)$/i,
    category: 'search',
    desc: ['Menampilkan spesifikasi hp', '.gsmarena <merek hp>'],
    async handler(m, {conn, msgId, text}){
        try{
            if(!text) return await conn.reply(m, 'Mau cari apa?', msgId)
            await conn.reply(m, global.mess.wait, msgId)
            const data = await gsmarena(text)
            gsm = '*G S M  A R E N A*\n\n'
            for(let i of Object.entries(data)){
                gsm += `${global.shp} ${i[0].toUpperCase()} : ${i[1]}\n\n`
            }
            conn.sendFileFromUrl(m.from, data.thumbnail, {caption: gsm, quotedMessageId: msgId})
        }catch(e){
            global.eror(global.command, e, m)
        }
    }
}