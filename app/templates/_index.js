/* jshint node:true */
'use strict';

var cheerio = require('cheerio'),
	UrlResolver = require('url');

var DomainUtils = require('@bitliner/domain-utils'),
	DateParser = require('@bitliner/date-parser'),
	IntervalParser = require('@bitliner/interval-parser');

/****
 * This method parses html string in input
 * and returns an object or a list of objects 
 * representing the entities extracted from the html. 
 * It also receives in input the url of the page where the html comes from. 
 * The url is useful to resolve relative urls embedded in the page using the UrlResolver 
 */
module.exports.parse = function(html, url) {
	var $, result, tmp;



	$ = cheerio.load(html);
	result = [];

	// here select the html elements and process them
	$('.item').each(function() {
		var $el = $(this);

		var review = {
			rating: {
				value: null,
				best: 5
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
				total: null
			},
			link: null,
			linkToProductPage: null,
			subtitle: null,
			title: null,
			channel: DomainUtils.getHostName(url),
			language: DomainUtils.getLanguageByUrl(url),
			country: DomainUtils.getCountryByUrl(url),
		};

		$('', $el);



		result.push(review);
	});

	return result;

};

module.exports.getNextPages = function(html, url) {
	var $,
		next;

	$ = cheerio.load(html);

	// select the next url and resolve it
	next = $('a:contains(Next Page)').attr('href');
	next = UrlResolver.resolve(url, next);

	return [next];

};