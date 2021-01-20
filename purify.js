// purify.js
const purify = require("purify-css")
const htmlFiles = ['index.html'];
const cssFiles = ['bootstrap.css'];

const opts = {
    minify: true,
    output: 'purified.css'
};

purify(htmlFiles, cssFiles, opts, function (res) {
    log(res);
});
