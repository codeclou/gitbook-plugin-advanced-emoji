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
			page.sections.each(function (section)) {
				section.content = section.content.replace(":white_check_mark:", "FOO");
			}
			return page;
		}
    }
};
