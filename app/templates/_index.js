const {list, rating, text, domain, country, language, date, html, cheerio} = require('@bitliner/parsly');


module.exports.parse = (htmlSource, url) => {
  const fn = list('.review-item', {
    rating: rating('.reviewer-score'),
    html: html('.review-content'),
    authorName: text('.author'),
    subtitle: text('.review-item-header > div > h4'),
    title: text('.product-title', '$page'),
    pubDate: date('.review-date'),
    channel: domain(url),
    language: language(url),
    country: country(url),
    link: url,
    linkToProductPage: url,
    linkToSingleReview: url,
  });

  const result = fn(htmlSource);
  const endResult = result
    .map((e) => {
      e.rating = {
        value: e.rating,
        total: 5,
      };
      return e;
    });
  return endResult;
};