const critical = require('critical');

critical.generate({
    // Inline the generated critical-path CSS
    // - true generates HTML
    // - false generates CSS
    inline: true,
  
    // Your base directory
    base: 'CondeNicolas_4_05122020/',
  
  
    // HTML source file
    src: 'index.html',
  
    // Your CSS Files (optional)
    css: ['css/bootstrap.css'],
  
    dimensions: [
        {
          height: 200,
          width: 500,
        },
        {
          height: 900,
          width: 1200,
        },
    ],
  
    // Output results to file
    target: {
      css: 'critical.css',
      html: 'index-critical.html',
      uncritical: 'uncritical.css',
    },
  
    // Minify critical-path CSS when inlining
    minify: true,
  
    // Extract inlined styles from referenced stylesheets
    extract: true,
  
    // ignore CSS rules
    ignore: {
      atrule: ['@font-face'],
      rule: [/some-regexp/],
      decl: (node, value) => /big-image\.png/.test(value),
    },
  });
},(err, output) => {
  if (err) {
    console.error(err);
  } else if (output) {
    console.log('Generated critical CSS');
  }
});