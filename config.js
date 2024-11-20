const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "true"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_05_58_11_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjksXG4gICAgICAgIDQzLFxuICAgICAgICA0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDM5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDkyLFxuICAgICAgICA3NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxODYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTIxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTg2LFxuICAgICAgICA0NixcbiAgICAgICAgMjIzLFxuICAgICAgICAzMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIsXG4gICAgICAgIDUyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEsXG4gICAgICAgIDIwMixcbiAgICAgICAgODcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjUzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjIyLFxuICAgICAgICA2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTI2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTcxLFxuICAgICAgICA5NixcbiAgICAgICAgNjcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTM5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjA2LFxuICAgICAgICA2MixcbiAgICAgICAgNDUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjM1LFxuICAgICAgICA2MixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA3MSxcbiAgICAgICAgODgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTUyLFxuICAgICAgICA3NixcbiAgICAgICAgODIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyLFxuICAgICAgICAxMyxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTEyLFxuICAgICAgICA2MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjIwLFxuICAgICAgICA0OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDExM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDk4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzgsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTk0LFxuICAgICAgICAzOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTgsXG4gICAgICAgIDM3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDM3LFxuICAgICAgICAxMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDMzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTUwLFxuICAgICAgICA2NixcbiAgICAgICAgNDIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTMyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAzMSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDY3LFxuICAgICAgICAxODYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiY3lCalByWXJCNFVocUdTTzBPZjNiZE8xbU1QZzgwL0puSVVVTytPN0tKRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSXZqdGZwR2tSZVNzSFhTX3dELUpfd1wiLFxuICBcInBob25lSWRcIjogXCI5ZDY3NTEwYS0xNGIyLTQ5MDktOTNiYi1lYzU3YzY5YzFhN2FcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUyLFxuICAgICAgMTAwLFxuICAgICAgNjAsXG4gICAgICAxMTgsXG4gICAgICAxMyxcbiAgICAgIDI1MCxcbiAgICAgIDcyLFxuICAgICAgMTcxLFxuICAgICAgNzMsXG4gICAgICA3NyxcbiAgICAgIDEzNixcbiAgICAgIDI2LFxuICAgICAgMTkyLFxuICAgICAgMjAzLFxuICAgICAgMTk1LFxuICAgICAgNDksXG4gICAgICAxOTksXG4gICAgICAxMTgsXG4gICAgICAyNSxcbiAgICAgIDI4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMCxcbiAgICAgIDMwLFxuICAgICAgNzQsXG4gICAgICAyNixcbiAgICAgIDExNCxcbiAgICAgIDIxLFxuICAgICAgMTk0LFxuICAgICAgNzcsXG4gICAgICAxNzUsXG4gICAgICA3LFxuICAgICAgMTIzLFxuICAgICAgMzAsXG4gICAgICA4MCxcbiAgICAgIDQ1LFxuICAgICAgOTUsXG4gICAgICA5LFxuICAgICAgMTEsXG4gICAgICAyNixcbiAgICAgIDE3OCxcbiAgICAgIDk1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjdDOVc5WkRLXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTc5MDg0Mjk5NDU6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJBIE4gSyBBIE5cIixcbiAgICBcImxpZFwiOiBcIjEyODg3OTQ1Mjc5OTE2ODoyNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOT0p1YjBFRU4zUjhMa0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInVSN1NGQXNtWXdMQjFGTzdCUVVUZ2ZrUmxOM0h6WXdZeWZlV2J0M1V1MEE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTW04d0pwRzJjTDJ5WkV6SlJjQ1RHVUhjLzc1aUVNRmU1SDNiemxQVERtZEY4RnRtRSsrdkVISS8zTEhLSXJ2TmxzeWtRSU9vaitFMUZvaDMxcjRGRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicFRQaUtUVnFqaTRoMEVVUkUzTHNKcENTVVZ3aHlPVU9nNjAzUzBOY3MveVJEbXA2dTlvcWVtQ25ic0dJNTFhOGxFeEZMU0VjbDlsZUs3TzRnYTVoQlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE3OTA4NDI5OTQ1OjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzE5OTU4NzNcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
