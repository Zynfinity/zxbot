module.exports = {
    name: ['setgroupname'].map((v) => v + ' <name>'),
    cmd: /^(setgroupname)$/i,
    category: 'group',
    desc: ['Mengubah nama Group!', '.setgroupname <name>'],
    group: true,
    admin: true,
    botAdmin: true,
    async handler(m, {conn, zx, text}){
        if(!text) return conn.reply(m, 'Mau diganti jadi apa?')
        await zx.setSubject(text)
    }
}