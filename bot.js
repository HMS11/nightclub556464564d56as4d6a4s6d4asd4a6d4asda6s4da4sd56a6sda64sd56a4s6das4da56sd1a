const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');

client.on('ready', () => {
  console.log('╔[════════════════════════════════════]╗');
  console.log('')
  console.log('            ╔[════════════]╗')
  console.log('              Bot Is Online')
  console.log('            ╚[════════════]╝')
  console.log('')
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('')
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('')
  console.log('╚[════════════════════════════════════]╝')
});



client.on('ready', () => {
     client.user.setActivity("NightClub. | -help",{type: 'WATCHING'})

});






client.on('voiceStateUpdate', (old, now) => {
  const channel = client.channels.get('476729892512333828');
  const currentSize = channel.guild.members.filter(m => m.voiceChannel).size;
  const size = channel.name.match(/\[\s(\d+)\s\]/);
  if (!size) return channel.setName(`Speakers : ${currentSize} `);
  if (currentSize !== size) channel.setName(`Speakers : ${currentSize} `);
});

const developers = ["459300517999411218","389136174154907651",""]
const adminprefix = "-";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'playing')) {
    client.user.setGame(argresult);
          if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField("**PLAYING :video_game:    **","** **")
         message.channel.send({embed:embed});
                        }
  
     if (message.content === (adminprefix + "leaveserver")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'watching')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
         if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField("**WATCHING :video_camera:   **","** **")
         message.channel.send({embed:embed});
                        }
  
  if (message.content.startsWith(adminprefix + 'listening')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
       if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField("**LISTENING :musical_score:  **","** **")
         message.channel.send({embed:embed});
                        }
  
  if (message.content.startsWith(adminprefix + 'streaming')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
        if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField("**STREAMING  :space_invader: **","** **")
         message.channel.send({embed:embed});
                        }
	

  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`**Changing The Name To , :zap: ****${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`**Changing The Avatar To , :zap: ****${argresult}** `);
}
});




client.on("message", message => {
                            const Premium = ['475801173958459412','']//ايديات السيرفرات اللي عندها بريميوم
                            if (message.content === "-vip") {
                                if( Premium.some(word => message.guild.id.includes(word)) ) {

        message.channel.send('**Your Premuim will end in a fair 30 days**')

                                } else {
   message.channel.send('**Premium Only! 🙃**').then(message => {message.delete(1000)});
}
                          }
                      });





client.on('message', eyad => {
  let args = eyad.content.split(" ").slice(1).join(" ")
  if (eyad.content.startsWith(`-servername`)) {
                if (!eyad.member.hasPermission("ADMINISTRATOR")) return eyad.channel.send("**انت لا تمتلك الخاصيه المطلوبه** | ❎ ");
                if(!args) return eyad.channel.send('`يرجي ادخال اسم السرفر الجديد`');
                eyad.guild.owner.send(`**SERVER NAME CHANGED TO  ${args}**
                'By : <@${eyad.author.id}'`)
                eyad.guild.setName(args)
                eyad.channel.send(`**SERVER NAME CHANGED TO  ${args}**`);
                
       }

       });




client.on('message', eyadandr3d => {
  let args = eyadandr3d.content.split(" ").slice(1).join(" ")
  if (eyadandr3d.content.startsWith(`*serveravatar`)) {
                if (!eyadandr3d.member.hasPermission("ADMINISTRATOR")) return eyadandr3d.channel.send("**انت لا تمتلك الخاصيه المطلوبه** | ❎ ");
                if(!args) return eyadandr3d.channel.send('`من فضلك ضع رابط الصورة`');
                eyadandr3d.guild.owner.send(`**SERVER AVATAR CHANGED TO  ${args}**
                'By : <@${eyadandr3d.author.id}'>`)
            eyadandr3d.guild.setIcon(args)
                eyadandr3d.channel.send(`**SERVER AVATAR CHANGED TO  ${args}**`);
                
       }

       });


client.login(process.env.BOT_TOKEN);
