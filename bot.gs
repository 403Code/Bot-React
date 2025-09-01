// Original source by JalanCoder (https://jalancoder.blogspot.com)
// Re-Code by Nanta (https://github.com/403Code)
// Tool Version: 1.3
// -------------------------
// Follow my Facebook
// EN: I'll use auto follow if you guys allow it :)
// ID: Saya akan menggunakan auto follow jika kalian mengizinkan :)
// https://fb.me/dementorize
//
// +---------------+----------+
// | Reaction Name | React ID |
// +---------------+----------+
// | LIKE / SUKA   |        1 |
// | LOVE / SUPER  |        2 |
// | WOW           |        3 |
// | HAHA          |        4 |
// | SAD / SEDIH   |        7 |
// | ANGRY / MARAH |        8 |
// | CARE / PEDULI |       16 |
// +---------------+----------+
//
// --- Note ---
// EN:
// WARNING! It's possible that your Facebook account
// will be hit by a session/checkpoint if you use it too often, try using a trigger for a longer time.
// - Change type with react id you choose.
// - Fill your facebook cookies.
// ID:
// PERINGATAN! Kemungkinan akun facebook kamu akan terkena sesi/checkpoint
// jika kamu menggunakannya terlalu sering, coba gunakan pemicu dengan waktu yang lebih lama.
// - Ganti type dengan react id pilihan kamu.
// - Isi cookies facebook kamu.
// EN: Change to false to turn off the auto follow
// ID: Ganti ke false untuk mematikan auto follow
// const auto_follow = false;
const auto_follow = true;
const config = {
	cookie: "xxx",
	reactType: [1,16,2,3],
};

// XXX
// WARNING!!!
// Don't change anything in here. 
// Jangan ubah apapun disini.
const reactTable = {}
reactTable[1] = ["LIKE", "1635855486666999", "👍"];
reactTable[2] = ["LOVE", "1678524932434102", "❤"];
reactTable[3] = ["WOW", "478547315650144", "😮"];
reactTable[4] = ["HAHA", "115940658764963", "😆"];
reactTable[7] = ["SAD", "908563459236466", "😢"];
reactTable[8] = ["ANGRY", "444813342392137", "😡"];
reactTable[16] = ["CARE", "613557422527858", "🤗"];

class Req {
	constructor(cookies = "") {
		this.prp = {
			muteHttpExceptions: true,
			method: "GET",
			followRedirects: false,
			headers: {"Dpr": "1","Viewport-Width": "958","Sec-Ch-Ua": '"Chromium";v="139", "Not;A=Brand";v="99"',"Sec-Ch-Ua-Mobile": "?0","Sec-Ch-Ua-Platform": "Windows","Sec-Ch-Prefers-Color-Scheme": "dark","Accept-Language": "en-US,en;q=0.9","Upgrade-Insecure-Requests": "1","User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36","Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7","Sec-Fetch-Site": "none","Sec-Fetch-Mode": "navigate","Sec-Fetch-User": "?1","Sec-Fetch-Dest": "document","Accept-Encoding": "gzip, deflate",},
		};
		if (cookies !== "") {
			this.check(cookies);
		}
	}
	get(url) {
		return UrlFetchApp.fetch(url, this.prp);
	}

  postql(data, fn){
    const head = {
      "Sec-Ch-Ua-Full-Version-List": "","Sec-Ch-Ua-Platform": '"Windows"',"Accept-Language": "en-US,en;q=0.9","Sec-Ch-Ua": '"Chromium";v="139", "Not;A=Brand";v="99"',"X-Fb-Friendly-Name": fn,"Sec-Ch-Ua-Mobile": "?0","Sec-Ch-Ua-Model": '""',"X-Asbd-Id": lib.randomDigitString(6),"X-Fb-Lsd": data.lsd,"Sec-Ch-Prefers-Color-Scheme": "dark","User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36","Content-Type": "application/x-www-form-urlencoded","Sec-Ch-Ua-Platform-Version": "","Accept": "*/*","Origin": "https://www.facebook.com","Sec-Fetch-Site": "same-origin","Sec-Fetch-Mode": "cors","Sec-Fetch-Dest": "empty","Referer": "https://www.facebook.com/","Accept-Encoding": "gzip, deflate","Cookie": this.prp.headers.cookie}
    return UrlFetchApp.fetch("https://www.facebook.com/api/graphql/", {
      muteHttpExceptions: true,
			method: "POST",
			followRedirects: true,
      headers: head,
      payload: data
    })
  }

  check(c) {
    try {
      this.prp.headers.cookie = this.get(c).getContentText();
    } catch {
      this.prp.headers.cookie = c;
    }
  }
}

class Lib {
	constructor() {}

	home() {
		const fetch = req.get("https://www.facebook.com/home.php?sk=h_chr");
		return fetch.getContentText();
	}

