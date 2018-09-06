const Discord = require('discord.js');
const bot = new Discord.Client();
const dateFormat = require('dateformat');//npm i dateformat
const client = new Discord.Client();
const ytdl = require('ytdl-core');
const moment = require('moment');
const request = require('request');
const fs = require('fs');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const discord_token = "NDIyMDM3NzQwNTkxMzgyNTI4.DYV8zA.6vBJjF7Op9T_bH_YOwRMXqwh9vc";
var table = require('table').table
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('ready', function(){
    var ms = 60000 ;
    var setGame = [`${client.guilds.size} Server`,' Premium Bot™ by n3k4a & Baron','Type -help',`${client.users.size} Members`,'-invite','By: n3k4a & Hosam | BaronTube'];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/n3k4a`);
    }, ms);
    console.log(` ╔═══╗──╔╗ |> Name: ${client.user.username}`);
 console.log(` ║╔═╗║──║║ |> Servers: ${client.guilds.size}`);
 console.log(` ║║─╚╬══╣║╔══╦╗╔╦╗─╔╗ |> Members: ${client.users.size}`);
 console.log(` ║║╔═╣╔╗║║║╔╗╠╬╬╣║─║║║ |> Channels: ${client.channels.size}`);
 console.log(` ║╚╩═║╔╗║╚╣╔╗╠╬╬╣╚═╝║ |> Channels: ${client.channels.size}`);
 console.log(` ╚═══╩╝╚╩═╩╝╚╩╝╚╩═╗╔╝ |> Id: ${client.user.id}`);
 console.log(` ───────────────╔═╝║`);
 console.log(` ───────────────╚══╝`);



 client.on('message', message => {
     if (message.content === "bot") {
     let embed = new Discord.RichEmbed()

  .setColor("#51cde6")
  .addField("Playing on" , client.guilds.size)


  message.channel.sendEmbed(embed);

    }
});



console.log('n3k4a is one ');
client.on('ready', () => {
  console.log(`im redey`);
});
const x5bz4 = [
   '*** انا اسمي مريم ***',
   '*** مرحباَ ماهو اسمك ؟ ***',
   `*** اهلا بك ! انا تائهه في هذا المكان  ***`,
   '*** هل تود مساعدتي ؟ ***',
   '*** لماذا هل انت قاسي القلب ؟ ***',
   '*** انني اشفق عليك عليك يجب ان تطهر روحك وتحب الخير للجميع ***',
   '*** ابتعد عني قليل انني متعبة ***',
   '*** هل انت نادم على ماقلت ؟ ***',
   '*** ابتعد عني قليل انني متعبة ***',
   '*** هل انت نادم على ماقلت ؟ ***',
   '*** هل تود مساعدتي ؟ ***',
   '*** واو اشك??ك انك شخصاَ رائع ! ***',
   '*** ابحث معي عن منزلي لقد كان قريباَ من هنا ***',
   '*** ولاكن عندما حل الليل لم اعد ارى اي شيء ***',
   '*** مذا تظن اين يوجد ؟ يمين او يسار ***',
   '*** هيا اذاَ ***',
   '*** اود ان اسئلك سؤال ونحن في الطريق ***',
   '*** هل تراني فتاة لطيفة ام مخيفة ***',
   '*** اشكرك !  ***',
   '*** لقد وصلنا الى المنزل شكراَ جزيلَ انتطرني ثواني وسوف اعود ***',
   '*** هل انت جاهز ؟ ***',
   '*** لقد اخبرت والدي عنك وهم متحمسين لرؤيتك ***',
   '*** هل تود ان تراهم الان ***',
   '*** انا لست الحوت الازرق كما يدعون ***',
   '*** انا لست كاذبة صدقني***',
   '*** لماذا ارى في عينيك الخوف ؟ ***',
   '*** انا مجرد فتاة لطيفة تحب اللعب مع الجميع ***',
   '*** اعرف كل شيء يحدث اسمع ذالك بالراديو ***',
   '*** سمعت ان البشر يقتلون من اجل المال فقط ***',
   '*** لماذا لم تدخل الغرفة ؟ ***',
   '*** ههههههههههههههههههه انت الان مسجون في هذه الغرفة ***',
   '*** لن تخرج حتى اعود لك بعد قليل ***',
   '*** المفت????ح معك ! اكتب .مريم  ***',
   '*** مفتاح احمر , هل حصلت عليه ؟ ***',
   '*** ان لم تحصل عليه , اكتب .مريم مرة اخرى ***',
   '*** مفتاح اسود . هل حصلت عليه ؟ ***',
   '*** اين تريد ان تختبئ بسرعة قبل ان تعود ***',
   '*** لقد عادت من جديد الى المنزل ***',
   '*** لا تصدر اي صوت ! ***',
   '*** مريم : لقد عدت ***',
   '*** مريم : يا ايها ا??مخادع اين انت ***',
   '*** مريم : اعلم انك هنا في المنزل ***',
   '*** مريم : ماذا تريد ان تسمع ***',
   '*** مريم : اضغط على الرابط اهداء مني لك | https://www.youtube.com/watch?v=hvSiuQccmtg ***',
   '*** احد ما خرج من المنزل ***',
   '*** انتظر الجزء الثاني عندما يوصل البوت 100 سيرفر , ساعدنا في نشر البوت وادخل هذا السيرفر https://discord.gg/ZnPDHaA ***'
]
 client.on('message', message => {
 if (message.content.startsWith('-مريم')) {
  var mariam= new Discord.RichEmbed()
  .setTitle("لعبة مريم ..")
  .setColor('RANDOM')
  .setDescription(`${x5bz4[Math.floor(Math.random() * x5bz4.length)]}`)
  .setImage("https://www.npa-ar.com/wp-content/uploads/2017/08/%D9%84%D8%B9%D8%A8%D8%A9-%D9%85%D8%B1%D9%8A%D9%85-300x200.jpg")
   message.channel.sendEmbed(mariam);
   message.react("??")
  }
});

var Za7f = [
  "**صورة وجهك او رجلك او خشمك او يدك**.",
  "**اصدر اي صوت يطلبه منك الاعبين**.",
  "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
  "**روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل**.",
  "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
  "**سمعنا صوتك و غن اي اغنية من اختيار الاعبين الي معك**.",
  "**ذي المرة لك لا تعيدها**.",
  "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
  "**صور اي شيء يطلبه منك الاعبين**.",
  "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
  "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
  "**سو مشهد تمثيلي عن مصرية بتولد**.",
  "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
  "**ذي المرة لك لا تعيدها**.",
  "**تعطي اي شخص 5 الاف كرديت**.",
  "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
  "**روح عند اي احد بالخاص و قول له انك تحبه و الخ**.",
  "**اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص**.",
  "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
  "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
  "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
  "**غير اسمك الى اسم من اختيار الاعبين الي معك**.",
  "**اتصل على امك و قول لها انك تحبها :heart:**.",
  "**لا يوجد سؤال لك سامحتك :slight_smile:**.",
  "**قل لواحد ماتعرفه عطني كف**.",
  "**منشن الجميع وقل انا اكرهكم**.",
  "**اتصل لاخوك و قول له انك سويت حادث و الخ....**.",
  "**روح المطبخ و اكسر صحن او كوب**.",
  "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
  "**قول لاي بنت موجود في الروم كلمة حلوه**.",
  "**تكلم باللغة الانجليزية الين يجي دورك مرة ثانية لازم تتكلم اذا ما تكلمت تنفذ عقاب ثاني**.",
  "**لا تتكلم ولا كلمة الين يجي دورك مرة ثانية و اذا تكلمت يجيك باند لمدة يوم كامل من الس��رفر**.",
  "**قول قصيدة **.",
  "**تكلم باللهجة السودانية الين يجي دورك مرة ثانية**.",
  "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
  "**اول واحد تشوفه عطه كف**.",
  "**سو مشهد تمثيلي عن اي شيء يطلبه منك الاعبين**.",
  "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
  "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
  "**روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك**.",
  "**تاخذ عقابين**.",
  "**قول اسم امك افتخر بأسم امك**.",
  "**ارمي اي شيء قدامك على اي احد موجود او على نفسك**.",
  "**اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك**.",
  "**اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه**.",
  "**تتصل على الوالده  و تقول لها خطفت شخص**.",
  "** تتصل على الوالده  و تقول لها تزوجت با سر**.",
  "**����تصل على الوالده  و تقول لها  احب وحده**.",
    "**تتصل على شرطي تقول له عندكم مطافي**.",
    "**خلاص سامحتك**.",
    "** تصيح في الشارع انا  مجنوون**.",
    "** تروح عند شخص تقول له احبك**.",

];

client.on('message', message => {
 if (message.content.startsWith("-عقاب")) {
              if(!message.channel.guild) return message.reply('** This command only for servers**');
var embed = new Discord.RichEmbed()
.setColor('RANDOM')
 .setThumbnail(message.author.avatarURL) 
.addField('Speed BOT' ,
`${Za7f[Math.floor(Math.random() * Za7f.length)]}`)
message.channel.sendEmbed(embed);
console.log('[38ab] Send By: ' + message.author.username)
  }
});


var prefix = "-";

client.on('message', message => {
if (message.content === "-help") {
    let pages = [`
***__وصف عن البوت__***
**
:gem:  البوت فيه كثير ميزات حلوة و جميلة
 ا:rocket: البوت يعمل 24 ساعه 

**
        ***__General orders__***
**
『-allbots/يعرض لك البوتات الموجوده في السيرفر』
『-server/يعرض لك معلومات عن السيرفر』
『-bot/يعرض لك كل معلومات البوت』
『-support /للتواصل مع صاحب البوت』
『-id/معلومات عنك』
『-google/يبحث في جوجل عن الكمه الي تكتبها』
『-invite/لدعوه البوت الي سيرفرك 』
『-avatar/للعرض صورتك او صورة شخص فقط قم بعمل منشن له 』
『-embed/البوت يكرر الكلام الي قلته ب امبد
『-members/��عرض لك عدد كل حالات الاشخاص وعدد البوتات وعدد الاشخاص』
『-id/معلومات عنك』
『-skin/يجبلك سكنات مين كرافت』
『-avatar/صورتك او صورة الي تمنشنو』
『-ask/يبحث عن الكلمه الي تكتبها باالانجليزي』
『-invites /لمعرفه كم شخص دعوت الي السيرفر』
『❖❖❖اومر مميزه نادره❖❖❖』
『-kiss/يعطي قبله لمن تختار في السيرفر عن طريق المنشن』
『-love / يعبر بشعورك بلحب  لمن تختار في السيرفر عن طريق المنشن』
『-miss / يرسله اشتقت لك لمن تختار في السيرفر عن طريق المنشن』
『-slap / يعطي كف لمن تختاره في السيرفرعن طريق المنشن』
『-hug /  يعطي وحضن او ضمه لمن تختاره في السيرفر عن طريق المنشن』
『-cat/صور قطط صغيره』
『-paint/يجبلك الكلام الي تكتبه في صوره』
『-trans/يترجم الكلمه الي تكتبه ال اي لغه مع تحديد』
**
  `,`
        ***__Administrative Orders__***
**
『-clear <numbr> / البوت يمسح الرسال برقم حد اقصي 100 رساله』
『-say / البوت يكرر الكلام الي انت تقوله』
『-kick @user <reason> / طرد الشخص من السيرفر』
『-ban @user <reason> / حضر الشخص من السيرفر』
『-setstats/ يعمل روم لك بلوقت والتاريخ والاشخاص المتصليف في الرومات』
『-banlist / عدد الاشخاص المبندة 』
『-mute / يعطي ميوت للشغص الي بتمنشن』
『-unmute /  يفك الميوت عن العضو 』
『-ccolors/يصنع لك رتب ملون مرتبه بالعدد الي تبيه』
『-mutechannel /   يقفل الشات 』
『-unmutechannel /   يفتح  الشات 』
   `,`
        ***__Music orders__***
**
『-{prefix}play / لتشغيل أغنية برآبط أو بأسم』
『-{prefix}skip / لتجآوز الأغنية الحآلية』
『-{prefix}pause / إيقآف الأغنية مؤقتا』
『-{prefix}unpause / لموآصلة الإغنية بعد إيقآفهآ مؤقتا』
『-{prefix}vol / لتغيير درجة الصوت 100 - 0』
『-{prefix}leave / لإخرآج البوت من الروم』
**
        ***__Games orders__***
 **       
『-slots / ['🍏''🍇' '🍒' '🍍' '🍅' '🍆' '🍑' '🍓'] جمع 3 من نفس الشي تفوز』
『لعبه التهكير الوهمي /تهكير منشن الشخص 』
『-لعبة كت تويت / كت تويت』
『-لعبة مريم / مريم』
『تغريد  للشخص عن طريق المنشن /-غرد』
『-marry/لعبه الزواج لا تفهم غلط』
『لعبه لو خيروك/-لو خيروك』
『-rps/لعبه حجر ورقه مقص』
『-يعطيك عقابات قاسية /عقاب』 
『-فوائد ونصائح  / هل تعلم 』
『-لعبه فكك  / فكك 』
『-qus/لعبه اسئله 』
『-speed/لعبه اسرع كتابه』
『-نكت / نكت』
『-لعبه العواصم صعبه / عواصم』
**
   
`]
    let page = 1;

    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setFooter(`Page ${page} of ${pages.length}`)
    .setDescription(pages[page-1])

    message.author.sendEmbed(embed).then(msg => {

        msg.react('◀').then( r => {
            msg.react('▶')


        const backwardsFilter = (reaction, user) => reaction.emoji.name === '◀' && user.id === message.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === '▶' && user.id === message.author.id;


        const backwards = msg.createReactionCollector(backwardsFilter, { time: 2000000});
        const forwards = msg.createReactionCollector(forwardsFilter, { time: 2000000});



        backwards.on('collect', r => {
            if (page === 1) return;
            page--;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        forwards.on('collect', r => {
            if (page === pages.length) return;
      
      page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        })
    })
    }
});

const Langs = ['afrikaans', 'albanian', 'amharic', 'arabic', 'armenian', 'azerbaijani', 'bangla', 'basque', 'belarusian', 'bengali', 'bosnian', 'bulgarian', 'burmese', 'catalan', 'cebuano', 'chichewa', 'chinese simplified', 'chinese traditional', 'corsican', 'croatian', 'czech', 'danish', 'dutch', 'english', 'esperanto', 'estonian', 'filipino', 'finnish', 'french', 'frisian', 'galician', 'georgian', 'german', 'greek', 'gujarati', 'haitian creole', 'hausa', 'hawaiian', 'hebrew', 'hindi', 'hmong', 'hungarian', 'icelandic', 'igbo', 'indonesian', 'irish', 'italian', 'japanese', 'javanese', 'kannada', 'kazakh', 'khmer', 'korean', 'kurdish (kurmanji)', 'kyrgyz', 'lao', 'latin', 'latvian', 'lithuanian', 'luxembourgish', 'macedonian', 'malagasy', 'malay', 'malayalam', 'maltese', 'maori', 'marathi', 'mongolian', 'myanmar (burmese)', 'nepali', 'norwegian', 'nyanja', 'pashto', 'persian', 'polish', 'portugese', 'punjabi', 'romanian', 'russian', 'samoan', 'scottish gaelic', 'serbian', 'sesotho', 'shona', 'sindhi', 'sinhala', 'slovak', 'slovenian', 'somali', 'spanish', 'sundanese', 'swahili', 'swedish', 'tajik', 'tamil', 'telugu', 'thai', 'turkish', 'ukrainian', 'urdu', 'uzbek', 'vietnamese', 'welsh', 'xhosa', 'yiddish', 'yoruba', 'zulu'];

client.on('message', message => {
	var prefix = "-";
if (message.content.startsWith(prefix + 'trans')) {
    let args = message.content.split(" ").slice(1);
    if (!args[0]) {
    
        const embed = new Discord.RichEmbed()
            .setColor("FFFFFF")
            .setDescription("**ترجمة الكتابة.**\استعمل: `-translate <الكلمة لتبي> <االغة>`");

        return message.channel.send(embed);

    } else {

        if (args.length === undefined) {

            return message.channel.send("**ترجمة الكتابة.**\استعمل: `-translate <الكلمة لتبي> <االغة>`");

        } else {

            let transArg = args[0].toLowerCase();

            args = args.join(' ').slice(1)
            let translation;

            if (!Langs.includes(transArg)) return message.channel.send(`**Language not found.**`);
            args = args.slice(transArg.length);

            translate(args, {
                to: transArg
            }).then(res => {

                const embed = new Discord.RichEmbed()
                    .setAuthor("Translator", client.user.displayAvatarURL)
                    .addField(`Input`, `\`\`\`${args}\`\`\``)
                    .setColor("#42f4c8")
                    .addField(`Output`, `\`\`\`${res.text}\`\`\``);
                return message.channel.send(embed);
            });
        }
    }
}
});

