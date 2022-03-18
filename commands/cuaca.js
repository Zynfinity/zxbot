const {cuaca} = require('../lib/scraper')
module.exports = {
    name: ['cuaca'].map((v) => v + ' <tempat>'),
    cmd: /^(cuaca|infocuaca)$/i,
    category: 'information',
    desc: ['Menampilkan prakiraan cuaca berdasarkan tempat/daerah', '.cuaca <tempat>'],
    async handler(m, {conn, msgId, text}){
        try{
            if(!text) return await conn.reply(m, 'Masukkan nama derah/tempat!', msgId)
            await conn.reply(m, global.mess.wait, msgId)
            cuaca(text).then(res => {
                array = Object.entries(res)
                cuacaa = '*I N F O  C U A C A*\n\n'
                for(let i of array){
                    cuacaa += `${global.shp} ${i[0]} : ${i[1]}\n`
                }
                conn.reply(m, cuacaa, msgId)
            })
        }catch(e){
            global.eror(global.command, e, m)
        }
    }
}