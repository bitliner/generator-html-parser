var expect = require('chai').expect,
    path = require('path');

var fs = require('fs'),
    path = require('path');

var Parser = require('../<%= htmlParserName %>-html-parser.js');


describe('TEST name', function() {

    var body;


    it('parse() should extract...', function() {

        var htmlContent, result;


        htmlContent = fs.readFileSync(path.resolve(__dirname, './data/page.html'), {
            encoding: 'utf-8'
        });

        result = Parser.parse(htmlContent, 'http://www.mydomain.com');

        expect(result).to.have.length(5);

        expect(result).to.include('Item 3');

    })

    it('getNextPages() should extract...', function() {

        var htmlContent, nextPages;

        htmlContent = fs.readFileSync(path.resolve(__dirname, './data/page.html'), {
            encoding: 'utf-8'
        });
        nextPages = Parser.getNextPages(htmlContent, 'http://www.mydomain.com');

        expect(nextPages).to.have.length(1);
        expect(nextPages).to.include('http://www.mydomain.com/next-page');

    });

})