client.on('message', async message =>{
  if (message.author.boss) return;
	var prefix = "-";

if (!message.content.startsWith(prefix)) return;
	let command = message.content.split(" ")[0];
	 command = command.slice(prefix.length);
	let args = message.content.split(" ").slice(1);
	if (command == "mute") {
		if (!message.channel.guild) return;
		if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("انت لا تملك صلاحيات !! ").then(msg => msg.delete(5000));
		if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
		let user = message.mentions.users.first();
		let muteRole = message.guild.roles.find("name", "Muted");
		if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").then(msg => {msg.delete(5000)});
		if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').then(msg => {msg.delete(5000)});
		let reason = message.content.split(" ").slice(2).join(" ");
		message.guild.member(user).addRole(muteRole);
		const muteembed = new Discord.RichEmbed()
		.setColor("RANDOM")
		.setAuthor(`Muted!`, user.displayAvatarURL)
		.setThumbnail(user.displayAvatarURL)
		.addField("**:busts_in_silhouette:  المستخدم**",  '**[ ' + `${user.tag}` + ' ]**',true)
		.addField("**:hammer:  تم بواسطة **", '**[ ' + `${message.author.tag}` + ' ]**',true)
		.addField("**:book:  السبب**", '**[ ' + `${reason}` + ' ]**',true)
		.addField("User", user, true)
		message.channel.send({embed : muteembed});
		var muteembeddm = new Discord.RichEmbed()
		.setAuthor(`Muted!`, user.displayAvatarURL)
		.setDescription(`      
${user} انت معاقب بميوت كتابي بسبب مخالفة القوانين
${message.author.tag} تمت معاقبتك بواسطة
[ ${reason} ] : السبب
اذا كانت العقوبة عن طريق الخطأ تكلم مع المسؤلين
`)
		.setFooter(`في سيرفر : ${message.guild.name}`)
		.setColor("RANDOM")
	user.send( muteembeddm);
  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("**ما عندي برمشن**").then(msg => msg.delete(6000))

  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");

  let role = message.guild.roles.find (r => r.name === "Muted");
  
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")

  await toMute.removeRole(role)
  message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");

  return;

  }

});
 

