module.exports = {
    website: {
        assets: "./book",
        js: [
            "book.js"
        ],
        css: [
            "book.css"
        ]
    },

    blocks: { },

    hooks: {
        "page:before": function(page) {
            /*page.content = page.content.replace(/:white_check_mark:/g, "FOO");*/
            var emojify = require("emojify.js");
            page.content = emojify.replace(page.content);
            return page;
        }
    }
};
