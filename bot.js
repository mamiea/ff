const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
:kissing::heart::eyes: حيااكْ الله  فى سيرفرنا 
╔╦╦╦═╦╗╔═╦═╦══╦═╗
║║║║╩╣╚╣═╣║║║║║╩╣
╚══╩═╩═╩═╩═╩╩╩╩═╝ 

‏نقدم لك دعوة لسموك الراقيَ .
‏لنحظى بجمال حضورك وتواجدك
•بتنـورونـا الجميع :wink:
•اي مشكله توآجهك ولا يهمك. عندك الاداره تفضل ونحل مشكلتك مع آي شخص بالسيرفر.:telephone_receiver:
•عندك فكره موضوع تفضل شآركنا فيه:jack_o_lantern::gift:
•واخيرا حييييياكم واكيد وجودكم هو اللي بيدعمنا وراح نكون الافضل.
شرفنا يا عسل:wink: :kissing_heart:

https://discord.gg/vMUaQmH
joined info-selfie
! Selfie.                              
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
:kissing::heart::eyes: حيااكْ الله  فى سيرفرنا 
╔╦╦╦═╦╗╔═╦═╦══╦═╗
║║║║╩╣╚╣═╣║║║║║╩╣
╚══╩═╩═╩═╩═╩╩╩╩═╝ 

‏نقدم لك دعوة لسموك الراقيَ .
‏لنحظى بجمال حضورك وتواجدك
سرفير hypixel3rb سرفير أسطوري حياك الله في رماتنا الصوتية والكتبية وأهلاً بيك في كل وقت شرفتنا يا كفو 

[هيبكسيل عرب #bestserver دسكورد for منكرفت ]
[ $ {member} ]

https://discord.gg/vMUaQmH
hypixel3rb 
https://media.giphy.com/media/j5ThXdq3wTKdW/giphy.gif   
https://media.giphy.com/media/WtDaSUB8GDiRW/giphy.gif   .                              
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`) 
}).catch(console.error)
})

client.login('NDkwNDc3NzQ5MDgxNzM1MTgw.Dpj8WA.5_AR3cW9OEsUx3lN_3dd8EF_G5c');