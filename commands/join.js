module.exports = {
    name: ['join'].map((v) => v + ' <link>'),
    cmd: /^(join)$/i,
    category: 'owner',
    desc: ['Bergabung ke group menggunakan tautan group', '.join <link>'],
    owner: true,
    async handler(m, {conn, msgId, text}){
        if(!text) return await conn.reply(m, 'Masukkan linknya!', msgId)
        if(!m.isUrl(text)) return await conn.reply(m, global.mess.wait, msgId)
        try{
            ingfo = await conn.getInviteInfo(text.split('/')[3])
            await conn.acceptInvite(text.split('/')[3])
            conn.reply(m, `Berhasil join group ${ingfo.subject} ( ${ingfo.id._serialized} )`, msgId)
        }catch{
            conn.reply(m, global.mess.errorlink, msgId)
        }
    }
}