'use strict';
let util = require('util');
let path = require('path');
let yeoman = require('yeoman-generator');

function HtmlParserGenerator(args, options) {
    yeoman.generators.Base.apply(this, arguments);

    this.on('end', function() {
        this.installDependencies({
            skipInstall: options['skip-install'],
        });
    });

    this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(HtmlParserGenerator, yeoman.generators.Base);

HtmlParserGenerator.prototype.askFor = function askFor() {
    let cb = this.async();

    // have Yeoman greet the user.
    console.log(this.yeoman);

    let prompts = [{
        type: 'input',
        name: 'htmlParserName',
        message: 'What\'s the name of the site you want to parse?',
        default: 'facebook'
    }];

    this.prompt(prompts, function(props) {

        this.htmlParserName = props.htmlParserName;

        cb();
    }.bind(this));
};

HtmlParserGenerator.prototype.app = function app() {
    this.mkdir('lib');
    this.mkdir('test');
    this.mkdir('test/data');

    this.copy('_package.json', 'package.json');
    this.copy('.eslintrc.js', '.eslintrc.js');
    this.copy('page.html', 'test/data/page.html');
    this.copy('_test.js', 'test/test.js');
    this.copy('_test.conf.js', 'test/test.conf.js');
    // console.log('-->', this.htmlParserName);
    this.copy('_index.js', 'html-parser-' + this.htmlParserName + '.js')
};

module.exports = HtmlParserGenerator;
