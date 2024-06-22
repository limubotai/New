module.exports.config = {
  name: "tiktok",
  version: "1.0.0",
  hasPermssion: "0",
  credits: "Kim Joseph DG Bien",
  description: "tiktok search",
  usePrefix: true,
  commandCategory: "tiktok",
  usage: "[Tiktok <search>]",
  cooldowns: 30,
};

const axios = require("axios");
const fs = require("fs");
const path = require("path");

module.exports.run = async function({ api, event, args }) {
  try {
    const searchQuery = args.join(" ");
    if (!searchQuery) {
      api.sendMessage("Usage: tiktok <search text>", event.threadID);
      return;
    }

    api.sendMessage(" 🛰️ 𝙰𝚗𝚊 𝚂𝚎𝚊𝚛𝚌𝚑 𝚢𝚘𝚞𝚛 𝚟𝚒𝚍𝚎𝚘 𝚒𝚗 𝚃𝚒𝚔𝚝𝚘𝚔, 𝚓𝚞𝚜𝚝 𝚠𝚊𝚒𝚝___🕤", event.threadID);

    const response = await axios.get(`https://jonellccapisprojectv2-a62001f39859.herokuapp.com/api/tiktok/searchvideo?keywords=${encodeURIComponent(searchQuery)}`);
    const videos = response.data.data.videos;

    if (!videos || videos.length === 0) {
      api.sendMessage("No videos found for the given search query.", event.threadID);
      return;
    }

    const videoData = videos[0];
    const videoUrl = videoData.play;

    const message = `𝐓𝐢𝐤𝐭𝐨𝐤 𝐫𝐞𝐬𝐮𝐥𝐭:\n\n𝐏𝐨𝐬𝐭 𝐛𝐲: ${videoData.author.nickname}\n𝐔𝐬𝐞𝐫𝐧𝐚𝐦𝐞: ${videoData.author.unique_id}\n\n𝐓𝐢𝐭𝐥𝐞: ${videoData.title}`;

    const filePath = path.join(__dirname, `/tiktok/tiktok_video.mp4`);
    const writer = fs.createWriteStream(filePath);

    const videoResponse = await axios({
      method: 'get',
      url: videoUrl,
      responseType: 'stream'
    });

    videoResponse.data.pipe(writer);

    writer.on('finish', () => {
      api.sendMessage(
        { body: message, attachment: fs.createReadStream(filePath) },
        event.threadID,
        () => fs.unlinkSync(filePath)
      );
    });
  } catch (error) {
    console.error('Error:', error);
    api.sendMessage("An error occurred while processing the request.", event.threadID);
  }
};