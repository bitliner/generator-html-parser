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

		var expectedNumberOfReviews=null;

		var expectedAuthorName = '';
		var expectedAuthorLocation = null;
		var expectedAuthorLink = null;
		var expectedAuthorAge = null;
		var expectedRatingValue = null;
		var expectedRatingTotal = null;
		var expectedHelpfulnessPositiveVotes=null;
		var expectedHelpfulnessTotal=null;		
		var expectedPubDate = new Date();
		var expectedHtmlStart = '';
		var expectedHtmlEnd = '';
		var expectedLinkToSingleReview = null;
		var expectedLinkToSingleProduct = null;
		var expectedLink = url;
		var expectedSubtitle = '';
		var expectedTitle = '';
		var expectedChannel = '<%= htmlParserName %>';
		var expectedCountry = '';
		var expectedLanguage = '';


		htmlContent = fs.readFileSync(path.resolve(__dirname, './data/page.html'), {
			encoding: 'utf-8'
		});

		result = Parser.parse(htmlContent, url);

		expect(result).to.have.length(expectedNumberOfReviews);

		review = result.filter(function(r) {
			return r.authorName === expectedAuthorName;
		});
		review=review[0];

		expect(review.authorAge).to.be.eql(expectedAuthorAge);
		expect(review.authorLocation).to.be.eql(expectedAuthorLocation);
		expect(review.authorLink).to.be.eql(expectedAuthorLink);
		expect(review.rating.value).to.be.eql(expectedRatingValue);
		expect(review.rating.total).to.be.eql(expectedRatingTotal);
		expect(review.helpfullness.positiveVotes).to.be.eql(expectedHelpfulnessPositiveVotes);
		expect(review.helpfullness.total).to.be.eql(expectedHelpfulnessTotal);
		expect(review.pubDate.getDate()).to.be.eql(expectedPubDate.getDate());
		expect(review.pubDate.getMonth()).to.be.eql(expectedPubDate.getMonth());
		expect(review.pubDate.getFullYear()).to.be.eql(expectedPubDate.getFullYear());

		expect(review.html.substr(0, 20)).to.be.eql(expectedHtmlStart.substr(0, 20));
		expect(review.html.substr(review.html.length - 20, review.html.length)).to.be.eql(expectedHtmlEnd.substr(expectedHtmlEnd.length - 20, expectedHtmlEnd.length));
		expect(review.linkToSingleReview).to.be.eql(expectedLinkToSingleReview);
		expect(review.linkToSingleProduct).to.be.eql(expectedLinkToSingleProduct);
		expect(review.linkToProductPage).to.be.eql(expectedLinkToSingleProduct);
		expect(review.link).to.be.eql(expectedLink);

		expect(review.subtitle).to.be.eql(expectedSubtitle);
		expect(review.title).to.be.eql(expectedTitle);
		expect(review.channel).to.be.eql(expectedChannel);
		expect(review.language).to.be.eql(expectedLanguage);
		expect(review.country).to.be.eql(expectedCountry);

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