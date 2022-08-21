const fs = require('fs')
const chalk = require('chalk')

// Other
global.owner = ['6282136432456']
global.premium = ['6282136432456']
global.ownername = 'Putraa'
global.botname = 'PutraBot'
global.packname = '© by PutraBot'
global.gc = 'https://chat.whatsapp.com/GbipToPzzxgBEDbbezuAHc'
global.linkyt = 'https://youtube.com/channel/UCSY2V8NmqmM0ciZ89sA6toQ'
global.linkgc = 'https://chat.whatsapp.com/GbipToPzzxgBEDbbezuAHc'
global.limitawal = '100'
global.author = '@Putra.xzy'
global.sessionName = 'polo'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = 'terserah'
global.mess = {
    success: 'Berhasil',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Tunggu sebentar, sedang di proses',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.gambar = 'https://telegra.ph/file/c86ec905ebfa572bacf87.jpg' //disini gambar bot nya lu bisa ganti pink gambar ini dengan link gambar punya lu
global.sc = fs.readFileSync('./media/sc.jpg')
global.tq = fs.readFileSync('./media/tq.jpg')
global.menu = fs.readFileSync('./media/menu.jpg')
global.allmenu = fs.readFileSync('./media/allmenu.jpg')
global.thumb = { url: 'https://i.pinimg.com/736x/d0/f8/b8/d0f8b804a908ce4aaee63d54035d2192.jpg' }
global.visoka = { url: 'https://a.uguu.se/SeGNQzvl.mp4'' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