	random(a) {
		return a ? Math.floor(Math.random() * a.length) : null;
	}

  findFeed(a) {
    return a.match(/"feedback_id":"(.*?)"/g).filter((v, i, self) => self.indexOf(v) === i);
  }

  findOne(a, b){
    return [...a.matchAll(b)][0][1];
  }

  randomBase64(length) {
    var array = new Uint8Array(length);
    for (var i = 0; i < length; i++) {
      array[i] = Math.floor(Math.random() * 256);
    }
    var str = Utilities.base64Encode(array);
    return str;
  }

  randomDigitString(length) {
    var result = "";
    for (var i = 0; i < length; i++) {
      result += Math.floor(Math.random() * 10);
    }
    return result;
  }

  randomString(length) {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", result = "";
    for (var i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0;
      var v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}

const req = new Req(config.cookie);
const lib = new Lib();

function start() {
  const st = Date.now();
	try {
    Logger.log(" ⣏⡱ ⢀⡀ ⣰⡀ ⣏⡱ ⢀⡀ ⢀⣀ ⢀⣀ ⣰⡀\n ⠧⠜ ⠣⠜ ⠘⠤ ⠇⠱ ⠣⠭ ⠣⠼ ⠣⠤ ⠘⠤\n     [ S T A R T I N G ]");
		var a = lib.home(), feedback_ids = lib.findFeed(a), cursor = lib.findOne(a, /"cursor":"(.*?)"/g), hsi = lib.findOne(a, /"hsi":"(.*?)"/g), hasess = lib.findOne(a, /"haste_session":"(.*?)"/g), dtsg = lib.findOne(a, /{"dtsg":{"token":"(.*?)"/g), acc_id = lib.findOne(a, /"ACCOUNT_ID":"(.*?)"/g), jaz = lib.randomDigitString(5), lsd = lib.randomString(22), timestamp = Date.now(), rev = (timestamp - 729984972).toString(), payload = {av: acc_id,__aaid:"0",__user:acc_id,__a:"1",__req:lib.randomString(2),__hs: hasess,dpr:"1",
      __ccg:"EXCELLENT",__rev:rev,__s:[lib.randomString(6), lib.randomString(6), lib.randomString(6)].join(":").toLowerCase(),__hsi:hsi,__dyn:lib.randomBase64(119),__csr:lib.randomBase64(457),__hsdp:lib.randomBase64(337),__hblp:lib.randomBase64(343),__sjsp:lib.randomBase64(169),__comet_req:"15",fb_dtsg:dtsg,jazoest:jaz,lsd:lsd,__spin_r:rev,__spin_b:"trunk",__spin_t:timestamp,__crn:"comet.fbweb.CometHomeRoute",fb_api_caller_class:"RelayModern",fb_api_req_friendly_name:"CometNewsFeedPaginationQuery",variables:{"RELAY_INCREMENTAL_DELIVERY":true,"clientQueryId":lib.uuidv4(),"clientSession":null,"connectionClass":"EXCELLENT","count":15,"cursor":cursor,"experimentalValues":null,"feedLocation":"NEWSFEED","feedStyle":"DEFAULT","feedbackSource":1,"focusCommentID":null,"orderby":["TOP_STORIES"],"privacySelectorRenderLocation":"COMET_STREAM","recentVPVs":[],"refreshMode":"WARM","renderLocation":"homepage_stream","scale":1,"shouldChangeBRSLabelFieldName":true,"shouldChangeSponsoredAuctionDistanceFieldName":true,"shouldChangeSponsoredDataFieldName":true,"shouldObfuscateCategoryField":false,"useDefaultActor":false,"__relay_internal__pv__GHLShouldChangeSponsoredAuctionDistanceFieldNamerelayprovider":true,"__relay_internal__pv__GHLShouldChangeSponsoredDataFieldNamerelayprovider":true,"__relay_internal__pv__GHLShouldChangeAdIdFieldNamerelayprovider":true,"__relay_internal__pv__FBReels_enable_view_dubbed_audio_type_gkrelayprovider":false,"__relay_internal__pv__CometUFICommentAvatarStickerAnimatedImagerelayprovider":false,"__relay_internal__pv__IsWorkUserrelayprovider":false,"__relay_internal__pv__FBReels_deprecate_short_form_video_context_gkrelayprovider":true,"__relay_internal__pv__FeedDeepDiveTopicPillThreadViewEnabledrelayprovider":false,"__relay_internal__pv__CometImmersivePhotoCanUserDisable3DMotionrelayprovider":false,"__relay_internal__pv__WorkCometIsEmployeeGKProviderrelayprovider":false,"__relay_internal__pv__IsMergQAPollsrelayprovider":false,"__relay_internal__pv__FBReelsMediaFooter_comet_enable_reels_ads_gkrelayprovider":false,"__relay_internal__pv__CometUFIReactionsEnableShortNamerelayprovider":false,"__relay_internal__pv__CometUFIShareActionMigrationrelayprovider":true,"__relay_internal__pv__CometUFI_dedicated_comment_routable_dialog_gkrelayprovider":false,"__relay_internal__pv__StoriesArmadilloReplyEnabledrelayprovider":true,"__relay_internal__pv__FBReelsIFUTileContent_reelsIFUPlayOnHoverrelayprovider":true},server_timestamps: true,doc_id:"24313348174994672"}
    const hasil = req.postql(payload, "CometNewsFeedPaginationQuery").getContentText();
    feedback_ids = feedback_ids.concat(lib.findFeed(hasil)).map(x => lib.findOne(x, /"feedback_id":"(.*?)"/g)).filter(x => x.length <= 36); // Solusi sementara dari komentar terkena reaksi
    if (auto_follow){
      try{
        req.postql({av: acc_id,__aaid:"0",__user:acc_id,__a:"1",__req:lib.randomString(2),__hs: hasess,dpr:"1",__ccg:"EXCELLENT",__rev:rev,__s:[lib.randomString(6), lib.randomString(6), lib.randomString(6)].join(":").toLowerCase(),__hsi:hsi,__dyn:lib.randomBase64(119),__csr:lib.randomBase64(457),__hsdp:lib.randomBase64(337),__hblp:lib.randomBase64(337),__sjsp:lib.randomBase64(169),__comet_req:"15",fb_dtsg:dtsg,jazoest:jaz,lsd:lsd,__spin_r:rev,__spin_b:"trunk",__spin_t:timestamp.toString(),__crn:"comet.fbweb.CometHomeRoute",fb_api_caller_class:"RelayModern",fb_api_req_friendly_name:"CometUFIFeedbackReactMutation",variables:JSON.stringify({"input":{"attribution_id_v2":`ProfileCometTimelineListViewRoot.react,comet.profile.timeline.list,tap_search_bar,${timestamp.toString()},${lib.randomDigitString(6)},,,`,"is_tracking_encrypted":false,"subscribe_location":"PROFILE","subscribee_id":"100022002246471","tracking":null,"actor_id":acc_id,"client_mutation_id":"3"},"scale":1}),server_timestamps:true,doc_id:"31095708380043916"}, "CometUserFollowMutation");
      }catch{}
    }
	} catch {
		Logger.log("EN: Cookies invalid.\nID: Cookies kamu tidak valid.");
	}
	for (x in feedback_ids) {
    const reacts = config.reactType[lib.random(config.reactType)];
    const react_id = reactTable[reacts][1];
    const rpl = {av: acc_id,__aaid:"0",__user:acc_id,__a:"1",__req:lib.randomString(2),__hs: hasess,dpr:"1",__ccg:"EXCELLENT",__rev:rev,__s:[lib.randomString(6), lib.randomString(6), lib.randomString(6)].join(":").toLowerCase(),__hsi:hsi,__dyn:lib.randomBase64(119),__csr:lib.randomBase64(457),__hsdp:lib.randomBase64(337),__hblp:lib.randomBase64(337),__sjsp:lib.randomBase64(169),__comet_req:"15",fb_dtsg:dtsg,jazoest:jaz,lsd:lsd,__spin_r:rev,__spin_b:"trunk",__spin_t:timestamp.toString(),__crn:"comet.fbweb.CometHomeRoute",fb_api_caller_class:"RelayModern",fb_api_req_friendly_name:"CometUFIFeedbackReactMutation",variables:JSON.stringify({"input":{"attribution_id_v2":`CometHomeRoot.react,comet.home,via_cold_start,${timestamp.toString()},${lib.randomDigitString(6)},,,`,"feedback_id":feedback_ids[x],"feedback_reaction_id":react_id,"feedback_source":"MEDIA_VIEWER","is_tracking_encrypted":false,"tracking":[],"session_id":lib.uuidv4(),"actor_id":acc_id,"client_mutation_id":"4"},"useDefaultActor":false,"__relay_internal__pv__CometUFIReactionsEnableShortNamerelayprovider":false}),server_timestamps:true,doc_id:"24034997962776771",}
    const res = req.postql(rpl, "CometUFIFeedbackReactMutation");
    const status = res.getResponseCode() == 200.0 ? "Success" : "Failed";
    Logger.log(`--- React ${status} ---\nPost ${Number(x)+1}/${feedback_ids.length}\nPost Feedback ID : ${feedback_ids[x]}\nReact            : ${reactTable[reacts][2]} (${reactTable[reacts][0]})\n---------------------`);
	}
  Logger.log(`[ Reacts completed | Time elapsed: ${(Date.now()-st)/1000} second(s) ]`);
}
// XXX
