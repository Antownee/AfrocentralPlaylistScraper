var cheerio = require('cheerio');
var request = require('request');

const url = "http://hbr.co.ke";

setInterval(() => {
    request(url, (err, resp, html) => {
        if (err) { throw new Error(err); }

        var $ = cheerio.load(html);

        var kids = $('#dj_widget-3').siblings('#refresh').children();
        var showTitle = kids[0].prev.data;
        var songTitle = kids[0].next.data;
        console.log(`${showTitle} - ${songTitle}`);
    });


}, 2 * 60 * 1000)

console.log("Scraper started");