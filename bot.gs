var robots = [

    {

        "kuki": "taruh cookies Facebook disini",

        "type": 7 // like = 1, love = 2, wow = 3, haha = 4, sad = 7, angry = 8, care = 16

    }

];

var aing = {

    getUserById: function(id) {
        var a = aing.sp.getProperty("uid_" + id);
        if (a) {
            a = JSON.parse(a)
        }
        return a
    },

    strstr: function(a, b, c) {
        var d = 0;
        a += "";
        d = a.indexOf(b);
        if (d === -1) {
            return false
        } else {
            if (c) {
                return a.substr(0, d)
            } else {
                return a.slice(d)
            }
        }
    },

    getbetween: function(a, b, c) {
        var d = a.split(b);
        if (d[1]) {
            var e = d[1].split(c);
            if (e[0]) {
                return e[0]
            } else {
                return ""
            }
        }
    },



    beranda: function() {

        var prp = {
            "muteHttpExceptions": true,
            "method": "GET",
            "followRedirects": false,
            "headers": {
                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) Gecko/20100101 Firefox/54.0"
            }
        };

        if (robots[0].kuki) {
            prp.headers.cookie = robots[0].kuki
        }

        var fetch = UrlFetchApp.fetch("https://mbasic.facebook.com/home.php?sk=h_chr", prp);

        return fetch.getContentText();

    }

};

function mulai() {

    var prp = {
        "muteHttpExceptions": true,
        "method": "GET",
        "followRedirects": false,
        "headers": {
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) Gecko/20100101 Firefox/54.0"
        }
    };

    if (robots[0].kuki) {
        prp.headers.cookie = robots[0].kuki
    }

    var a = aing.beranda(),
        b = aing.strstr(a, "id=\"m-top-of-feed\">"),
        c = b.split("/reactions/picker/");

    for (x in c) {

        var d = aing.getbetween(c[x], "ft_id=", "&");

        if (d != null && d !== "") {

            var e = UrlFetchApp.fetch("https://mbasic.facebook.com/reactions/picker/?ft_id=" + d, prp),
                f = e.getContentText().replace(/&amp;/g, "&");

            var g = aing.getbetween(f, "/ufi/reaction/?ft_ent_identifier=" + d + "&reaction_type=" + robots[0].type, "\" style=\"display:block\">");

            var h = UrlFetchApp.fetch("https://m.facebook.com/ufi/reaction/?ft_ent_identifier=" + d + "&reaction_type=" + robots[0].type + g, prp);

            if (h.getResponseCode() == 302.0) {
                Logger.log(d + " -> OK")
            }

        }

    }

}
