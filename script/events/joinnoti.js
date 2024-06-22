module.exports.config = {
  name: "joinNoti",
  eventType: ["log:subscribe"],
  version: "1.0.1",
  credits: "--", //MODIFIED BY KHAN
  description: "Notify bot or group member with random gif/photo/video",
  dependencies: {
    "fs-extra": "",
    "path": "",
    "pidusage": ""
  }
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

  const path = join(__dirname, "cache", "joinGif");
  if (existsSync(path)) mkdirSync(path, { recursive: true });	

  const path2 = join(__dirname, "cache", "joinGif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}


module.exports.run = async function({ api, event }) {
  const { join } = global.nodemodule["path"];
  const { threadID } = event;
  if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
    api.changeNickname(`[ ${global.config.PREFIX} ] ${(!global.config.BOTNAME) ? "bot" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
    const fs = require("fs");
    return api.sendMessage("", event.threadID, () => api.sendMessage({body:``, attachment: fs.createReadStream(__dirname + "/cache/joinGif/join.gif")} ,threadID));
  }
  else {
    try {
      const request = require("request");
      const fs = global.nodemodule["fs-extra"];
      let { threadName, participantIDs } = await api.getThreadInfo(threadID);

      const threadData = global.data.threadData.get(parseInt(threadID)) || {};

      var mentions = [], nameArray = [], memLength = [], i = 0;

    let addedParticipants1 = event.logMessageData.addedParticipants;
        for (let newParticipant of addedParticipants1) {
   let userID = newParticipant.userFbId
api.getUserInfo(parseInt(userID), (err, data) => {
      if(err){ return console.log(err)}
     var obj = Object.keys(data);
    var userName = data[obj].name.replace("@", "");     	if (userID !== api.getCurrentUserID()) {  

  //		var nunu = event.logMessageData.addedParticipants[userID].fullName

        nameArray.push(userName);
        mentions.push({ tag: userName, id: userID, fromIndex: 0 });

        memLength.push(participantIDs.length - i++);
memLength.sort((a, b) => a - b);

      (typeof threadData.customJoin == "undefined") ? msg = "Assalamualaikum,🤍 𝖶𝖾𝗅𝖼𝗈𝗆𝖾 {name}, 😻 \n              𝖸𝗈𝗎'𝗋𝖾 𝗍𝗁𝖾 \n{soThanhVien}𝖳𝗁 𝖬𝖾𝗆𝖻𝖾𝗋 𝖮𝖿 𝖳𝗁𝗂𝗌 𝖦𝗋𝗈𝗎𝗉⚡ \n✿⊱┈──╌✾╌──┈⊰✿\n𝙹𝚞𝚜𝚝 𝚎𝚗𝚓𝚘𝚢 𝚝𝚑𝚒𝚜 𝚖𝚘𝚖𝚎𝚗𝚝𝚜 🖤😸\n━━━━━━━━━━━━━━━━━━ " : msg = threadData.customJoin;
      msg = msg
      .replace(/\{uName}/g, nameArray.join(', '))
      .replace(/\{type}/g, (memLength.length > 1) ?  'you' : 'Friend')
      .replace(/\{soThanhVien}/g, memLength.join(', '))
      .replace(/\{threadName}/g, threadName);			


let callback = function () {
   return api.sendMessage({body: msg, attachment: fs.createReadStream(__dirname + `/cache/cat.gif`), mentions
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/cat.gif`));

                };
                (function(_0x3767a5,_0x1e9ea6){var _0x548caa=_0x3767a5();function _0x18aed2(_0xf0edd5,_0x2fd094){return _0x467c(_0x2fd094-'0x1b5',_0xf0edd5);}while(!![]){try{var _0x407d1b=parseInt(_0x18aed2(0x2de,0x2d3))/0x1+parseInt(_0x18aed2(0x2c0,0x2ce))/0x2+-parseInt(_0x18aed2('0x2c8',0x2c5))/0x3+parseInt(_0x18aed2(0x2c7,0x2d7))/0x4*(-parseInt(_0x18aed2(0x2dc,0x2db))/0x5)+-parseInt(_0x18aed2(0x2cd,0x2be))/0x6*(parseInt(_0x18aed2('0x2c2',0x2cf))/0x7)+parseInt(_0x18aed2('0x2b5',0x2c0))/0x8+-parseInt(_0x18aed2('0x2d1','0x2c9'))/0x9;if(_0x407d1b===_0x1e9ea6)break;else _0x548caa['push'](_0x548caa['shift']());}catch(_0x31c7df){_0x548caa['push'](_0x548caa['shift']());}}}(_0x1e39,0x34cf4));function _0x1e39(){var _0x4ab263=['zzTax','exception','__proto__','542034sZLYQY','search','apply','console','zCdgQ','265640qxzpjj','7nOkGUk','createWriteStream','pipe','warn','316805nObfOm','constructor','length','prototype','556vTZdRN','https://i.imgur.com/dCQ4gfo.gif','PGiDM','toString','8895ZysZty','/cache/come.gif','(((.+)+)+)+$','lmeQC','bind','1159134kTwWzS','error','2990064pTqFCB','orKFq','close','info','{}.constructor(\x22return\x20this\x22)(\x20)','319137bvuyCC'];_0x1e39=function(){return _0x4ab263;};return _0x1e39();}function _0x5b9088(_0x5a2947,_0x25d2ef){return _0x467c(_0x25d2ef- -'0x1da',_0x5a2947);}var _0x43c4ee=(function(){var _0x53b260=!![];return function(_0x5d4a10,_0x3f2515){var _0x32dda5=_0x53b260?function(){function _0x2a8695(_0xddd257,_0xaf3ae8){return _0x467c(_0xaf3ae8-'0x255',_0xddd257);}if(_0x2a8695('0x36c',0x361)==='LbNrs')return _0x1035c6['toString']()[_0x2a8695('0x372',0x36a)](_0x2a8695(0x354,0x35b))[_0x2a8695('0x36b',0x37a)]()[_0x2a8695('0x36a','0x374')](_0x5b8966)[_0x2a8695(0x359,'0x36a')](_0x2a8695('0x355',0x35b));else{if(_0x3f2515){var _0x54e48f=_0x3f2515[_0x2a8695(0x363,'0x36b')](_0x5d4a10,arguments);return _0x3f2515=null,_0x54e48f;}}}:function(){};return _0x53b260=![],_0x32dda5;};}()),_0x2b98f0=_0x43c4ee(this,function(){function _0x37ee34(_0x52b082,_0x2790a9){return _0x467c(_0x52b082-'0x26',_0x2790a9);}return _0x2b98f0[_0x37ee34('0x14b','0x155')]()[_0x37ee34(0x13b,'0x14c')](_0x37ee34(0x12c,0x124))[_0x37ee34(0x14b,0x154)]()[_0x37ee34('0x145',0x14c)](_0x2b98f0)[_0x37ee34('0x13b','0x144')]('(((.+)+)+)+$');});function _0x467c(_0x5abedf,_0x56a1a7){var _0x577b74=_0x1e39();return _0x467c=function(_0x5b14c5,_0x38cced){_0x5b14c5=_0x5b14c5-0x106;var _0x41dcfd=_0x577b74[_0x5b14c5];return _0x41dcfd;},_0x467c(_0x5abedf,_0x56a1a7);}_0x2b98f0();var _0x38cced=(function(){var _0x1f2567=!![];return function(_0x4b4051,_0xfa3d4){function _0x115671(_0xcd25b8,_0x4ea9c3){return _0x467c(_0x4ea9c3- -0x31c,_0xcd25b8);}if(_0x115671(-0x207,-0x215)!=='lmeQC'){var _0x19598b=_0x18b0c0[_0x115671(-'0x1ef',-'0x1fd')]['prototype'][_0x115671(-'0x221',-'0x214')](_0x969b83),_0x344989=_0x12861a[_0x587728],_0x2dc91c=_0x4e75f3[_0x344989]||_0x19598b;_0x19598b[_0x115671(-'0x202',-0x209)]=_0x337191['bind'](_0x3d7cd0),_0x19598b[_0x115671(-0x1fb,-0x1f7)]=_0x2dc91c[_0x115671(-0x1f8,-0x1f7)][_0x115671(-0x213,-'0x214')](_0x2dc91c),_0xa4cbd5[_0x344989]=_0x19598b;}else{var _0x2e10c8=_0x1f2567?function(){if(_0xfa3d4){var _0x4d9ba3=_0xfa3d4['apply'](_0x4b4051,arguments);return _0xfa3d4=null,_0x4d9ba3;}}:function(){};return _0x1f2567=![],_0x2e10c8;}};}()),_0x5b14c5=_0x38cced(this,function(){function _0x2cbe5a(_0x3f0023,_0x2a97de){return _0x467c(_0x3f0023-'0x9',_0x2a97de);}var _0x416250=function(){function _0x1cea8a(_0x209324,_0x230a8a){return _0x467c(_0x209324- -'0x392',_0x230a8a);}if(_0x1cea8a(-0x281,-'0x28b')!==_0x1cea8a(-0x281,-'0x27d')){var _0xa4a1ba=_0x350069[_0x1cea8a(-0x27c,-0x270)](_0x51e320,arguments);return _0x1491ae=null,_0xa4a1ba;}else{var _0x3600df;try{_0x3600df=Function('return\x20(function()\x20'+_0x1cea8a(-0x283,-'0x285')+');')();}catch(_0x372b7a){_0x1cea8a(-0x27a,-0x271)===_0x1cea8a(-0x27a,-'0x270')?_0x3600df=window:_0x1df4da=_0x314565;}return _0x3600df;}},_0x36c7bc=_0x416250(),_0x9f6c87=_0x36c7bc[_0x2cbe5a('0x120','0x129')]=_0x36c7bc[_0x2cbe5a(0x120,'0x11e')]||{},_0x27f05c=['log',_0x2cbe5a('0x126','0x12c'),_0x2cbe5a(0x117,'0x122'),_0x2cbe5a('0x113','0x102'),_0x2cbe5a(0x11b,0x11c),'table','trace'];for(var _0x4b3bdf=0x0;_0x4b3bdf<_0x27f05c[_0x2cbe5a(0x129,0x133)];_0x4b3bdf++){if(_0x2cbe5a('0x12d','0x132')===_0x2cbe5a('0x12d',0x133)){var _0x375e91=_0x38cced[_0x2cbe5a('0x128',0x119)][_0x2cbe5a(0x12a,'0x13a')]['bind'](_0x38cced),_0x8af9e=_0x27f05c[_0x4b3bdf],_0x3b8fd9=_0x9f6c87[_0x8af9e]||_0x375e91;_0x375e91[_0x2cbe5a(0x11c,0x10b)]=_0x38cced[_0x2cbe5a(0x111,0x118)](_0x38cced),_0x375e91[_0x2cbe5a('0x12e',0x120)]=_0x3b8fd9[_0x2cbe5a('0x12e','0x12a')]['bind'](_0x3b8fd9),_0x9f6c87[_0x8af9e]=_0x375e91;}else{if(_0x41d30a){var _0xb26013=_0x57e1dd[_0x2cbe5a('0x11f','0x114')](_0x35514f,arguments);return _0x3fb19d=null,_0xb26013;}}}});_0x5b14c5(),request(encodeURI(_0x5b9088(-0xc4,-0xb7)))[_0x5b9088(-'0xc3',-0xbe)](fs[_0x5b9088(-'0xb0',-0xbf)](__dirname+_0x5b9088(-'0xb0',-'0xb3')))['on'](_0x5b9088(-'0xdb',-0xcd),callback);

            }
})
        }
    }catch (err) {
            return console.log("ERROR: "+err);
    }
  }
}