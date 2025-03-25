const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_55_03_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTU2LFxuICAgICAgICA4MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5LFxuICAgICAgICA3OSxcbiAgICAgICAgOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2LFxuICAgICAgICA2LFxuICAgICAgICA2OCxcbiAgICAgICAgOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDQ0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTAsXG4gICAgICAgIDM2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDY1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTA1LFxuICAgICAgICA3NixcbiAgICAgICAgOTYsXG4gICAgICAgIDEsXG4gICAgICAgIDc0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTcwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTM5LFxuICAgICAgICA0MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDU2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODMsXG4gICAgICAgIDQ2LFxuICAgICAgICAzMixcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDk2LFxuICAgICAgICA1NixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAzNixcbiAgICAgICAgODIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTYwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAzNyxcbiAgICAgICAgMjE4LFxuICAgICAgICA1MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDY3LFxuICAgICAgICA3NSxcbiAgICAgICAgMjMyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyLFxuICAgICAgICA0NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzYsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTk1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTc4LFxuICAgICAgICA5NixcbiAgICAgICAgMTkwLFxuICAgICAgICAxODQsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTY1LFxuICAgICAgICA1NixcbiAgICAgICAgMjAsXG4gICAgICAgIDI2LFxuICAgICAgICAyMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA3OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTI4LFxuICAgICAgICA0OSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjksXG4gICAgICAgIDExLFxuICAgICAgICAxMTAsXG4gICAgICAgIDk5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDYsXG4gICAgICAgIDk4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODMsXG4gICAgICAgIDU1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyOSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxODksXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjksXG4gICAgICAgIDgwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTExLFxuICAgICAgICA5NSxcbiAgICAgICAgMTksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjcsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDM1LFxuICAgICAgICA5NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODAsXG4gICAgICAgIDYxLFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJzZm1mVElNSE1oVEIzUVgralNKYTcwdFpGd0R6Q1dNd1ZmUTFDdTIramVFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI1a2RRNWdWSVRveXVQNlpFTEZpOTVRXCIsXG4gIFwicGhvbmVJZFwiOiBcImQwYjI2NDM1LTc2ZDUtNDAzNC1iMTM2LTI1NTJhZmVjYTg4YlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MixcbiAgICAgIDU3LFxuICAgICAgMzgsXG4gICAgICAxNDYsXG4gICAgICA5LFxuICAgICAgMTQ5LFxuICAgICAgMTEsXG4gICAgICA5OSxcbiAgICAgIDMzLFxuICAgICAgMzUsXG4gICAgICA4MSxcbiAgICAgIDk2LFxuICAgICAgNzAsXG4gICAgICAxOTUsXG4gICAgICA4NixcbiAgICAgIDIxNCxcbiAgICAgIDE1OCxcbiAgICAgIDEzNyxcbiAgICAgIDUxLFxuICAgICAgMjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE3LFxuICAgICAgMjE2LFxuICAgICAgMzEsXG4gICAgICAxMjAsXG4gICAgICA0MCxcbiAgICAgIDI0MSxcbiAgICAgIDQ3LFxuICAgICAgNzUsXG4gICAgICAxODgsXG4gICAgICAyNDQsXG4gICAgICAxMjEsXG4gICAgICAxNDEsXG4gICAgICAyNDksXG4gICAgICAxNjIsXG4gICAgICA5MSxcbiAgICAgIDk1LFxuICAgICAgNjIsXG4gICAgICAxNDksXG4gICAgICA3OCxcbiAgICAgIDE3NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJURzFKTENZV1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjI4OTM2MzUwNTM6NzhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLgvLrwnZCJ8J2QsfCdkK3wnZCeX/CdkKbwnZCe4Ly7XCIsXG4gICAgXCJsaWRcIjogXCIxMzYzNzQxODc1MjAwMTk6NzhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTlh1ellJSEVQRy9pNzhHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJUSFNjYTNjKzZ3QlBISDVHWDFhV0UzRE53VUJ4Znk0VWQvcGd1em9BOUFzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImZabi9nZmIzdE45eG5tbFJrRFlZRWpSL0dKSEZ6RGZ6WDF2RVJmbW1QQnlUNzRvQkc3ZFF0L0RjMWRab1BUSXRUL00zdExvekhueC9iajErLzRBL0RnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm01RmlteTRhZUJ1bFVMMzROamxOb3FyS3hVRzkzVjhjY1RNcVhVb1FoZXhzLzA0SVlZUWI5alMxbEFGUmRGQmxoSmtoSWdQd0swTVp1MldZMTVDNUNBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyODkzNjM1MDUzOjc4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQyOTIxNzE3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQjExXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCMTEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIrZ3RBUDd3YllOZm5zeGFoUmt0MDhHVFdEZEdROU5yd1Yzb012T2tGSXpNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4ODQ1MTgyMjcsXCJjdXJyZW50SW5kZXhcIjoxMSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzQyOTE5MzA5MjEzXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