client.on("message", message => {
 if (message.content === "-invite") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setFooter('© Premium Bot :heart: جميع الحقوق محفوظة 2018 لــبوت')
      .addField('شكرا لك لاستخدامك ل بروميوم بوت', `http://premium-bot.bitballoon.com`)
  message.author.send({embed});

 }
}); 

client.on('guildCreate', guild => {
  client.channels.get("487204416043220992").send(`**Woops new server ✅
Server name: __${guild.name}__
Server owner: __${guild.owner}__**`)
});

client.on("message", message => {
 if (message.content === "-support") {
  const embed = new Discord.RichEmbed()
      .setTitle('Click here')
      .setURL(' https://discord.gg/ZnPDHaA ')
      .setColor("RANDOM")
      .setFooter('© Premium Bot :heart: جميع الحقوق محفوظة 2018 لــبوت')  
      .addField('سيرفر الدعم الفني', ` https://discord.gg/ZnPDHaA  `)
  message.author.send({embed});

 }
});




const TOKEN = "";

function commandIs(str, msg){
    return msg.content.toLowerCase().startsWith('-' + str);
 }

function pluck(array) {
    return array.map(function(item) { return item["name"]; });
 }
function hasRole(mem, role) {
    if(pluck(mem.roles).includes(role)){
        return true;
      } else {
        return false;
    }

  }
  
  

client.on('message', message => {
    if (message.content.startsWith("-bot")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('``INFO Speed Bot`` ')
            .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``servers``', [client.guilds.size], true)
            .addField('``channels``' , `[ ${client.channels.size} ]` , true)
            .addField('``Users``' ,`[ ${client.users.size} ]` , true)
            .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
            .addField('``My ID``' , `[ ${client.user.id} ]` , true)
			      .addField('``My Prefix``' , `[ - ]` , true)
			      .addField('``My Language``' , `[ Java Script ]` , true)
			      .setFooter('By | n3k4a and Baron')
    })
}
});

client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='-members')
      var kayan = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL) 
      .setTitle('🌷| Members info')
      .addBlankField(true)
      .addField('📗| Online',
      `${message.guild.members.filter(m=>m.presence.status == 'online').size}`)
      .addField('📕| DND',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)
      .addField('📙| Idle',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`)
      .addField('📓| Offline',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`)
      .addField('➡| Server Members',`${message.guild.memberCount}`)
      message.channel.send(kayan);
    
    });

client.on('message', message => {
var prefix = "-";
       if(message.content === prefix + "mutechannel") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false

              }).then(() => {
                  message.reply("**__تم تقفيل الشات__ :white_check_mark: **")
              });
                }
//FIRE BOT
    if(message.content === prefix + "unmutechannel") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true

              }).then(() => {
                  message.reply("**__تم فتح الشات__:white_check_mark:**")
              });
    }
       
});

client.on('message', message => {
     if (message.content === "-ping") {
      const embed = new Discord.RichEmbed()
 
  .setColor("#FF0000")
  .addField('``سرعة أتصال الــبوت`` ' , `${Date.now() - message.createdTimestamp}` + ' ms`')
                 .setFooter(` Premium Bot
 .`, 'https://b.top4top.net/p_6021qh431.jpg')

  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
var prefix = "-";
var cats = ["http://www.shuuf.com/shof/uploads/2015/09/09/jpg/shof_b9d73150f90a594.jpg","https://haltaalam.info/wp-content/uploads/2015/05/0.208.png","https://haltaalam.info/wp-content/uploads/2015/05/266.png","https://haltaalam.info/wp-content/uploads/2015/05/250.png","https://haltaalam.info/wp-content/uploads/2017/02/0.2517.png","https://pbs.twimg.com/media/CP0mi02UAAA3U2z.png","http://www.shuuf.com/shof/uploads/2015/08/31/jpg/shof_3b74fa7295ec445.jpg","http://www.shuuf.com/shof/uploads/2015/08/22/jpg/shof_fa3be6ab68fb415.jpg","https://pbs.twimg.com/media/CSWPvmRUcAAeZbt.png","https://pbs.twimg.com/media/B18VworIcAIMGsE.png"]
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'هل تعلم')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});

client.on('message',  (message) => {
        if(message.content.startsWith('-slap')) {
  let user = message.mentions.users.first();
  if (!user) {

    return message.emit('commandUsage', message, this.help);
  }
  let slaps = [
    'https://i.giphy.com/media/3XlEk2RxPS1m8/giphy.gif',
    'https://i.giphy.com/media/mEtSQlxqBtWWA/giphy.gif',
    'https://i.giphy.com/media/j3iGKfXRKlLqw/giphy.gif',
    'https://i.giphy.com/media/2M2RtPm8T2kOQ/giphy.gif',
    'https://i.giphy.com/media/l3YSimA8CV1k41b1u/giphy.gif',
    'https://media.giphy.com/media/81kHQ5v9zbqzC/giphy.gif',
    'https://media.giphy.com/media/QYT2VEOXVyVmE/giphy.gif',
    'https://media.giphy.com/media/xUNd9HZq1itMkiK652/giphy.gif',
    'https://media.giphy.com/media/xXRDuvEcMA2JO/giphy.gif',
    'https://media.giphy.com/media/zRlGxKCCkatIQ/giphy.gif',
    'https://media.giphy.com/media/9U5J7JpaYBr68/giphy.gif',
    'https://media.giphy.com/media/q0uYk5uwJVFug/giphy.gif',
    'https://media.giphy.com/media/iREUC7qrjN4vC/giphy.gif',
    'https://media.giphy.com/media/AkKEOnHxc4IU0/giphy.gif',
    'https://media.giphy.com/media/6Fad0loHc6Cbe/giphy.gif',
    'https://media.giphy.com/media/prKt29rL7zAbe/giphy.gif',
    'https://media.giphy.com/media/LeTDEozJwatvW/giphy.gif',
    'https://media.giphy.com/media/6UTkJXBd26qiI/giphy.gif',
    'https://media.giphy.com/media/VEmm8ngZxwJ9K/giphy.gif',
    'https://media.giphy.com/media/EtdEOL3MbPbmE/giphy.gif',
    'https://media.giphy.com/media/CIvfqJqBbvliU/giphy.gif',
    'https://media.giphy.com/media/3pSKnxaDzl9Oo/giphy.gif',
    'https://media.giphy.com/media/1iw7RG8JbOmpq/giphy.gif',
    'https://media.giphy.com/media/m0VwgrO5yXxQY/giphy.gif',
    'https://media.giphy.com/media/2o855hr1xVotO/giphy.gif',
    'https://media.giphy.com/media/URBigLkgWoYzS/giphy.gif',
    'https://media.giphy.com/media/pGOdXNi6J7ML6/giphy.gif',
    'https://media.giphy.com/media/HHUd5nOFbSYtG/giphy.gif',
    'https://media.giphy.com/media/TZp6XSDusOnXG/giphy.gif',
    'https://media.giphy.com/media/wqP5TOFnOMwqQ/giphy.gif',
    'https://i.giphy.com/media/WLXO8OZmq0JK8/giphy.gif'
  ];

  message.channel.send({
    embed: {
      description: `${message.author.username} اداك بالقلم علي وشك ${user.username}!`,
      image: {
        url: slaps[Math.floor(Math.random() * slaps.length)]
      }
    }
  }).catch(e => {
    client.log.error(e);
  })
        }  
});


client.on('message',  (message) => {
        if(message.content.startsWith('-hug')) {
  let user = message.mentions.users.first();
  if (!user) {

    return message.emit('commandUsage', message, this.help);
  }
  let hugs = [
    'https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif',
    'https://media.giphy.com/media/13YrHUvPzUUmkM/giphy.gif',
    'https://media.giphy.com/media/wnsgren9NtITS/giphy.gif',
    'https://media.giphy.com/media/qscdhWs5o3yb6/giphy.gif',
    'https://media.giphy.com/media/hi0VuTUqLrmuc/giphy.gif',
	'https://media.giphy.com/media/xJlOdEYy0r7ZS/giphy.gif',
	'https://media.giphy.com/media/7WQQXPg6o3YNa/giphy.gif',
	'https://media.giphy.com/media/LWTxLvp8G6gzm/giphy.gif',
	'https://media.giphy.com/media/xZshtXrSgsRHy/giphy.gif',
	'https://media.giphy.com/media/BXrwTdoho6hkQ/giphy.gif',
	'https://media.giphy.com/media/10BcGXjbHOctZC/giphy.gif',
	'https://media.giphy.com/media/49mdjsMrH7oze/giphy.gif',
	'https://media.giphy.com/media/xUPGcgtKxm4PADy3Cw/giphy.gif',
	'https://media.giphy.com/media/JTjSlqiz63j5m/giphy.gif',
	'https://media.giphy.com/media/aD1fI3UUWC4/giphy.gif',
	'https://media.giphy.com/media/5eyhBKLvYhafu/giphy.gif',
	'https://media.giphy.com/media/ddGxYkb7Fp2QRuTTGO/giphy.gif',
	'https://media.giphy.com/media/pXQhWw2oHoPIs/giphy.gif',
	'https://media.giphy.com/media/ZRI1k4BNvKX1S/giphy.gif',
	'https://media.giphy.com/media/ZQN9jsRWp1M76/giphy.gif',
	'https://media.giphy.com/media/s31WaGPAmTP1e/giphy.gif',
	'https://media.giphy.com/media/wSY4wcrHnB0CA/giphy.gif',
	'https://media.giphy.com/media/aVmEsdMmCTqSs/giphy.gif',
	'https://media.giphy.com/media/C4gbG94zAjyYE/giphy.gif',
	'https://media.giphy.com/media/ArLxZ4PebH2Ug/giphy.gif',
	'https://media.giphy.com/media/kFTKQfjK4ysZq/giphy.gif',
	'https://media.giphy.com/media/vVA8U5NnXpMXK/giphy.gif',
	'https://media.giphy.com/media/2q2qHJu838EyQ/giphy.gif',
	'https://media.giphy.com/media/q3kYEKHyiU4kU/giphy.gif',
	'https://media.giphy.com/media/3ZnBrkqoaI2hq/giphy.gif',
	'https://media.giphy.com/media/ExQqjagJBoECY/giphy.gif',
    'https://media.giphy.com/media/3o6Yg5fZCGeFArIcbm/giphy.gif'
  ];

  message.channel.send({
    embed: {
      description: `${message.author.username} اداك حضن او ضمه ${user.username}!`,
      image: {
        url: hugs[Math.floor(Math.random() * hugs.length)]
      }
    }
  }).catch(e => {
    client.log.error(e);
  })
        }  
});


