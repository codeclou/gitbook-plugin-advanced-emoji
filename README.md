# GitBook Plugin: Advanced Emoji

Transforms emojis like `:white_check_mark:` into real :white_check_mark: emoji images using [emojify.js](https://github.com/hassankhan/emojify.js).

## Installation

You can install this plugin via npm:

```bash
$ npm install gitbook-plugin-advanced-emoji
```

Be sure to activate the option from the `book.json` file:

```json
{
    "plugins" : ["advanced-emoji"]
}
```

Then run `gitbook install` followed by either `gitbook serve` or `gitbook build`


## License

 * https://github.com/codeclou/gitbook-plugin-advanced-emoji is licensed under MIT License
 * https://github.com/hassankhan/emojify.js is licensed under MIT License

## Publishing to npmjs.com

```
npm install           # install dependencies
npm run pre-publish   # copies emoji pngs and css to assets folder
npm run publish       # publishes to npmjs.com
```