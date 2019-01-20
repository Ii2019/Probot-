const Discord = require('discord.js');
const moment = require("moment");  
const fs = require("fs");      
const dateFormat = require('dateformat');
const client = new Discord.Client(); 
const Canvas = require("canvas"); 
const prefix = "."
const id = JSON.parse(fs.readFileSync("./id/rank.json", "utf8"));

    var prefix = ".";
    var user = msg.author;
            var a = msg.guild.roles.find("name", 'Role KinG');
        if(!a){
        a = await msg.guild.createRole({
          name: "League Of Legends",
          color: "#ffffff",
          permissions:[]
        })
       
        }
        var m = msg.guild.roles.find("name", 'Role Magic');
    if(!m){
        m =  await msg.guild.createRole({
          name: "Role Magic",
          color: "#ffffff",
          permissions:[]
        })
        }
        var f = msg.guild.roles.find("name", 'Role POP');
        if(!f){
        f =  await msg.guild.createRole({
          name: "Role POP",
          color: "#ffffff",
          permissions:[]
        })
        }
var m = msg.guild.roles.find("name", 'Role Noob');
    if(!m){
        m =  await msg.guild.createRole({
          name: "Role Noob",
          color: "#ffffff",
          permissions:[]
        })
        }
        
 
        if (msg.content.startsWith(prefix +'addmerole')) {
 
        if(!msg.channel.guild) return msg.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
msg.channel.send(`يرحي اختيار رتبة اللعبة الذي تريدها \n1- KinG 📕 \n2- Magic 📗 \n3- POP 📘 \n4- Noob 📙 \n5- **لديك60 ثانية للاختيار **\n<@${msg.author.id}>`).then(res => {    
     res.react('📕').then(r=>{    
     res.react('📗').then(r=>{
     res.react('📘').then(r=>{
     res.react('📙').then(r=>{

 
    let aaa = (reaction, user) => reaction.emoji.name === '📕' && user.id === msg.author.id;    
    let mmm = (reaction, user) => reaction.emoji.name === '📗' && user.id === msg.author.id;
    let fff = (reaction, user) => reaction.emoji.name === '📘' && user.id === msg.author.id;
    let bbb = (reaction, user) => reaction.emoji.name === '📙' && user.id === msg.author.id;

    let aa = res.createReactionCollector(aaa, { maxMatches:1 , time: 20000 , });
    let mm = res.createReactionCollector(mmm, { maxMatches:1 , time: 20000 , });
    let ff = res.createReactionCollector(fff, { maxMatches:1 , time: 20000 , });
    let bb = res.createReactionCollector(bbb, { maxMatches:1 , time: 20000 , });

 
aa.on("collect", r => {
    msg.guild.member(user.id).addRole(a);
    msg.channel.send('`تم اعطائك رتبة للعبة KinG`');
    msg.delete();
    })
mm.on("collect", r => {
    msg.guild.member(user.id).addRole(m);
    msg.channel.send('`تم اعطائك رتبة للعبة Magic `');
    msg.delete();
})
ff.on("collect", r => {
    msg.guild.member(user.id).addRole(f);
    msg.channel.send('`تم اعطائك رتبة للعبة POP `');
    msg.delete();
})
bb.on("collect", r => {
    msg.guild.member(user.id).addRole(b);
    msg.channel.send('`تم اعطائك رتبة للعبة Noob `');
    msg.delete();
})

cc.on("collect", r => {
    msg.delete();
	
})
     })
     })
     })
     })
     })
     })
     })
     }
     }); 
client.login(process.env.BOT_TOKEN);
