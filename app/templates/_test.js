/* eslint-env mocha */
'use strict';

let expect = require('chai').expect;
let parser = require('../');
let HtmlParserTester = require('@bitliner/html-parser-test');
let TestConf = require('./test.conf');

describe('<%= htmlParserName %>-html-parser', function() {

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

});
