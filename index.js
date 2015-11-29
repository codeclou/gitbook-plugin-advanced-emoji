module.exports = {
    website: {
        assets: "./node_modules/emojify.js/dist/images/basic/",
        js: [ ],
        css: [
            "./book/plugin.css"
        ]
    },

    blocks: { },

    hooks: {
        "page:before": function(page) {
            var emojify = require("emojify.js");
            emojify.setConfig({img_dir : '/gitbook/plugins/gitbook-plugin-advanced-emoji/'});
            page.content = emojify.replace(page.content);
            return page;
        }
    }
};
