/* jshint node:true */
'use strict';

let cheerio = require('cheerio');

/**
 * [exports description]
 * @type {[type]}
 */
module.exports = class {
    constructor(opts) {
        this.api = opts.api;
    }
    parse(html, url) {
        let $;
        let result;

        $ = cheerio.load(html);
        result = [];

        // here select the html elements and process them
        $('.item').each((i, $el) => {
            let review = {
                rating: {
                    value: null,
                    best: 5,
                },
                pubDate: null,
                pros: null,
                cons: null,
                html: null,
                linkToSingleReview: null,
                authorName: null,
                authorLink: null,
                authorGender: null,
                authorAge: null,
                authorLocation: null,
                helpfulness: {
                    positiveVotes: null,
                    total: null,
                },
                link: null,
                linkToProductPage: null,
                subtitle: null,
                title: null,
                channel: this.api.DomainUtils.getHostName(url),
                language: this.api.DomainUtils.getLanguageByUrl(url),
                country: this.api.DomainUtils.getCountryByUrl(url),
            };

            // $('', $el);

            result.push(review);
        });

        return result;
    }
    getNextPages(html, url) {
        // let $;
        // let next;

        // $ = cheerio.load(html);

        // // select the next url and resolve it
        // next = $('a:contains(Next Page)').attr('href');
        // next = require('url').resolve(url, next);

        // return [next];
        throw new Error(
            'This method does not need to be implemented or invoked'
            );
    }
};