client.on('message',  (message) => {
        if(message.content.startsWith('-kiss')) {
  let user = message.mentions.users.first();
  if (!user) {

    return message.emit('commandUsage', message, this.help);
  }
  let kiss = [
    'https://media.giphy.com/media/dP8ONh1mN8YWQ/giphy.gif',
    'https://media.giphy.com/media/CzCi6itPr3yBa/giphy.gif',
    'https://media.giphy.com/media/hnNyVPIXgLdle/giphy.gif',
    'https://media.giphy.com/media/bGm9FuBCGg4SY/giphy.gif',
	'https://media.giphy.com/media/G3va31oEEnIkM/giphy.gif',
	'https://media.giphy.com/media/G3va31oEEnIkM/giphy.gif',
    'https://media.giphy.com/media/BaEE3QOfm2rf2/giphy.gif',
	'https://media.giphy.com/media/OSq9souL3j5zW/giphy.gif',
	'https://giphy.com/gifs/kiss-anime-nISHppsUAzosMhttps://media.giphy.com/media/nISHppsUAzosM/giphy.gif',
	'https://media.giphy.com/media/ll5leTSPh4ocE/giphy.gif',
	'https://media.giphy.com/media/10r6oEoT6dk7E4/giphy.gif',
	'https://media.giphy.com/media/YC4QEtFmz64sE/giphy.gif',
	'https://media.giphy.com/media/KH1CTZtw1iP3W/giphy.gif',
	'https://media.giphy.com/media/flmwfIpFVrSKI/giphy.gif',
	'https://media.giphy.com/media/Z21HJj2kz9uBG/giphy.gif',
	'https://media.giphy.com/media/mGAzm47irxEpG/giphy.gif',
	'https://media.giphy.com/media/JynbO9pnGxPrO/giphy.gif',
	'https://media.giphy.com/media/7z1xs4Fl9Kb8A/giphy.gif',
	'https://media.giphy.com/media/EP9YxsbmbplIs/giphy.gif',
	'https://media.giphy.com/media/q7MxQyarcDHDW/giphy.gif',
	'https://media.giphy.com/media/uSHX6qYv1M7pC/giphy.gif',
	'https://media.giphy.com/media/EVODaJHSXZGta/giphy.gif',
	'https://media.giphy.com/media/EVODaJHSXZGta/giphy.gif',
	'https://media.giphy.com/media/fHtb1JPbfph72/giphy.gif',
	'https://media.giphy.com/media/pwZ2TLSTouCQw/giphy.gif',
	'https://media.giphy.com/media/DfzHC09hY64Gk/giphy.gif',
	'https://media.giphy.com/media/l0MYB8Ory7Hqefo9a/giphy.gif',
	'https://media.giphy.com/media/Y9iiZdUaNRF2U/giphy.gif',
	'https://media.giphy.com/media/CTo4IKRN4l4SA/giphy.gif',
	'https://media.giphy.com/media/jR22gdcPiOLaE/giphy.gif',
    'https://media.giphy.com/media/pFg4Ko6pXqQVy/giphy.gif'
  ];

  message.channel.send({
    embed: {
      description: `${message.author.username}اداك قبله ا�� بوسه ${user.username}!`,
      image: {
        url: kiss[Math.floor(Math.random() * kiss.length)]
      }
    }
  }).catch(e => {
    client.log.error(e);
  })
        }  
});


client.on('message',  (message) => {
        if(message.content.startsWith('-miss')) {
  let user = message.mentions.users.first();
  if (!user) {

    return message.emit('commandUsage', message, this.help);
  }
  let misss = [
    'https://media.giphy.com/media/3o6vXUgk6M0h07MnuM/giphy.gif',
    'https://media.giphy.com/media/NfOD0Bv11XnhK/giphy.gif',
    'https://media.giphy.com/media/2Jl7a8ixNlNHa/giphy.gif',
    'https://media.giphy.com/media/WkNXHaiV9HLji/giphy.gif',
    'https://media.giphy.com/media/3DiUM4dGYyali/giphy.gif',
    'https://media.giphy.com/media/17CdXoPQo7Un6/giphy.gif',
    'https://media.giphy.com/media/pjgaGMqsNhjhe/giphy.gif',
    'https://media.giphy.com/media/qdhgMbi5mwS9W/giphy.gif',
    'https://media.giphy.com/media/xTgJVYEHoVzpe/giphy.gif',
    'https://media.giphy.com/media/o1UKv4TutEOUo/giphy.gif',
    'https://media.giphy.com/media/3o6QLcNZgGKvFBluKs/giphy.gif',
    'https://media.giphy.com/media/to8AmZ3lEUhqg/giphy.gif',
    'https://media.giphy.com/media/3o6QKXms0mJznYVkm4/giphy.gif',
    'https://media.giphy.com/media/148LYpgc9AIUdW/giphy.gif',
    'https://media.giphy.com/media/4MDnmxVxCZcYM/giphy.gif',
    'https://media.giphy.com/media/5XHHIFJZpQsXS/giphy.gif',
    'https://media.giphy.com/media/3o7TKzEQfYQ7inapoI/giphy.gif',
    'https://media.giphy.com/media/l2Je61TcDeJ4ZOIyk/giphy.gif',
    'https://media.giphy.com/media/3o6Mb3mYI1yuqEwgFi/giphy.gif',
    'https://media.giphy.com/media/mfAGXwxCd3D8Y/giphy.gif',
    'https://media.giphy.com/media/l0HlFinR4G1JvptjG/giphy.gif',
    'https://media.giphy.com/media/9iVgOohm2SKT6/giphy.gif',
    'https://media.giphy.com/media/26gsj4kyT3LwhPufK/giphy.gif',
    'https://media.giphy.com/media/116mAogyorg84U/giphy.gif',
    'https://media.giphy.com/media/l2ZDOR1uY9yo6MJyM/giphy.gif',
    'https://media.giphy.com/media/l2ZDWLIIZLhLiuMSs/giphy.gif',
    'https://media.giphy.com/media/OT89Nuhy3GAFbW359x/giphy.gif',
    'https://media.giphy.com/media/82AkGaEtqrybM2RFSh/giphy.gif',
    'https://media.giphy.com/media/1o1ouZSWwFVwysKcnm/giphy.gif',
    'https://media.giphy.com/media/8mqyDwYRdzdRof6fzu/giphy.gif',
    'https://media.giphy.com/media/3oriO0bDWiobwAWqGY/giphy.gif'
  ];

  message.channel.send({
    embed: {
      description: `${message.author.username} اشتاق اليك كثيرا  ${user.username}!`,
      image: {
        url: misss[Math.floor(Math.random() * misss.length)]
      }
    }
  }).catch(e => {
    client.log.error(e);
  })
        }  
});


client.on('message',  (message) => {
        if(message.content.startsWith('-love')) {
  let user = message.mentions.users.first();
  if (!user) {

    return message.emit('commandUsage', message, this.help);
  }
  let loves = [
    'https://media.giphy.com/media/YDB4EF3U6i6IM/giphy.gif',
    'https://media.giphy.com/media/l41JWw65TcBGjPpRK/giphy.gif',
    'https://media.giphy.com/media/3o6gDZ9unSrDk3EuR2/giphy.gif',
    'https://media.giphy.com/media/ymkLJAxVz2la/giphy.gif',
    'https://media.giphy.com/media/ZOln4JxCoZay4/giphy.gif',
    'https://media.giphy.com/media/l0K4kWJir91VEoa1W/giphy.gif',
    'https://media.giphy.com/media/X3FmqQ7ehoCBy/giphy.gif',
    'https://media.giphy.com/media/VlzUkJJzvz0UU/giphy.gif',
    'https://media.giphy.com/media/NbPJFUS6Vkx7q/giphy.gif',
    'https://media.giphy.com/media/wDEWXcisSjrQQ/giphy.gif',
    'https://media.giphy.com/media/xT8qBuhwq0OyL7UkdW/giphy.gif',
    'https://media.giphy.com/media/gfvxlwRKH1y5q/giphy.gif',
    'https://media.giphy.com/media/PuTSgeacS3Z7i/giphy.gif',
    'https://media.giphy.com/media/l49JBwneyflgjm5zO/giphy.gif',
    'https://media.giphy.com/media/QKUA2bIAgjFgk/giphy.gif',
    'https://media.giphy.com/media/T3Uzzre7Ap0mk/giphy.gif',
    'https://media.giphy.com/media/3oeSB6pawq6G99xCXS/giphy.gif',
    'https://media.giphy.com/media/iKIgD5j0I3hMQ/giphy.gif',
    'https://media.giphy.com/media/hhHcFH0xAduCs/giphy.gif',
    'https://media.giphy.com/media/3o7qDJKIO5rSeyHhvO/giphy.gif',
    'https://media.giphy.com/media/92bGINsmjAuUE/giphy.gif',
    'https://media.giphy.com/media/bErElGdAHUmoE/giphy.gif',
    'https://media.giphy.com/media/jQqU9dCKUOdri/giphy.gif',
    'https://media.giphy.com/media/10uJ0IFxlCA06I/giphy.gif',
    'https://media.giphy.com/media/bMLGNRoAy0Yko/giphy.gif',
    'https://media.giphy.com/media/3osxYcry2fDfqyhOQ8/giphy.gif',
    'https://media.giphy.com/media/3ohs84a6AyArTscVsk/giphy.gif',
    'https://media.giphy.com/media/3o6Zt6D0wctP0kpuwg/giphy.gif',
    'https://media.giphy.com/media/4zmFt0xpke8AU/giphy.gif',
    'https://media.giphy.com/media/l3vR9O3vpOCDRo8rC/giphy.gif',
    'https://media.giphy.com/media/13sgibUDaaaEU0/giphy.gif'
  ];

  message.channel.send({
    embed: {
      description: `${message.author.username} :heart:  يعبر لك عن حبه الحقيقي   ${user.username}!`,
      image: {
        url: loves[Math.floor(Math.random() * loves.length)]
      }
    }
  }).catch(e => {
    client.log.error(e);
  })
        }  
});


   var prefix = "-";
