var express = require('express');
var cheerio = require('cheerio');
var request = require('request');

var app = express();

const url = "http://hbr.co.ke";

app.get("/", (req, res, next) => {

    request(url, (err, resp, html) => {
        if (err) { throw new Error(err); }

        var $ = cheerio.load(html);

        var kids = $('#dj_widget-3').siblings('#refresh').children();
        var showTitle = kids[0].prev.data;
        var songTitle = kids[0].next.data;
        console.log(`${showTitle} - ${songTitle}`);
    });

    next();

})


app.listen(3000, () => {
    console.log("Scraper started on port 3000");
})