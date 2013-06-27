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
    'minified/themes/famfamfam.png'.
    'emoticons/alien.png',
    'emoticons/angel.png',
    'emoticons/angry.png',
    'emoticons/blink.png',
    'emoticons/blush.png',
    'emoticons/cheerful.png',
    'emoticons/cool.png',
    'emoticons/cwy.png',
    'emoticons/devil.png',
    'emoticons/dizzy.png',
    'emoticons/ermm.png',
    'emoticons/face.png',
    'emoticons/getlost.png',
    'emoticons/grin.png',
    'emoticons/happy.png',
    'emoticons/heart.png',
    'emoticons/kissing.png',
    'emoticons/laughing.png',
    'emoticons/ninja.png',
    'emoticons/pinch.png',
    'emoticons/pouty.png',
    'emoticons/sad.png',
    'emoticons/shocked.png',
    'emoticons/sick.png',
    'emoticons/sideways.png',
    'emoticons/sleeping.png',
    'emoticons/silly.png',
    'emoticons/smile.png',
    'emoticons/tounge.png',
    'emoticons/unsure.png',
    'emoticons/w00t.png',
    'emoticons/wassat.png',
    'emoticons/whistling.png',
    'emoticons/wink.png',
    'emoticons/wub.png',
    ,
  ], 'client'
  );
});