require("./all/module.js")

//========== Setting Owner ==========//
global.owner = "6285603293225"
global.namaowner = "𝐓𝐢𝐬𝐮𝐌𝐨𝐝𝐬/𝐇𝐢𝐥𝐦𝐚𝐧"

//======== Setting Bot & Link ========//
global.namabot = "𝐁𝐨𝐭 𝐓𝐢𝐬𝐮𝐌𝐨𝐝𝐬" 
global.namabot2 = "𝐁𝐨𝐭 𝐓𝐢𝐬𝐮𝐌𝐨𝐝𝐬"
global.ownerbot = "𝐓𝐢𝐬𝐮𝐌𝐨𝐝𝐬/𝐇𝐢𝐥𝐦𝐚𝐧"
global.foother = "© 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 𝐓𝐢𝐬𝐮𝐌𝐨𝐝𝐬"
global.idsaluran = "-"
global.linkgc = '-'
global.linksaluran = "-"
global.apitokendo = '-' // API AKUN DIGITAL OCEAN ANDA
global.linkyt = '-'
global.linktele = "-"
global.packname = "-"
global.author = "-"
global.footer2 = '© 𝐓𝐢𝐬𝐮𝐌𝐨𝐝𝐬/𝐇𝐢𝐥𝐦𝐚𝐧'
global.foter1 = 'Script type Case'
global.foter2 = '𝘚𝘤𝘳𝘪𝘱𝘵 𝘴𝘪𝘮𝘱𝘭𝘦 by 𝐓𝐢𝐬𝐮𝐌𝐨𝐝𝐬/𝐇𝐢𝐥𝐦𝐚𝐧'

//========== Setting Event ==========//
global.welcome = false
global.autoread = true
global.anticall = true
global.owneroff = false

//==== Waktu Jeda Jpm & Pushkon ====//
global.delaypushkontak = 5500
global.delayjpm = 5500

//========= Setting Url Foto =========//
//Lihat Di Folder Media!

//========== Setting Panell ==========//
global.egg = "15"
global.loc = "1"
global.domain = "-"
global.apikey = "-"
global.capikey = "-"

//========== Setting Panell 2 ==========//
global.domain2 = "-"
global.apikey2 = "-"
global.capikey2 = "-"

//========= Setting Payment =========//
//Kalo Gak Ada Isi Aja jadi false
global.dana = "-"
global.gopay = "-"
global.ovo = "-"
global.qr = fs.readFileSync("./media/qr.jpg")
                             
//========== Api Domain 1 ===========//
global.zone1 = "-"
global.apitoken1 = "-"
global.tld1 = "-"
//========== Api Domain 2 ==========//
global.zone2 = "-";
global.apitoken2 = "-";
global.tld2 = "-";
//========== Api Domain 3 ==========//
global.zone3 = "-";
global.apitoken3 = "-";
global.tld3 = "-";
//========== Api Domain 4 ==========//
global.zone4 = "-";
global.apitoken4 = "-";
global.tld4 = "-";
//========== Api Domain 5 ==========//
global.zone5 = "-";
global.apitoken5 = "-";
global.tld5 = "-";
//========== Api Domain 6 ==========//
global.zone6 = "-";
global.apitoken6 = "-";
global.tld6 = "-";

//========= Setting Message =========//
global.msg = {
"error": "Error terjadi kesalahan",
"done": "Done Bang ✅", 
"wait": "Bot Sedang Memproses Tunggu Sebentar . . .", 
"group": "*• Group Only* Fitur Ini Hanya Untuk Di Dalam Grup!", 
"private": "*• Private Chat* Fitur Ini Hanya Untuk Didalam Private Chat!", 
"admin": "*• Admin Only* Fitur Ini Hanya Untuk Admin Grup!", 
"adminbot": "*• Bot Admin* Fitur Ini Dapat Digunakan Ketika Bot Menjadi Admin", 
"owner": "*• Owner Only* Fitur Ini Hanya Untuk Owner Bot!", 
"developer": "*• Developer Only* Fitur Ini Hanya Untuk Developer"
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})