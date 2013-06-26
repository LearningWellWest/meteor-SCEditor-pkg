Package.describe({
  summary: "SCEditor - A lightweight WYSIWYG BBCode and XHTML editor."
});

Package.on_use(function (api) {
  api.use(['templating'], 'client');
  api.add_files([
    'minified/jquery.sceditor.min.js',
    'minified/jquery.sceditor.default.min.css',
    'minified/plugins/bbcode.js',
    'minified/plugins/format.js',
    'minified/plugins/xhtml.js',
    'minified/themes/default.min.css',
    'minified/themes/famfamfam.png',
  ], 'client'
  );
});