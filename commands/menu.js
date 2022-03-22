const { MessageMedia } = require('whatsapp-web.js')
const {toTimer} = require('../lib/tools')
const djs = require("@discordjs/collection");
module.exports = {
    name: ['menu'].map((v) => v + ''),
    cmd: ['menu'],
    category: 'other',
    ignored: true,
    async handler(m, {conn,  msgId, prefix}){
let d = new Date(new Date() + 3600000)
        let date = d.toLocaleDateString('id', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        })
        let time = d.toLocaleTimeString('id', {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
        })  
        cmd = []
        total = []
        pe = await djs.commands.filter(plugin => !plugin.ignored && !plugin.function || plugin.disabled)
        Array.from(pe).map(plugin => {
            cmd.push({
                cmd: plugin[1].name,
                tag: plugin[1].disabled ? 'Disabled' : plugin[1].category,
            })
        })
        /*
        /*Object.values(global.plugins)
        .filter((plugin) => !plugin.ignored && !plugin.function || plugin.disabled)
        .map((plugin) => {
            cmd.push({
            cmd: plugin.name,
            tag: plugin.disabled ? 'Disabled' : plugin.category,
            })
        })*/
        map_tag = cmd.map((mek) => mek.tag)
        sort_tag = await map_tag.sort()
        tag_data = new Set(sort_tag)
        tags = [...tag_data]
        cmd.map(mk => mk.cmd).map(mkk => {
            mkk.map(pe => {
                total.push(pe)
            })
        })
        menu = `${global.shp} *[ Z X - B O T ]*\n`
        menu += `├ Library : Whatsapp-Web.js\n`
        menu += `├ Runtime  : ${await toTimer(process.uptime())}\n`
        menu += `├ m.command Total : ${total.length}\n`
        menu += `├ Prefix : [ ${prefix} ]\n`
        menu += `├ Date : ${date}\n`
        menu += `├ Time : ${time}\n`
        menu += `└ \n\n`
        menu += `Hallo ${m._data.notifyName} Here my m.command list\n`
        for(let i of tags){
            helps = []
            menu += `\n${global.shp} ${i.toUpperCase()}\n`
            filt_cmd = cmd.filter((mek) => mek.tag == i)
            map_cmd = await filt_cmd.map((mek) => mek.cmd)
            for(let j of map_cmd){
                for(let k of j){
                    helps.push(k)
                    total.push(k)
                }
            }
            sort = await helps.sort(function (a, b) {
                return a.length - b.length
              })
            for (let l = 0; l<sort.length; l++) {
                menu += `├ ${l + 1}. _${sort[l]}_\n`
            }
            menu += '└\n'
        }
        menu += `\n_*Note : Ketik .help <m.command> untuk melihat info m.command_\n_Berikan jeda 5 detik dalam memakai bot_`
        media = await MessageMedia.fromFilePath('./lib/media/thumb.mp4')
        conn.sendMessage(m.from, media, {caption: menu, sendVideoAsGif: true, quotedMessageId: msgId})
    }
}