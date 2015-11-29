module.exports = {
    website: {
        assets: "./assets",
        js: [ ],
        css: [
            "emojify.css"
        ]
    },

    blocks: { },

    hooks: {
        "page:before": function(page) {
            var emojify = require("emojify.js");
            emojify.setConfig({img_dir : '/gitbook/plugins/gitbook-plugin-advanced-emoji/emojis/'});
            page.content = emojify.replace(page.content);
            return page;
        }
    }
};
