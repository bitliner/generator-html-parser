# generator-html-parser 

A generator for [Yeoman](http://yeoman.io).

It generates the basic structure of an html parser in node.js.

Useful if you are doing scraping with node.js. 


## Getting Started



### How to install it

To install generator-html-parser from npm, run:

```
$ npm install -g generator-html-parser
```


### How to use it

1. `mkdir facebook-html-parser && cd $_`
2. `yo html-parser`

That's it!

The generator will generate a node-js module to parse html and a test case to prove how it works. Just run  `npm test` and have a look at *test/test.js* file content.

The generated code contains simple code to parse the file *test/data/page.html*.


### How to customize it to parse any html string you need

The main file is `<site-name>-html-parser.js`.

It contains two methods

1. `parse(html,url)`: it receives as input the html (string) to parse and an url (string), useful if you need to resolve some relative url with the node module *Url* (already imported)
2. `getNextPages(html,url)`:  to get the urls of next pages to surf. Usually useful when you are scraping a list of pages. Still, it takes as input the html (string) to parse, and the url (string) to resolve eventually urls extracted from the html.

### Details of implementation

It is based on [cheerio](https://www.npmjs.org/package/cheerio) to parse the html.

Cheerio is like jQuery, but faster.



```
$ = cheerio.load(html);

$('.item').each(function() {
    var el=$(this);
	result.push(el.text());
})

``` 


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
