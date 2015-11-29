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
		"page": function(page) {
            page.content = page.content.replace(":white_check_mark:", "FOO");
			return page;
		}
    }
};
