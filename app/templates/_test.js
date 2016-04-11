/* globals describe, it */
/* jshint node:true */
'use strict';

var expect = require('chai').expect,
	path = require('path');

var fs = require('fs'),
	path = require('path');

var Parser = require('../<%= htmlParserName %>-html-parser.js');


describe('Testiing <%= htmlParserName %>-html-parser', function() {



	it('parse() should extract...', function() {

		var htmlContent, result, review;

		var url = '';

		var expectedNumberOfReviews = null;
		var expectedAuthorName = 'Scott';

		var expectedFields = {
			rating: {
				best: 5,
				value: null
			},
			pubDate: new Date(null),
			pros: null,
			cons: null,
			html: null,
			linkToSingleReview: null,
			authorName: null,
			authorLink: null,
			authorAge: null,
			authorLocation: null,
			helpfulness: {
				positiveVotes: null,
				total: null
			},
			link: url,
			linkToProductPage: url,
			subtitle: null,
			title: null,
			channel: null,
			language: null,
			country: null
		};


		htmlContent = fs.readFileSync(path.resolve(__dirname, './data/page.html'), {
			encoding: 'utf-8'
		});

		result = Parser.parse(htmlContent, url);

		expect(result).to.have.length(expectedNumberOfReviews);

		review = result.filter(function(r) {
			return r.authorName === expectedAuthorName;
		});
		expect(review.length).to.be.eql(1);

		review = review[0];

		Object.keys(expectedFields).forEach(function(fieldName) {
			expect(review[fieldName]).to.be.eql(expectedFields[fieldName]);
		});

	});

	it('getNextPages() should extract...', function() {

		var htmlContent, nextPages;
		var url, expectedNextLink;


		url = '';
		expectedNextLink = '';


		htmlContent = fs.readFileSync(path.resolve(__dirname, './data/page.html'), {
			encoding: 'utf-8'
		});
		nextPages = Parser.getNextPages(htmlContent, url);

		expect(nextPages).to.have.length(1);
		expect(nextPages).to.include(expectedNextLink);

	});

});