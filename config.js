const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "BWM-XMD;;;H4sIAAAAAAAAA61Vy46jRhT9l9riGfN+WGopGLCNjY0f+BllUUCBMTbgogDTI++yirKYLLLIoj8jSr4nX9CfENHuVo80r44UVqWi6txz7z331AeQpFGORqgGnQ8gw1EJCWqWpM4Q6IBuEQQIgxbwIYGgAyhzo9j0yoyiWaj4pSIeVrAamuWc2azP9d5KsCAwLlKMOL4D1xbICvcYed8AXIW5fBiJ7Xa1HHR1yjR32i7oL3Hdpo9TszLbdjeix9Ng3R/fgWuDCCMcJaGR7dEJYXgcoXoKI/w2+qHedTb9kTWuVuul6dyn66Fvn7Aozwv3kg2PWzVMrSy2BsnybfStAWVXF8EWqN5eybWFfFGtZDvnpKVtUv1BKR5n2Vkxt+UpvtHPozBBvumjhESkfnPdvW4RTBduxM6Sailyg7lyIv3tJpAVxbBYiTbWrtquvWW/x7+N+JBZ5dFuuYOef0j4uCtdqMjDW2WtOyEM6mVb6l7kRD4PVflT4lP8opX4v9S9P04it9see5vBTtLoS14v78eLxVriCif0Kwp3Jcffh7o78N5Gf1Rs3F0t7Yi+mGGMioPKi+nBj2lNL5LT1J7ALUvZw1JYLV/pQ1Lgb7E09IDnobl3Jn24KxVoLYQ1VeHNbjvet3elnR4CPmR3Gsno2WwmsZuEJuZIVxa1o+gxPZnxkJzjyQZNp/34cr/KJD89hHdPGcWoNn3QYa4tgFEY5QRDEqXJ0x7fAtAvF8jDiDxVF1TcJD2H9f2BVeTMKg+6twknc7mgCZn3hYlVBdtahX0tU9U70AIZTj2U58gfRDlJcT1GeQ5DlIPOj0+NanLG6JQSNIx80AGsyEmyQsuCwHE/5O+rPSQ5zLL3CSKgBQKcnsYIdAguUAs8XWAYQzBYieN5Tlc5uSdLhs7qXUPTGaHH9pgmw9MtqBOdUE7gKQMdRuJFkRFljr+2/h8esspzPbUnChyri5qk6CqjKj3JUHhRonXD+A4P4fpTCyToQm4yborPcS0QRDgny6TIjin0XzT+8hN6XlokZFEnntYsEAYd5nUbERIlYd5kViQQe/uoRFqTB+gE8Jijawv4qIw81OCBvL+lj6fMX2yiTKez8CKWvKQ2Hdynye2IH7gyh1j4jndd+I5HvPtOFgT4DrmC4CHaFQOZB005bg7S3PmqoIuL45xRz0yVHuXuSbUJqih2Jbdm6CdR3pSIMPJfquxCLy4yJ41R8g1cbW6nq3NXv9/E00FPJbPpFrHTNaly+RPcm8JB58Ora2up3+DNdpI2XfAr0HSrifOZGjoK/bkgEticBo8PH/96fPj49z8///748PHPx4c/fnl8+O3XJvBzVxpIHxEYHfOGre3Y7fl2JqVTUqnbraap6ug2OC9dfDGH2/RJgUw7thFh5T5Tj/fDTcbM1/vxkB4e1II6dQXF3Y3zc8Ht4y+BgA7YiBe2izTLnrF2HIjB7px7QbDqjZx9MsA9ikKFpLR9mK9gMDM1Tb6c5TMXM8rGKUfKUY94JlAGdLs+hxxT5LvJqBRV9a6JdlPTp8GUuZVNe1xyxB5Fk8APL7QbVtjlHUvelhaaORQ9TRF1DA3blqwiWfS3CmVQ4YmBxsSjxqtC471uYukHNVzZpkov5Ki62daTbR6fn6vo2VFu2gsi9OT+z135bvdex4C+tj7BeH5PviK1LuLaE+N+b57bnjgbevVK9Jer1NF8bVtZZRaiYM061ggTfgeuzXxnR0iCFJ+acTu5ELTAEeZEfR3jLzgDK7fAqVazbEEgeZl+oDaffT6D67+kYfPgJwkAAA==",
// add your Session Id 
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot
BOT_NAME: process.env.BOT_NAME || "✦ B.M.B-XMD ✦ XMD ✦",
// add bot namw here for menu
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🔥,❤️‍🩹,❤️,🩷,🧡,💛,💚,💙,🩵,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "263789085533",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "𝐷𝐵𝑌☆",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©𝐷𝐵𝑌☆*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/p9hyal.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || ">B.M.B IS ACTIVE AND ALIVE\n\n\nKEEP USING B.M.B-XMD FROM B.M.B TECH INC⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS__MSG: process.env.AUTO_STATUS__MSG || "*🎉👀 Seen by 𝙱.𝙼.𝙱-𝚇𝙼𝙳 🚀🔥*",
// set the auto reply massage on status reply    
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
HEART_REACT: process.env.HEART_REACT || "false",
// make this true or false for heart reactions only 
OWNER_REACT: process.env.OWNER_REACT || "false",
// make it true or fasle for only react on owner msg only 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
AUTO_RECORDING: process.env.AUTO_RECORDING || "true"
// make it true for auto recoding 
};