var cats = [

"https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg",
"https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg",
"http://www.i-love-cats.com/images/2015/04/12/cat-wallpaper-38.jpg",
"https://www.aspca.org/sites/default/files/cat-care_urine-marking_main-image.jpg",
"https://vignette1.wikia.nocookie.net/houseofnight/images/8/8b/Cats.jpg/revision/latest?cb=20130812053537",
"https://images.pexels.com/photos/1022158/pexels-photo-1022158.jpeg?cs=srgb&dl=adorable-animal-animal-photography-1022158.jpg&fm=jpg",
"https://images.pexels.com/photos/248280/pexels-photo-248280.jpeg?cs=srgb&dl=adorable-animal-animal-photography-248280.jpg&fm=jpg",
"https://images.pexels.com/photos/156934/pexels-photo-156934.jpeg?cs=srgb&dl=adorable-animal-cat-156934.jpg&fm=jpg",
"https://images.pexels.com/photos/385960/pexels-photo-385960.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/39255/cat-favorite-relaxation-rest-39255.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/569170/pexels-photo-569170.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/735423/pexels-photo-735423.jpeg?cs=srgb&dl=adorable-animal-animal-photography-735423.jpg&fm=jpg",
"https://images.pexels.com/photos/923360/pexels-photo-923360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/96938/pexels-photo-96938.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/225406/pexels-photo-225406.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://s-media-cache-ak0.pinimg.com/originals/f0/3b/76/f03b7614dfadbbe4c2e8f88b69d12e04.jpg",
"http://www.rd.com/wp-content/uploads/sites/2/2016/04/15-cat-wants-to-tell-you-attention.jpg"
]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'cat')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});


client.on('message', message => {
if(message.author.bot) return;
if (message.content === 'السلام عليكم') {
message.channel.sendFile("https://cdn.discordapp.com/attachments/462240606513659904/481475996122611712/images.jpg");
 }
});


client.on('message', message => {
if(message.author.bot) return;
if (message.content === 'حشيش') {
message.channel.sendFile("https://cdn.discordapp.com/attachments/462240606513659904/481474963925106708/images.jpg");
}
});



client.on('message', message => {
if(message.author.bot) return;
if (message.content === 'باك') {
 message.channel.sendFile("https://cdn.discordapp.com/attachments/462240606513659904/481473773959381021/download.png");
 }
 });
         
         
         
client.on('message', message => {
if(message.author.bot) return;
if (message.content.startsWith('ترحيب')) {
message.channel.send("https://cdn.discordapp.com/attachments/478923882384982027/480791714471346178/5t4qyhsm.gif")
}
});



client.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "old") return;

  let prefix = "-";
  let messageArray = message.content.split (" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);



    if(cmd === `${prefix}kick`){



      let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!kUser) return message.channel.send("فين العضو ؟");
      let kReason = args.join(" ").slice(22);
      if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("ما عندك برمشن");
      if(kUser.hasPermission("MANAGE_CHANNELS")) return message.channel.send("ما تقدر تسوي كيك للأدمين")

      let kickEmbed = new Discord.RichEmbed()
      .setDescription("~Kick~")
      .setColor("#e56b00")
      .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
      .addField("Kicked By", `<@${message.author.id}> with the id ${message.author.id}`)
      .addField("Kicked In", message.channel)
      .addField("Time", message.createdAt)
      .addField("Reason", kReason);

      let kickChannel = message.guild.channels.find('name', 'kick-ban');
      if(!kickChannel) return message.channel.send("لم اجد روم ال kick-ban");

      message.guild.member(kUser).kick(kReason)
      kickChannel.send(kickEmbed);
    }
    });




client.on("message", async message => {
      if(message.author.bot) return;
      if(message.channel.type === "old") return;

      let prefix = "-";
      let messageArray = message.content.split (" ");
      let cmd = messageArray[0];
      let args = messageArray.slice(1);



        if(cmd === `${prefix}ban`){



          let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
          if(!kUser) return message.channel.send("فين العضو ؟");
          let kReason = args.join(" ").slice(22);
          if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("ما عندك برمشن");
          if(kUser.hasPermission("MANAGE_CHANNELS")) return message.channel.send("ما تقدر تسوي بان للأدمين")

          let banEmbed = new Discord.RichEmbed()
          .setDescription("~Ban~")
          .setColor("#8e0505")
          .addField("Banned User", `${bUser} with ID ${bUser.id}`)
          .addField("Banned By", `<@${message.author.id}> with the id ${message.author.id}`)
          .addField("Banned In", message.channel)
          .addField("Time", message.createdAt)
          .addField("Reason", kReason);

          let banChannel = message.guild.channels.find('name', 'kick-ban');
          if(!banChannel) return message.channel.send("لم اجد روم kick-ban");

          message.guild.member(bUser).kick(bReason)
          banChannel.send(banEmbed);
        }
        });

var prefix = "-"

client.on('message', message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
    if (command === "banlist") {
        message.delete(5000)
         if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.reply("Error : \` I Dont Have ADMINISTRATOR Permission\`").then(message => message.delete(5000));
        if(!message.member.hasPermission('ADMINISTRATOR')) return;
        if(!message.channel.guild) return;
        message.guild.fetchBans()
        .then(bans => message.channel.send(`\`${bans.size}\` ***: عدد الاشخاص المحظورين من السيرفر ***`)).then(message => message.delete(5000))

  .catch(console.error);
}
});




