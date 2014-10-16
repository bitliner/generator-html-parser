'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var extractGeneratorName = function(_, appname) {
    var slugged = _.slugify(appname);
    var match = slugged.match(/^generator-(.+)/);

    if (match && match.length === 2) {
        return match[1].toLowerCase();
    }

    return slugged;
};



var HtmlParserGenerator = module.exports = function HtmlParserGenerator(args, options, config) {
    yeoman.generators.Base.apply(this, arguments);

    this.on('end', function() {
        this.installDependencies({
            skipInstall: options['skip-install']
        });
    });

    this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(HtmlParserGenerator, yeoman.generators.Base);

HtmlParserGenerator.prototype.askFor = function askFor() {
    var cb = this.async();
    var htmlParserName = extractGeneratorName(this._, this.appname);

    // have Yeoman greet the user.
    console.log(this.yeoman);

    var prompts = [{
        type:'input',
        name: 'htmlParserName',
        message: 'What\'s the name of the site you want to parse?',
        default: 'facebook'
    }];

    this.prompt(prompts, function(props) {

        this.htmlParserName=props.htmlParserName;
        
        cb();
    }.bind(this));
};

HtmlParserGenerator.prototype.app = function app() {
    this.mkdir('lib');
    this.mkdir('test');
    this.mkdir('test/data');

    this.copy('_package.json', 'package.json');
    this.copy('page.html', 'test/data/page.html');
    this.copy('_test.js', 'test/test.js');
    console.log('-->',this.htmlParserName);
    this.copy('_index.js',this.htmlParserName+'-html-parser.js')
};

// HtmlParserGenerator.prototype.projectfiles = function projectfiles() {
//     this.copy('editorconfig', '.editorconfig');
//     this.copy('jshintrc', '.jshintrc');
// };