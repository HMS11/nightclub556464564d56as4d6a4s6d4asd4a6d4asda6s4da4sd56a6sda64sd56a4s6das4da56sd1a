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
     client.user.setActivity("NightClub. ",{type: 'WATCHING'})

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
                            const Premium = ['47580117395459412','']//ايديات السيرفرات اللي عندها بريميوم
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
                **By : <@${eyad.author.id}**`)
                eyad.guild.setName(args)
                eyad.channel.send(`**SERVER NAME CHANGED TO  ${args}**`);
                
       }

       });




client.on('message', eyadandr3d => {
  let args = eyadandr3d.content.split(" ").slice(1).join(" ")
  if (eyadandr3d.content.startsWith(`-serveravatar`)) {
                if (!eyadandr3d.member.hasPermission("ADMINISTRATOR")) return eyadandr3d.channel.send("**انت لا تمتلك الخاصيه المطلوبه** | ❎ ");
                if(!args) return eyadandr3d.channel.send('`من فضلك ضع رابط الصورة`');
                eyadandr3d.guild.owner.send(`**SERVER AVATAR CHANGED TO  ${args}**
                **By : <@${eyadandr3d.author.id}**>`)
            eyadandr3d.guild.setIcon(args)
                eyadandr3d.channel.send(`**SERVER AVATAR CHANGED TO  ${args}**`);
                
       }

       });














 client.on("message", message => {
    var prefix = "-"; // غير هنا حط البرفكس
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('``هذا الأمر مخصص للأدارة``');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "انجز بنجاح :white_check_mark: ",
        color: 0x06DF00,
        description: "تم مسح الرسائل بنجاح",
        footer: {
          text: "Cilęo, Server." // غير هنا حط اسم البوت
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});
  





const ytdl = require('ytdl-core');
const request = require('request');
const fs = require('fs');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');

const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const prefix = '-';
client.on('ready', function() {
    console.log(`i am ready ${client.user.username}`);
});
/*
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
*/
var servers = [];
var queue = [];
var guilds = [];
var queueNames = [];
var isPlaying = false;
var dispatcher = null;
var voiceChannel = null;
var skipReq = 0;
var skippers = [];
var now_playing = [];
/*
\\\\\\\\\\\\\\\\\\\\\\\\V/////////////////////////
\\\\\\\\\\\\\\\\\\\\\\\\V/////////////////////////
\\\\\\\\\\\\\\\\\\\\\\\\V/////////////////////////
\\\\\\\\\\\\\\\\\\\\\\\\V/////////////////////////
*/
client.on('ready', () => {});
var download = function(uri, filename, callback) {
    request.head(uri, function(err, res, body) {
        console.log('content-type:', res.headers['content-type']);
        console.log('content-length:', res.headers['content-length']);

        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
};

client.on('message', function(message) {
    const member = message.member;
    const mess = message.content.toLowerCase();
    const args = message.content.split(' ').slice(1).join(' ');

    if (mess.startsWith(prefix + 'play')) {
        if (!message.member.voiceChannel) return message.channel.send('**:x: You have to be in a voice channel to use this command.**');
        // if user is not insert the URL or song title
        if (args.length == 0) {
            let play_info = new Discord.RichEmbed()
                .setAuthor(client.user.username, client.user.avatarURL)
                .setFooter('' + message.author.tag)
                .setDescription('**-play [Link or query]**')
            message.channel.sendEmbed(play_info)
            return;
        }
        if (queue.length > 0 || isPlaying) {
            getID(args, function(id) {
                add_to_queue(id);
                fetchVideoInfo(id, function(err, videoInfo) {
                    if (err) throw new Error(err);
                    let play_info = new Discord.RichEmbed()
                        .setAuthor(client.user.username, client.user.avatarURL)
                        .addField('Added To Queue', `**
                          ${videoInfo.title}
                          **`)
                        .setColor("#a637f9")
                        .setFooter('' + message.author.tag)
                        .setThumbnail(videoInfo.thumbnailUrl)
                    message.channel.sendEmbed(play_info);
                    queueNames.push(videoInfo.title);
                    now_playing.push(videoInfo.title);

                });
            });
        }
        else {

            isPlaying = true;
            getID(args, function(id) {
                queue.push('placeholder');
                playMusic(id, message);
                fetchVideoInfo(id, function(err, videoInfo) {
                    if (err) throw new Error(err);
                    let play_info = new Discord.RichEmbed()
                        .setAuthor(client.user.username, client.user.avatarURL)
                        .addField('Searching :mag_right:', `**${videoInfo.title}
                              **`)
                        .setColor("RANDOM")
                        .addField(`Added To Queue :`, message.author.username)
                        .setThumbnail(videoInfo.thumbnailUrl)

                    // .setDescription('?')
                    message.channel.sendEmbed(play_info)
               message.channel.send(`
                         **Playing :notes:**  **${videoInfo.title}**`)
                    client.user.setGame(videoInfo.title,'https://www.twitch.tv/Abdulmohsen');
                });
            });
        }
    }
    else if (mess.startsWith(prefix + 'skip')) {
        if (!message.member.voiceChannel) return message.channel.send('**:x: You have to be in a voice channel to use this command.**');
        message.channel.send('**:fast_forward: Skipped :thumbsup:**').then(() => {
            skip_song(message);
            var server = server = servers[message.guild.id];
            if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
        });
    }
    else if (message.content.startsWith(prefix + 'volume')) {
        if (!message.member.voiceChannel) return message.channel.send('**:x: You have to be in a voice channel to use this command.**');
        // console.log(args)
        if (args > 100) return message.channel.send('**100-1**')
        if (args < 1) return message.channel.send('**100-1**')
        dispatcher.setVolume(1 * args / 50);
        message.channel.sendMessage(`**Volume: ** **${dispatcher.volume*50}%** `);
    }
    else if (mess.startsWith(prefix + 'pause')) {
        if (!message.member.voiceChannel) return message.channel.send('**:x: You have to be in a voice channel to use this command.**');
        message.channel.send('**Paused :pause_button:**').then(() => {
            dispatcher.pause();
        });
    }
    else if (mess.startsWith(prefix + 'resume')) {
        if (!message.member.voiceChannel) return message.channel.send('**:x: You have to be in a voice channel to use this command.**');
            message.channel.send('**:play_pause: Resuming :thumbsup:**').then(() => {
            dispatcher.resume();
        });
    }
    else if (mess.startsWith(prefix + 'leave')) {
        if (!message.member.voiceChannel) return message.channel.send('**:x: You have to be in a voice channel to use this command.**');
        message.channel.send('**:mailbox_with_no_mail: Successfully disconnected**');
        var server = server = servers[message.guild.id];
        if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
    }
    else if (mess.startsWith(prefix + 'join')) {
        if (!message.member.voiceChannel) return message.channel.send('**:x: You have to be in a voice channel to use this command.**');
        message.member.voiceChannel.join().then(message.channel.send('**:thumbsup: Joined**'));
    }
    else if (mess.startsWith(prefix + 'play')) {
        if (!message.member.voiceChannel) return message.channel.send('**:x: You have to be in a voice channel to use this command.**');
        if (isPlaying == false) return message.channel.send('**:x: The player is not paused**');
        let playing_now_info = new Discord.RichEmbed()
            .setAuthor(client.user.username, client.user.avatarURL)
            .addField('Searching :mag_right:', `**
                  ${videoInfo.title}
                  **`)
            .setColor("RANDOM")
            .setFooter('Added To Queue: ' + message.author.tag)
            .setThumbnail(videoInfo.thumbnailUrl)
        //.setDescription('?')
        message.channel.sendEmbed(playing_now_info);
    }
});

function skip_song(message) {
    if (!message.member.voiceChannel) return message.channel.send('**:x: You have to be in a voice channel to use this command.**');
    dispatcher.end();
}

function playMusic(id, message) {
    voiceChannel = message.member.voiceChannel;


    voiceChannel.join().then(function(connectoin) {
        let stream = ytdl('https://www.youtube.com/watch?v=' + id, {
            filter: 'audioonly'
        });
        skipReq = 0;
        skippers = [];

        dispatcher = connectoin.playStream(stream);
        dispatcher.on('end', function() {
            skipReq = 0;
            skippers = [];
            queue.shift();
            queueNames.shift();
            if (queue.length === 0) {
                queue = [];
                queueNames = [];
                isPlaying = false;
            }
            else {
                setTimeout(function() {
                    playMusic(queue[0], message);
                }, 500);
            }
        });
    });
}

function getID(str, cb) {
    if (isYoutube(str)) {
        cb(getYoutubeID(str));
    }
    else {
        search_video(str, function(id) {
            cb(id);
        });
    }
}

function add_to_queue(strID) {
    if (isYoutube(strID)) {
        queue.push(getYoutubeID(strID));
    }
    else {
        queue.push(strID);
    }
}

function search_video(query, cb) {
    request("https://www.googleapis.com/youtube/v3/search?part=id&type=video&q=" + encodeURIComponent(query) + "&key=" + yt_api_key, function(error, response, body) {
        var json = JSON.parse(body);
        cb(json.items[0].id.videoId);
    });
}


function isYoutube(str) {
    return str.toLowerCase().indexOf('youtube.com') > -1;
}
 









client.login(process.env.BOT_TOKEN);