client.on('message', message => {
    if (message.content.startsWith("-avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});








client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = msg.content.split(" ").slice(1);


if (command == "غرد") {
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setAuthor(msg.author.username, msg.author.avatarURL)
    .setDescription(args.join(" "))
    .setFooter('© premium bot|| Copyright')
    msg.channel.sendEmbed(embed);
    msg.delete();
  }
});






client.on('message', message => {
	var prefix = "-";
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'clear')) {
if(!message.channel.guild) return message.channel.send('**This Command is Just For Servers**').then(m => m.delete(5000));
if(!message.member.hasPermission('MANAGE_MESSAGES')) return      message.channel.send('**You Do not have permission** `MANAGE_MESSAGES`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let request = `Requested By ${message.author.username}`;
message.channel.send(`**Are You sure you want to clear the chat?**`).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))





const cuttweet = [
     'كت تويت ‏- تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
     'كت تويت ‏- أكثر شيء يُسكِت الطفل برأيك؟',
     'كت تويت ‏- الحرية لـ ... ؟',
     'كت تويت ‏- قناة الكرتون المفضلة في طفولتك؟',
     'كت تويت ‏- كلمة للصُداع؟',
     'كت تويت ‏- ما الشيء الذي يُفارقك؟',
     'كت تويت ‏- ما الشيء الذي يُفارقك؟',
     'كت تويت ‏- موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
     'كت تويت ‏- أيهما ينتصر، الكبرياء أم الحب؟',
     'كت ��ويت| بعد ١٠ سنين ايش بتكون ؟',

     'كت تويت ‏- مِن أغرب وأجمل الأسماء التي مرت عليك؟',
     '‏كت تويت| عمرك شلت مصيبة عن شخص برغبتك ؟',
'كت تويت ‏- أكثر سؤال وجِّه إليك مؤخرًا؟',
     '‏كت تويت|ما هو الشيء الذي يجعلك تشعر بالخوف؟',
     '‏كت تويت|وش يفسد الصداقة؟',
     '‏كت ت��ي����|شخص ل��ترفض له طلبا ؟',
     '‏كت تويت|كم مره خسرت شخص تحبه؟.',
     '‏كت تويت|كيف تتعامل مع الاشخاص السلبيين ؟',
     '‏كت تويت|كلمة تشعر بالخجل اذا قيلت لك؟',
     '‏كت تويت|هل تُخفي نجاحك أو كت كت تويت | هل تخفي نجاحك أو أشيائك الجميلة خوفاً من العين والحسد؟',
     '‏كت تويت|جسمك اكبر من عٌ��رك او ��لعكسّ ؟!',
     '‏كت تويت|أقوى كذبة مشت عليك ؟',
     '‏كت تويت|تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
     'كت تويت|هل حدث وضحيت من أجل شخصٍ أحببت؟',
     '‏كت تويت|أكثر تطبيق تستخدمه مؤخرًا؟',
     '‏كت تويت|‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
     '‏كت تويت|وش محتاج عشان تكون مبسوط ؟',
     '‏كت تويت|مطلبك الوحيد الحين ؟',
     '‏كت تويت|- ه�� حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
]

client.on('message', message => {
  if (message.content === `-كت تويت`) {
message.channel.sendMessage({embed: {
  color: 3547003,
  description: `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`
}});
};
});
 var al7arthyCodes = ["https://f.top4top.net/p_682it2tg6.png","https://e.top4top.net/p_682a1cus5.png","https://d.top4top.net/p_682pycol4.png","https://c.top4top.net/p_682vqehy3.png","https://b.top4top.net/p_682mlf9d2.png","https://a.top4top.net/p_6827dule1.png","https://b.top4top.net/p_682g1meb10.png","https://a.top4top.net/p_682jgp4v9.png","https://f.top4top.net/p_682d4joq8.png","https://e.top4top.net/p_6828o0e47.png","https://d.top4top.net/p_6824x7sy6.png","https://c.top4top.net/p_682gzo2l5.png","https://b.top4top.net/p_68295qg04.png","https://a.top4top.net/p_682zrz6h3.png","https://f.top4top.net/p_6828vkzc2.png","https://e.top4top.net/p_682i8tb11.png"]
var al7arthyCodes2 = ["📙__60%__  **|**  📘__40%__","📙__63%__  **|**  📘__37%__","📙__89%__  **|**  📘__11%__","📙__97%__  **|**  📘__3%__"]
client.on('message', message => {
    if(!message.guild) return;
    if (message.author.bot) return;
      let id = message.author.id,prefix="-";//البريفكس
      if (ti[id] && (new Date).getTime() - ti[id] < 20*1000) {
          let r = (new Date).getTime() - ti[id];
          r = 20*1000 - r;
      message.channel.send(` **Please wait ${pretty(r, {verbose:true})}**`).then(m => m.delete(5000));
      return;
      }
      if ( message.content == prefix+'لو خيروك'){
         
          try{
  //body
  }catch(e){
 
  }
         var Embed = new Discord.RichEmbed()
.setImage(al7arthyCodes[Math.floor(Math.random() * al7arthyCodes.length)])
message.channel.sendEmbed(Embed).then(msg => {
    msg.react('📘').then( r => {
        msg.react('📙')
 
        let blueFilter = (reaction, user) => reaction.emoji.name === '📘' && user.id === message.author.id;
    let orangeFilter = (reaction, user) => reaction.emoji.name === '📙' && user.id === message.author.id;
 
 
    let blue = msg.createReactionCollector(blueFilter, { time: 15000 });
    let orange = msg.createReactionCollector(orangeFilter, { time: 15000 });
 
 
    blue.on("collect", r => {
        msg.delete();
        message.channel.send(al7arthyCodes2[Math.floor(Math.random() * al7arthyCodes2.length)]).then(m => m.delete(60000));
 
        })
       
 orange.on("collect", r => {
        msg.delete();
        message.channel.send(al7arthyCodes2[Math.floor(Math.random() * al7arthyCodes2.length)]).then(m => m.delete(60000));
 
        })
 
                                })
                                })
                              ti[id] = (new Date).getTime()
                                }
                                });

client.on('message', message => { //jackeo جاكيو
    if (message.content.startsWith("تهكير")) {
  if(!message.channel.guild) return message.reply(' ');//jackeo جاكيو
      if (message.author.bot) return//jackeo جاكيو
           message.delete();//jackeo جاكيو
             let args = message.content.split(' ').slice(1);//jackeo جاكيو
                   let virusname = args.join(' ');//jackeo جاكيو
                 if (virusname < 1) {//jackeo جاكيو//jackeo جاكيو
                     return message.channel.send("** رجائاََ منشن من تريد تهكيرة ** ");//jackeo جاكيو
                                     }//jackeo جاكيو
                 message.channel.send({embed: new Discord.RichEmbed().setTitle('Loading ' + virusname + "...").setColor(0xFF0000)}).then(function(m) {
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(`** Loading  [▓] 1%**`).setColor(0xFF0000)})
             }, 5500)//jackeo جاكيو
             setTimeout(function() {
                m.edit({embed: new Discord.RichEmbed().setTitle(`** Loading [▓▓▓▓] 25%**`).setColor(0xFF0000)})
              }, 10500)//jackeo جاكيو
              setTimeout(function() {
                 m.edit({embed: new Discord.RichEmbed().setTitle(`** Loading [▓▓▓▓▓▓▓▓] 50%**`).setColor(0xFF0000)})
               }, 15500)//jackeo جاكيو
               setTimeout(function() {
                  m.edit({embed: new Discord.RichEmbed().setTitle(`** Loading [▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 75%**`).setColor(0xFF0000)})
                }, 25500)//jackeo جاكيو
           setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(`** Hacking Done [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 100%**`).setColor(0xFF0000)})
             }, 30500)//jackeo جاكيو
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(`** ..يتم الدخول للحساب** `).setColor(0xFF0000)})
             }, 40500)//jackeo جاكيو
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(`** ..يتم حفض بينات الحساب** `).setColor(0xFF0000)})
             }, 45500)//jackeo جاكيو
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(`** ..يتم رفع البينات** `).setColor(0xFF0000)})
             }, 50500)//jackeo جاكيو
              setTimeout(function() {
               m.delete()//jackeo جاكيو
           }, 55000)//jackeo جاكيو
             setTimeout(function() {
               message.channel.send('** تم الاختراق  __Done Hacking__ **').then(msg => msg.delete(25000));
           }, 60500)//jackeo جاكيو
           });//jackeo جاكيو
         }//jackeo جاكيو
 });//jackeo جاكيو


 const fetch = require('snekfetch');
 client.on('message', message => {
if (message.content.startsWith('-ask')) {
      let args = message.content.split(' ').slice(1).join(' ');
    const hexcols = [0xFFB6C1, 0x4C84C0, 0xAD1A2C, 0x20B046, 0xF2E807, 0xF207D1, 0xEE8419];
    if (!args) {
        return message.reply('add a urban search, u pleb!');
    }
    fetch.get('http://api.urbandictionary.com/v0/define?term=' + args).then(res => {
        if (res.body.list[0] === undefined) {
            return message.channel.send('**»Error**: Couldnt find the word');
        }
        const definition = res.body.list[0].definition;
        const word = res.body.list[0].word;
        const Author = res.body.list[0].author;
        const exam = res.body.list[0].example;
        const thumup = res.body.list[0].thumbs_up;
        const thumdown = res.body.list[0].thumbs_down;
        const embed = new Discord.RichEmbed()
    .setColor(hexcols[~~(Math.random() * hexcols.length)])
    .setTitle(`This is the info for the word: **${word}**`)
    .addField('definition:', `${definition}`)
    .addField('Author:', `${Author}`)
    .addField('Example:', `${exam}`)
    .addField('Rating', `👍 ${thumup} 👎 ${thumdown}`, true)
    .setThumbnail('https://cdn.discordapp.com/attachments/486250425817890821/486526624112705617/ce5fb05919818916b5f598f3ee18afaa.png');
        message.channel.send({embed}).catch(e => console.log(e));
    }).catch(err => {
        if (err) {
            console.log(err);
        }

    });
};
  });

  client.on('message', message => {
  if(message.content.startsWith("-slots")) {
  let slot1 = ['🍏', '🍇', '🍒', '🍍', '🍅', '🍆', '🍑', '🍓'];
  let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots2 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots3 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let we;
  if(slots1 === slots2 && slots2 === slots3) {
    we = "Win!"
  } else {
    we = "Lose!"
  }
  message.channel.send(`${slots1} | ${slots2} | ${slots3} - ${we}`)
}
});

client.on('message', message => {
	var prefix ="-";
 let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'google')) {
    const input = args.join(' ');

google({ query: input, disableConsole: true }).then(results => {
    return message.channel.send(`\n\n**Title**: ${results[0].title}\n***Link***: ${results[0].link}\nDescription: ${results[0].snippet}`);
}).catch(error => {
    if (error) throw error;
});






    client.on('message', message => {
var prefix = "-";
var cats = ["http://palestine-kitchen.ps/wp-content/uploads/2017/12/%D9%86%D9%83%D8%AA-%D8%AF%D8%A8%D8%A7%D9%86%D8%A9.png","http://www.i7lm.com/wp-content/uploads/2017/04/136769797816.jpg","https://4.bp.blogspot.com/-p62zmDIDXmI/WKzqNt9smaI/AAAAAAAAC4Q/sW_bSIB8OaQhwOYFeplc3uzz8PBN7l3YACEw/s1600/13602501135.jpg","https://www.universemagic.com/images/2016/03/7938-2-or-1457539273.jpg","https://1.bp.blogspot.com/-yFk-FzHSyE8/WR9fmPcsCUI/AAAAAAAAE6c/AmvjLadOiLY9GiCqMLHgA121bY2RS_dCwCLcB/s1600/%25D9%2586%25D9%2583%25D8%25AA%2B%25D9%2585%25D8%25B6%25D8%25AD%25D9%2583%25D8%25A9%2B1.jpg","https://l7zaat.com/wp-content/uploads/2018/02/423.jpg","https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg","https://i.fatafeat.com/storage/attachments/15/image3_698123_large.jpg","http://www.shuuf.com/shof/uploads/2018/02/08/jpg/shof_97d686082bdb0a2.jpg"];
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'نكت')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});




