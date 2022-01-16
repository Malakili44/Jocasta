const Discord = require("discord.js");
    const moment = require("moment");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]

});
const config = require('./config.json');
Client.on("ready", () => {
    Client.user.setActivity(config.activity)
})

const prefix = config.prefix;

Client.on("ready", () => {  

    console.log("bot opérationel")
});

Client.login(config.token);

/*//ADMIN
    //clear
    Client.on("message", message => {
        if (message.author.bot) return;
    
        let content = message.content.split(" ");
        let command = content[0];
        let args = content.slice(1);
        let prefix = config.prefix;
    
        if (message.content.startsWith(config.prefix)) {
            try {
                let commandFile = require(`./commands/${command.slice(prefix.length)}.js`)
                commandFile.execute(Client, message, args);
            } catch (e) {
                console.warn(`Erreur avec le handler : ${e}`);
                return;
            }
        }
    })*/

Client.on("messageCreate", message => {
    if (message.author.bot) return;

//help
if(message.content === prefix + "help"){
    const help = new Discord.MessageEmbed()
    .setColor("#d90000")
    .setTitle("🤔 HELP")
    .setAuthor("Jocasta Nu", 
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwPOv3mF2SwoXLFh5UinX1yzp1HlmkqPofqg&usqp=CAU",
        "https://discord.js.org")
    .setDescription("\u200b")
    .setThumbnail(`https://i.pinimg.com/originals/0a/ae/85/0aae85f8674735a413d587259dd332d7.jpg`)
    .addField("🔑 Préfixe", `%`)   
    .addField("🖱️ Menu help des commandes", "Le menu d'aide pour les commandes de base : *%helpcommand*")
    .addField("⌨️ Menu help des commandes sans préfixe", "Le menu d'aide pour les commandes sans préfixe : *%helpprefix*")
    .setTimestamp()
    .setFooter("Bot créé par Malakili", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpTHkHMajWv-TJTjAjjiY8MUWgQNgfv3J_Eg&usqp=CAU");
    message.channel.send({ embeds: [help]}); 
}
//%helpcommand
if(message.content === prefix + "helpcommand"){
    const helpcommand = new Discord.MessageEmbed()
        .setColor("#d90000")
        .setTitle("🤔 HELP COMMAND")
        .setAuthor("Jocasta Nu", 
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwPOv3mF2SwoXLFh5UinX1yzp1HlmkqPofqg&usqp=CAU",
            "https://discord.js.org")
        .setDescription("\u200b")
        .setThumbnail(`https://i.pinimg.com/originals/0a/ae/85/0aae85f8674735a413d587259dd332d7.jpg`)
        .addField("ℹ️ General", "*-Toutes les commandes générale*")   
        .addFields(
            { name: "%help", value: "Liste des commandes", inline: true },
            { name: "\u200b", value: "\u200b", inline: true },
            { name: "%perso", value: "Liste des perso disponible", inline: true },
            { name: "%invite", value: "Crée une invitation pour ce serveur", inline: true },
            { name: "\u200b", value: "\u200b", inline: true },
            { name: "%invitehub", value: "Crée une invitation pour le serveur The Hub", inline: true },
            { name: "%avatar", value: "Affiche ton avatar", inline: true },
            { name: "\u200b", value: "\u200b", inline: true },
            { name: "%membre", value: "Nombre de membre", inline: true },
            { name: "%infoserv", value: "Information sur le serveur", inline: true },
        )
        .setTimestamp()
        .setFooter("Bot créé par Malakili", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpTHkHMajWv-TJTjAjjiY8MUWgQNgfv3J_Eg&usqp=CAU");

    message.channel.send({ embeds: [helpcommand]});
}

//helpprefix
if(message.content === prefix + "helpprefix"){
    const helpprefix = new Discord.MessageEmbed()
    .setColor("#d90000")
    .setTitle("🤔 HELP PREFIX")
    .setAuthor("Jocasta Nu", 
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwPOv3mF2SwoXLFh5UinX1yzp1HlmkqPofqg&usqp=CAU",
        "https://discord.js.org")
    .setDescription("\u200b")
    .setThumbnail(`https://i.pinimg.com/originals/0a/ae/85/0aae85f8674735a413d587259dd332d7.jpg`)
    .addField("⌨️ Commande sans préfixe", "*-L'ensemble des commandes sans prefix*")
    .addFields(
        { name: "prefix", value: "Le préfixe du bot", inline: true },
        { name: "\u200b", value: "\u200b", inline: true },
        { name: "bonnenuit", value: "Envoie un message de bonne nuit", inline: true },
        { name: "bvn", value: "Envoie un message de bienvenue", inline: true },
    )
        .setTimestamp()
        .setFooter("Bot créé par Malakili", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpTHkHMajWv-TJTjAjjiY8MUWgQNgfv3J_Eg&usqp=CAU");
    
    message.channel.send({ embeds: [helpprefix]});
}

//%perso
if(message.content === prefix + "perso"){
    const perso = new Discord.MessageEmbed()
        .setColor("#a004b5")
        .setTitle("Personnages disponibles")
        .setAuthor("Jocasta Nu", 
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwPOv3mF2SwoXLFh5UinX1yzp1HlmkqPofqg&usqp=CAU",
            "https://discord.js.org")
        .setThumbnail(
            `http://pm1.narvii.com/7012/66269bf1b4213c12a82cee93672f847aa2266742r1-2048-1152v2_00.jpg`)
        .setDescription("-_Voici tous les personnages diponibles avec la commandes %_")
        .addFields(
            { name: 'Yoda', value: '%Yoda', inline: true },
            { name: 'Anakin Skywalker', value: '%Anakin', inline: true },
        )
        .setTimestamp()
        .setFooter("Bot créé par Malakili", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpTHkHMajWv-TJTjAjjiY8MUWgQNgfv3J_Eg&usqp=CAU");
    
    message.channel.send({ embeds: [perso]});
    }

//%invitehub
if(message.content === prefix + "invitehub"){
    message.reply("**Fan de star wars** =============================================================\nBonjour ! 👋\n Voici un serveur communautaire qui n attend que toi ! 👈\n Rencontre des personnes sympas dans un environnement sain pour faire tout et rien ! 😎\n Tu voudrais faire quoi ? Discussion, partage dart, jeux vidéos, RP et bien plus encore ! 🥳============================================================= Rejoins la grande aventure de The Hub ! 👍\n https://discord.gg/WXskw3A ============================================================= PS: Lis bien le message de bienvenue ! Il explique tout ce que tu dois savoir sur le serveur ! \n🤵 Candidatures staff ouvertes !");
    }

//%invite
if(message.content === prefix + "invite"){
    message.reply("**Fan de star wars** =============================================================\nBonjour ! 👋\nTu cherches un serveur star wars fancophone, ne cherche plus tu as trouvé.\nCe serveur qui rallie jeu vidéo, débat sur l'univers sw et bot interactifs à tous pour te plaire.\n Rejoins donc nous sur Fan de star wars:\n https://discord.gg/ETSPT4r2  =============================================================A la prochaine, et au plasir de se voir connecter")
    }

//info serveur
if(message.content === prefix + "infoserv"){
        const infoserv = new Discord.MessageEmbed()
                .setColor("#C016FF")
                .setThumbnail(message.guild.iconURL())
                .addField(`Plus d'information à propos du **${message.guild.name}**`,
                `
                · Crée le : ${moment(message.guild.createdAT).format('DD/MM/YYYY')}
                · Il y a ${message.guild.memberCount} membres
                · Roles : ${message.guild.roles.cache.size}
                · Votre serveur possède ${message.guild.channels.cache.filter(
                    m => m.type === 'GUILD_TEXT').size} salons textuels et ${message.guild.channels.cache.filter(
                    m => m.type === 'GUILD_VOICE').size} salons vocaux
                `)
        
            message.channel.send({ embeds: [infoserv]});
    }
    
//avatar
if(message.content === prefix + "avatar"){
    const avatar = new Discord.MessageEmbed()
    .setTitle(`Avatar de ${message.author.username}`)
    .setColor(`RANDOM`)
    .setDescription('`Ton avatar :`')
    .setImage(message.author.displayAvatarURL({dynamic: true, size: 256}))

    message.channel.send({ embeds: [avatar] });
    }

        

else if(message.content === prefix + "Yoda") {
    message.reply("Yoda était un individu d'une espèce inconnue qui comptait parmi les Maîtres Jedi les plus puissants et reconnus de toute l'histoire de la Galaxie, célèbre pour sa sagesse légendaire, sa maîtrise de la Force et ses talents au sabre laser.\n Il était membre du Haut Conseil Jedi pendant les dernières décennies de la République Galactique et en était le Grand Maître avant et pendant la Guerre des Clones.\n À la suite de la bataille de Geonosis, Yoda prit le titre de Maître de l'Ordre en plus de celui de Grand Maître.");
}
else if (message.content === prefix + "Anakin") {
   message.reply("Anakin Skywalker était un Chevalier Jedi originaire de la planète désertique Tatooine qui servit la République Galactique dans ses dernières années.\n Il fut le Maître Jedi de la jeune Togruta Ahsoka Tano pendant la Guerre des Clones.\n Succombant ensuite au Côté Obscur, il devint le Seigneur Sith Dark Vador.\n Indéfectible bras-droit de Dark Sidious durant l'ère Impériale, il prit part à la Purge Jedi, à la lutte contre la rébellion et à la Guerre Civile Galactique avant de revenir du Côté Lumineux grâce à son fils, Luke Skywalker.");
}
})  


//PREFIX
Client.on("messageCreate", message => {
    //bvn
    if(message.content === "bvn"){
        const bvnembled = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`:wave: **${message.member.displayName}** vous souhaite la bienvenue sur le serveur **${message.guild.name}** !`);

        message.channel.send({ embeds: [bvnembled] });
        }
    //bn
    if(message.content === "bn"){
        const bnembled = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`**${message.member.displayName}** vous souhaite une bonne nuit 🌃🛌 !`);
    
        message.channel.send({ embeds: [bnembled] });
        }
    //pfx
    if(message.content === "pfx"){
        const pfxembled = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`Le bot **${Client.user.username}** à pour pefix : **%**`);
        
        message.channel.send({ embeds: [pfxembled] });
        }
    })