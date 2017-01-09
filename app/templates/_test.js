/* eslint-env mocha */
'use strict';

let expect = require('chai').expect;
let Parser = require('../');
let HtmlParserTester = require('@bitliner/html-parser-test');
let TestConf = require('./test.conf');

describe('<%= htmlParserName %>-html-parser', function() {
    let parser;

    beforeEach(function() {
        parser = new Parser({
            api: require('@bitliner/parser-api'),
        });
    });

    describe('parse()', function() {
        TestConf.forEach(function(configuration, index) {
            describe('when is ' + index + '-th configuration (index starts from 0)', function() {
                it('should work fine', function() {
                    let result;

                    result =
                        HtmlParserTester
                        .testByParserAndTestConfiguration(
                            parser,
                            configuration
                        );

                    expect(result).to.be.eql(true);
                });
            });
        });
    });

    // it('getNextPages() should extract...', function() {
    //     let htmlContent, nextPages;
    //     let url, expectedNextLink;
    //     url = '';
    //     expectedNextLink = '';
    //     htmlContent =
    //     fs.readFileSync(path.resolve(__dirname, './data/page.html'), {
    //         encoding: 'utf-8'
    //     });
    //     nextPages = Parser.getNextPages(htmlContent, url);

    //     expect(nextPages).to.have.length(1);
    //     expect(nextPages).to.include(expectedNextLink);
    // });
});
