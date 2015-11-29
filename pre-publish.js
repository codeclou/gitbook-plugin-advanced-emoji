var fse = require('fs-extra');

fse.copy('./node_modules/emojify.js/dist/images/basic', './assets/emojis', function (err) {
    if (err) {
        return console.error(err);
    }
    console.log("success!");
});

fse.copy('./node_modules/emojify.js/dist/css/basic/emojify.css', './assets/emojify.css', function (err) {
    if (err) {
        return console.error(err);
    }
    console.log("success!");
});