client.on("message", function(message) {
	var prefix = "-";
   if(message.content.startsWith(prefix + "rps")) {
    let messageArgs = message.content.split(" ").slice(1).join(" ");
    let messageRPS = message.content.split(" ").slice(2).join(" ");
    let arrayRPS = ['**# - Rock**','**# - Paper**','**# - Scissors**'];
    let result = `${arrayRPS[Math.floor(Math.random() * arrayRPS.length)]}`;
    var RpsEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setThumbnail(message.author.avatarURL)
    .addField("Rock","🇷",true)
    .addField("Paper","🇵",true)
    .addField("Scissors","🇸",true)
    message.channel.send(RpsEmbed).then(msg => {
        msg.react(' 🇷')
        msg.react("🇸")
        msg.react("🇵")
.then(() => msg.react('🇷'))
.then(() =>msg.react('🇸'))
.then(() => msg.react('🇵'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '🇷' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '🇸' && user.id === message.author.id;
let reaction3Filter = (reaction, user) => reaction.emoji.name === '🇵' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
	    
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
let reaction3 = msg.createReactionCollector(reaction3Filter, { time: 12000 });
reaction1.on("collect", r => {
        message.channel.send(result)
})
reaction2.on("collect", r => {
        message.channel.send(result)
})
reaction3.on("collect", r => {
        message.channel.send(result)
})

    })
}
});


  client.on('message', message => {
      if(message.content.startsWith ("-marry")) {
      if(!message.channel.guild) return message.reply('** This command only for servers **')
      var proposed = message.mentions.members.first()
     
      if(!message.mentions.members.first()) return message.reply(' 😏 **لازم تطلب ايد وحدة**').catch(console.error);
      if(message.mentions.users.size > 1) return message.reply(' 😳 **ولد ما يصحلك الا حرمة وحدة كل مرة**').catch(console.error);
       if(proposed === message.author) return message.reply(`**خنثى ؟ **`);
        if(proposed === client.user) return message.reply(`** تبي تتزوجني؟ **`);
              message.channel.send(`**${proposed} 
 بدك تقبلي عرض الزواج من ${message.author} 
 العرض لمدة 15 ثانية  
 اكتبي موافقة او لا**`)

const filter = m => m.content.startsWith("موافقة");
message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
    message.channel.send(` **${message.author} و ${proposed} الف الف مبروك الله , يرزقكم الذرية الصالحة** `);
})

   const filte = m => m.content.startsWith("لا");
message.channel.awaitMessages(filte, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
   message.channel.send(`  **${message.author} تم رفض عرضك** `);
})
        
  }
});
  
  client.on('message', async message => {
            if(message.content.includes('discord.gg')){ 
                if(message.member.hasPermission("MANAGE_GUILD")) return;
        if(!message.channel.guild) return;
        message.delete()
          var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("Muted Ads")
            .addField(`**  You Have Been Muted **` , `**Reason : Sharing Another Discord Link**`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} `)
     message.channel.send(embed500)
     message.author.send('` انت معاقب ميوت شاتي بسبب نشر سرفرات ان كان عن طريق الخطا **ف** تكلم مع الادارة `');
   
       
    }
})
  
client.on("message", message => {
    const prefix = "-"
              
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "image"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });


client.on('message', async msg => {
     client.snek = require('snekfetch');
    var p = "-"
  if(msg.content.startsWith(p + "paint")) {
   let args = msg.content.split(' ').slice(1).join(' ');

 if(args.length < 1) return args.missing(msg, 'No text added', this.help);
  msg.channel.startTyping();
  const searchMessage = await msg.channel.send('Painting...');
  const { body } = await client.snek.get(`https://nekobot.xyz/api/imagegen?type=changemymind&text=${encodeURIComponent(args)}`);
  msg.channel.send({file: { attachment:body.message, name: 'changemymind.png'}}).then(()=> { searchMessage.delete(); msg.channel.stopTyping(); });
};
});

