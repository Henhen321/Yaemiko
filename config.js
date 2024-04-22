// SC BY © VYNAA CHAN
// RECODE WAJIB KASI CREDITS 
// WA: https://s.id/Vynaa
// TOKO KEBUTUHAN BOT TERPERCAYA
// HANYA DI SINI
// https://linkbio.co/VLShop
// https://t.me/VynaaMD
import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['6285866034212', './Henz', true],
['6285866034212', './Henz', true],
]
global.mods = []
global.prems = []
// Info
global.nomorwa = '6285866034212'
global.packname = 'Made With'
global.author = '© C-Arv MD'
global.namebot = 'C-Arv MD'
global.wm = '© C-Arv MD'
global.stickpack = 'Made With'
global.stickauth = '© C-Arv MD'
global.fotonya = 'https://telegra.ph/file/45fa8ca4093fbb2a645eb.jpg'
// Link Sosmed
global.sig = 'https://instagram.com/henhen.drajat'
global.sgh = 'https://github.com/Henhen321'
global.sgc = 'https://chat.whatsapp.com/'
// Payment
global.ovo = '085866034212'
global.gopay = '085866034212'
global.dana = '085866034212'
// Info Wait
global.alya = 'Mwuhehe'
global.wait = '_Sedang Di Proses, Mohon Tunggu_....'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
// Apikey
global.APIs = {
    anu : 'anu.tv'
}

/*Apikey*/
global.APIKeys = {
    "anu.tv": "anu",
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})