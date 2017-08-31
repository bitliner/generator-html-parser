/* jshint node:true */
'use strict';

const cheerio = require('cheerio');
const DomainUtils = require('@bitliner/domain-utils');
const IntervalParser = require('@bitliner/interval-parser');
const DateParser = require('@bitliner/date-parser');
const wae = require('web-auto-extractor').default;

/**
 * [exports description]
 * @type {[type]}
 */
module.exports = class {
  constructor(opts) {}
  parse(html, url) {
    // var parsed = WAE().parse(sampleHTML)

    const $ = cheerio.load(html);
    let result = [];

    // using WAE, if WAE does not extract anything, remove this part to make it fully CSS selectors (cheerio)
    const microdata = wae().parse(html).microdata;
    const title = microdata.Product[0].name;
    const reviews = microdata.Product[0].review;

    // using WAE mixed with CSS selectors (cheerio)
    $('.container-selector').each((i, $el) => {
      let r = reviews[i];

      // review
      let review = {
        rating: {
          value: IntervalParser.get(r.reviewRating.ratingValue).part, // convert to range [1,5] if different range
          total: 5,
        },
        pubDate: DateParser.get(r.datePublished),
        pros: null,
        cons: null,
        html: r.description,
        authorName: r.author,
        authorLocation: $('.author', $el).text().trim() || null,
        authorAge: $('.age', $el).text().trim() || null,
        authorLink: $('.link', $el).attr('href') || null,
        helpfulness: {
          positiveVotes: parseInt($('.positiveVotes', $el).html()) || null,
          total: parseInt($('.negativeVotes', $el).html()) + parseInt($('.positiveVotes', $el).html()),
        },
        link: url,
        linkToProductPage: url,
        linkToSingleReview: url,
        subtitle: r.name,
        title: title,
        channel: DomainUtils.getChannelByUrl(url),
        language: DomainUtils.getLanguageByUrl(url),
        country: DomainUtils.getCountryByUrl(url),
      };

      result.push(review);
    });

    return result;
  }

  getNextPages(html, url) {
    throw new Error(
      'This method does not need to be implemented or invoked'
    );
  }
}
;