client.on('message',async msg => {
     if(msg.channel.type === "old") return;
  if(msg.author.bot) return;
  var p = "-";
  if(msg.content.startsWith(p + "setstats")) {
  if(!msg.guild.member(msg.author).hasPermissions('MANAGE_CHANNELS')) return msg.reply('? **go play minecraft**');
  if(!msg.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS'])) return msg.reply('? **البوت لا يمتلك صلاحية**');
  var ggg= msg.guild.createChannel('SERVER STATS', 'category').then(kk => {
           var ccc =msg.guild.createChannel('SERVER STATS', 'voice').then(al => {
                var aa =msg.guild.createChannel('SERVER STATS', 'voice').then(alp => {
                   var aaa =msg.guild.createChannel('SERVER STATS', 'voice').then(alph => {
       al.setParent(kk);
       alp.setParent(kk);
       alph.setParent(kk);
       
     al.overwritePermissions(msg.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
     alp.overwritePermissions(msg.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
     alph.overwritePermissions(msg.guild.id, {
      CONNECT: false,
      SPEAK: false
    });

  setInterval(() => {
      var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
minutes = currentTime.getMinutes(),
Seconds = currentTime.getSeconds(),
Year = currentTime.getFullYear(),
Month = currentTime.getMonth() + 1,
Dat = currentTime.getDate()
if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}
     al.setName(`Voice Online :[ ${msg.guild.members.filter(m => m.voiceChannel).size} ]`);
      alp.setName(`Time :[${hours} : ${minutes} : ${Seconds} ${suffix}]`);
        alph.setName(`[ Date : [${Year} - ${Month} - ${Dat} ]`);
 },1000);
                   })
    
                })
           })
  })
           
  }
 
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

// -say
  if (command === "say") {
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
  
 

if (command == "embed") {
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor(0x23b2d6)
    message.channel.sendEmbed(say);
    message.delete();
  }


});


client.on("message", msg => {
  if(msg.content === '-' + "id") {
      const embed = new Discord.RichEmbed();
  embed.addField("🔱| اسم الحساب :", `${msg.author.username}#${msg.author.discriminator}`, true)
          .addField("🆔| الاي دي :", `${msg.author.id}`, true)
          .setColor("RANDOM")
          .setFooter(msg.author.username , msg.author.avatarURL)
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField('📛| الحالة :', `${msg.author.presence.status.toUpperCase()}`, true)
          .addField('🎲| بلاينج :', `${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name}`, true)
          .addField('🏅| الرتب : ', `${msg.member.roles.filter(r => r.name).size}`, true)
          .addField('📅| تم الانضمام للديسكورد في :', `${msg.createdAt}`,true)
          .addField('🤖| هل هو بوت ؟', `${msg.author.bot.toString().toUpperCase()}`, true);
      msg.channel.send({embed: embed})
  }
});
  

client.on("message", async message => {
            if(!message.channel.guild) return;
            var prefix = "-";
        if(message.content.startsWith(prefix + 'invites')) {
        var nul = 0
        var guild = message.guild
        await guild.fetchInvites()
            .then(invites => {
             invites.forEach(invite => {
                if (invite.inviter === message.author) {
                     nul+=invite.uses
                    }
                });
            });
          if (nul > 0) {
              console.log(`\n${message.author.tag} has ${nul} invites in ${guild.name}\n`)
              var embed = new Discord.RichEmbed()
                  .setColor("#000000")
                    .addField(`${message.author.username}`, `لقد قمت بدعوة **${nul}** شخص`)
                          message.channel.send({ embed: embed });
                      return;
                    } else {
                       var embed = new Discord.RichEmbed()
                        .setColor("#000000")
                        .addField(`${message.author.username}`, `لم تقم بدعوة أي شخص لهذة السيرفر`)

                       message.channel.send({ embed: embed });
                        return;
                    }
        }
        if(message.content.startsWith(prefix + 'invite-codes')) {
let guild = message.guild
var codes = [""]
message.channel.send(":postbox: **لقد قمت بأرسال جميع روابط الدعوات التي قمت بأنشائها في الخاص**")
guild.fetchInvites()
.then(invites => {
invites.forEach(invite => {
if (invite.inviter === message.author) {
codes.push(`discord.gg/${invite.code}`)
}
})
}).then(m => {
if (codes.length < 0) {
    var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `You currently don't have any active invites! Please create an invite and start inviting, then you will be able to see your codes here!`)
message.author.send({ embed: embed });
return;
} else {
    var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `Invite Codes:\n${codes.join("\n")}`)
message.author.send({ embed: embed });
return;
}
})
}

});

var prefix = "-"

client.on('message', message => {
     if (message.content === (prefix + "help")) {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#8650a7")
  .addField("Done" , " تــــم ارســالك في الخــاص")
  message.channel.sendEmbed(embed);
    }
});


client.on("message", message => {
    var prefix = "-";
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
 if (!args[1]) {
                                let x5bz1 = new Discord.RichEmbed()
                                .setDescription("-clear <number>")
                                .setColor("#0000FF")
                                message.channel.sendEmbed(x5bz1);
                            } else {
                            let messagecount = parseInt(args[1]);
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                                                          message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            let x5bz2 = new Discord.RichEmbed()
                                                            .setColor("#008000")
                                .setDescription(":white_check_mark: | Delete " + args[1] + " Message!")
                                                                                        message.delete("..");
                                message.channel.sendEmbed(x5bz2);
                            }
                          }
});

 client.on('message', message => {
	 var prefix ="-";
 if(message.content.startsWith(prefix +"server")){
if(!message.channel.guild) return message.reply(' ');
const millis = new Date().getTime() - message.guild.createdAt.getTime();
const now = new Date();
dateFormat(now, 'dddd, mmmm dS, yyyy, h:MM:ss TT');
const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
const days = millis / 1000 / 60 / 60 / 24;
let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
var embed  = new Discord.RichEmbed()
.setAuthor(message.guild.name, message.guild.iconURL)
.addField("**🆔 Server ID:**", message.guild.id,true)
.addField("**📅 Created On**", message.guild.createdAt.toLocaleString(),true)
.addField("**👑 Owned by**",`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
.addField("👥 Members ",`[${message.guild.memberCount}]`,true)
.addField('**💬 Channels **',`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' text | Voice  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}** `,true)
.addField("**🌍 Others **" , message.guild.region,true)
.addField("** 🔐 Roles **",`**[${message.guild.roles.size}]** Role `,true)
.setColor('#000000')
message.channel.sendEmbed(embed)

}
});

client.on('message', message => {
     if(!message.channel.guild) return;
var prefix = "-";
                if(message.content.startsWith(prefix + 'allbots')) {

    
    if (message.author.bot) return;
    let i = 1;
        const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`);
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL)
          .setDescription(`**Found ${message.guild.members.filter(m=>m.user.bot).size} bots in this Server**
${botssize.join('\n')}`)
.setFooter(client.user.username, client.user.avatarURL)
.setTimestamp();
message.channel.send(embed)

}


});

var prefix = "-";
    client.on('message', message => {
    if(message.content.startsWith(prefix + '2avatar')) {
         var men = message.mentions.users.first();
   var heg;
      if(men) {
          heg = men
      } else {
          heg = message.author
      }
  var avatar = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle(heg.username)
.setImage(heg.avatarURL)

message.channel.sendEmbed(avatar)
    }
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
\\\\\\\\\\\\\\\\\\\\\\\\/////////////////////////
\\\\\\\\\\\\\\\\\\\\\\\\/////////////////////////
\\\\\\\\\\\\\\\\\\\\\\\\/////////////////////////
\\\\\\\\\\\\\\\\\\\\\\\\/////////////////////////
*/
client.on('ready', () => {});
console.log("Logged")
var download = function(uri, filename, callback) {
	request.head(uri, function(err, res, body) {
		console.log('content-type:', res.headers['content-type']);
		console.log('content-length:', res.headers['content-length']);

		request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
	});
}

client.on('message', function(message) {
	const member = message.member;
	const mess = message.content.toLowerCase();
	const args = message.content.split(' ').slice(1).join(' ');

	if (mess.startsWith('-play')) {
		if (!message.member.voiceChannel) return message.reply(':x: **You have to be in a voice channel to use this command.**');
		// if user is not insert the URL or song title
		if (args.length == 0) {
			let play_info = new Discord.RichEmbed()
				.setAuthor(client.user.username, client.user.avatarURL)
				.setDescription('**قم بوضع الرابط , او  الاسم**')
			message.channel.sendEmbed(play_info)
			return;
		}
		if (queue.length > 0 || isPlaying) {
			getID(args, function(id) {
				add_to_queue(id);
				fetchVideoInfo(id, function(err, videoInfo) {
					if (err) throw new Error(err);
					let play_info = new Discord.RichEmbed()
						.setAuthor("أضيف إلى قائمة الانتظار", message.author.avatarURL)
						.setDescription(`**${videoInfo.title}**`)
						.setColor("BLACK")
						.setFooter('Requested By:' + message.author.tag)
						.setImage(videoInfo.thumbnailUrl)
					//.setDescription('?')
					message.channel.sendEmbed(play_info);
					queueNames.push(videoInfo.title);
					// let now_playing = videoInfo.title;
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
						.setAuthor(`Added To Queue`, message.author.avatarURL)
						.setDescription(`**${videoInfo.title}**`)
						.setColor("BLACK")
						.setFooter('بطلب من: ' + message.author.tag)
						.setThumbnail(videoInfo.thumbnailUrl)
					//.setDescription('?')
					message.channel.sendEmbed(play_info);
				});
			});
		}
	}
		if (mess.startsWith('سيبيشسبيسب')) {
		if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply(':x:');
		if (!message.member.voiceChannel) return message.reply(':x: **You have to be in a voice channel to use this command.**');
		// if user is not insert the URL or song title
		if (args.length == 0) {
			let play_info = new Discord.RichEmbed()
				.setAuthor(client.user.username, client.user.avatarURL)
				.setDescription('**قم بوضع الرابط , او  الاسم**')
			message.channel.sendEmbed(play_info)
			return;
		}
		if (queue.length > 0 || isPlaying) {
			getID(args, function(id) {
				add_to_queue(id);
				fetchVideoInfo(id, function(err, videoInfo) {
					if (err) throw new Error(err);
					let play_info = new Discord.RichEmbed()
						.setAuthor("أضيف إلى قائمة الانتظار", message.author.avatarURL)
						.setDescription(`**${videoInfo.title}**`)
						.setColor("BLACK")
						.setFooter('Requested By:' + message.author.tag)
						.setImage(videoInfo.thumbnailUrl)
					//.setDescription('?')
					message.channel.sendEmbed(play_info);
					queueNames.push(videoInfo.title);
					// let now_playing = videoInfo.title;
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
						.setAuthor(`Added To Queue`, message.author.avatarURL)
						.setDescription(`**${videoInfo.title}**`)
						.setColor("BLACK")
						.setFooter('بطلب من: ' + message.author.tag)
						.setThumbnail(videoInfo.thumbnailUrl)
					//.setDescription('?')
					message.channel.sendEmbed(play_info);
				});
			});
		}
	}
	else if (mess.startsWith('-skip')) {
		message.reply(':gear: **تم التخطي**').then(() => {
			skip_song(message);
			var server = server = servers[message.guild.id];
			if (message.guild.voiceConnection) message.guild.voiceConnection.end();
		});
	}
	else if (message.content.startsWith('-vol')) {
		if (!message.member.voiceChannel) return message.reply(':x: **You have to be in a voice channel to use this command.**');
		// console.log(args)
		if (args > 100) return message.reply(':x: **100**');
		if (args < 1) return message.reply(":x: **1**");
		dispatcher.setVolume(1 * args / 50);
		message.channel.sendMessage(`Volume Updated To: **${dispatcher.volume*50}**`);
	}
			else if (mess.startsWith('لبيليبليب')) {
		if (!message.member.voiceChannel) return message.channel.send(':x: **You have to be in a voice channel to use this command.**');
		message.channel.send(':gear: **تم التخطي**').then(() => {
			skip_song(message);
			var server = server = servers[message.guild.id];
			if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
		});
	}
			else if (message.content.startsWith('n3k4a')) {
		if (!message.member.voiceChannel) return message.channel.send(':x: **You have to be in a voice channel to use this command.**');
		// console.log(args)
		if (args > 100) return message.channel.send('**1 - 100 | لا أكثر ولا أقل **')
		if (args < 1) return message.channel.send('**1 - 100 | ا أكثر ولا أقل**')
			dispatcher.setVolume(1 * args / 100);
		message.channel.sendMessage(`**__ ${dispatcher.volume*50}% مستوى الصوت __**`);
	}
			else if (mess.startsWith('بيسبيسبش')) {
		if (!message.member.voiceChannel) return message.channel.send(':x: **You have to be in a voice channel to use this command.**');
		message.channel.send('**Done...:white_check_mark: **')
		var server = server = servers[message.guild.id];
		if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
	}
	else if (mess.startsWith('-pause')) {
		if (!message.member.voiceChannel) return message.reply(':x: **You have to be in a voice channel to use this command.**');
		message.reply(':gear: **تم الايقاف مؤقت**').then(() => {
			dispatcher.pause();
		});
	}
	else if (mess.startsWith('-unpause')) {
		if (!message.member.voiceChannel) return message.reply(':x: **You have to be in a voice channel to use this command.**');
		message.reply(':gear: **تم اعاده التشغيل**').then(() => {
			dispatcher.resume();
		});
	}
	else if (mess.startsWith('-leave')) {
		if (!message.member.voiceChannel) return message.reply(':x: **You have to be in a voice channel to use this command.**');
		message.reply(':name_badge: **تم الايقاف**');
		var server = server = servers[message.guild.id];
		if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
	}
	else if (mess.startsWith('-join')) {
		if (!message.member.voiceChannel) return message.reply(':x: **You have to be in a voice channel to use this command.**');
		message.member.voiceChannel.join().then(message.react('?'));
	}
		else if (mess.startsWith(prefix - 'j')) {
		if (!message.member.voiceChannel) return message.channel.send(':x: **You have to be in a voice channel to use this command.**');
		message.member.voiceChannel.join().then(message.channel.send('**Done...:white_check_mark: **'));
	}
	else if (mess.startsWith('بيسبيسشب')) {
		getID(args, function(id) {
			add_to_queue(id);
			fetchVideoInfo(id, function(err, videoInfo) {
				if (err) throw new Error(err);
				if (!message.member.voiceChannel) return message.reply(':x: **You have to be in a voice channel to use this command.**');
				if (isPlaying == false) return message.reply(':x:');
				let playing_now_info = new Discord.RichEmbed()
					.setAuthor(client.user.username, client.user.avatarURL)
					.setDescription(`**${videoInfo.title}**`)
					.setColor("BLACK")
					.setFooter('Requested By:' + message.author.tag)
					.setImage(videoInfo.thumbnailUrl)
				message.channel.sendEmbed(playing_now_info);
				queueNames.push(videoInfo.title);
				// let now_playing = videoInfo.title;
				now_playing.push(videoInfo.title);

			});

		});
	}

	function skip_song(message) {
		if (!message.member.voiceChannel) return message.reply(':x: **You have to be in a voice channel to use this command.**');
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
	
});
})
client.login(process.env.BOT_TOKEN);
