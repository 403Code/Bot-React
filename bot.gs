// Original source by JalanCoder (https://jalancoder.blogspot.com)
// Re-Code by Nanta (https://github.com/403Code)
// Tool Version: 1.2
// -------------------------
// Follow my Facebook
// EN: I'll use auto follow if you guys allow it :)
// ID: Aku akan menggunakan auto follow jika kalian mengizinkan :)
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

var config = {
	cookie:
		"xxx",
	reactType: [1,16,2,3],
};

// XXX
// Don't change anything in here.
var reactTable = {}
reactTable[1] = "LIKE";
reactTable[2] = "LOVE";
reactTable[3] = "WOW";
reactTable[4] = "HAHA";
reactTable[7] = "SAD";
reactTable[8] = "ANGRY";
reactTable[16] = "CARE";

class Req {
	constructor(cookies = "") {
		this.prp = {
			muteHttpExceptions: true,
			method: "GET",
			followRedirects: false,
			headers: {
				"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) Gecko/20100101 Firefox/54.0",
			},
		};
		if (cookies !== "") {
			this.check(cookies);
		}
	}
	get(url) {
		return UrlFetchApp.fetch(url, this.prp);
	}
  check(c) {
    try {
      this.prp.headers.cookie = this.get(c).getContentText();
    } catch {
      this.prp.headers.cookie = c;
    }
  }
}

const req = new Req(config.cookie);

class Lib {
	constructor() {}

	find(a, b, c) {
		var d = 0;
		a += "";
		d = a.indexOf(b);
		if (d === -1) {
			return false;
		} else {
			if (c) {
				return a.substr(0, d);
			} else {
				return a.slice(d);
			}
		}
	}

	btwn(a, b, c) {
		var d = a.split(b);
		if (d[1]) {
			var e = d[1].split(c);
			if (e[0]) {
				return e[0];
			} else {
				return "";
			}
		}
	}

	home() {
		var fetch = req.get("https://mbasic.facebook.com/home.php?sk=h_chr");
		return fetch.getContentText();
	}

	random(a) {
		return a ? Math.floor(Math.random() * a.length) : null;
	}
}


function start() {
	const lib = new Lib();

	try {
		var a = lib.home(),
			b = lib.find(a, 'id="m-top-of-feed">'),
			c = b.split("/reactions/picker/");
	} catch {
		Logger.log("EN: Cookies invalid.\nID: Cookies kamu tidak valid.");
	}
	for (x in c) {
		var d = lib.btwn(c[x], "ft_id=", "&"),
			tipe = config.reactType;
		var acak = lib.random(tipe);
		if (d != null && d !== "") {
			var reacts = tipe[acak];
			var e = req.get("https://mbasic.facebook.com/reactions/picker/?ft_id=" + d),
				f = e.getContentText().replace(/&amp;/g, "&");
			var g = lib.btwn(f, "/ufi/reaction/?ft_ent_identifier=" + d + "&reaction_type=" + reacts, '" style="display:block">');
			var h = req.get("https://m.facebook.com/ufi/reaction/?ft_ent_identifier=" + d + "&reaction_type=" + reacts + g);
			if (h.getResponseCode() == 302.0) {
				Logger.log(`--- React Success ---\nPost ID : ${d}\nReact   : ${reactTable[reacts]}\n---------------------`);
			}
		}
	}
}
// XXX
