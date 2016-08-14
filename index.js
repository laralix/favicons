var gulp = require('gulp');
var favicons = require('gulp-favicons');
var Elixir = require('laravel-elixir');

var Task = Elixir.Task;

Elixir.extend('favicons', function(src, output, options) {
    var paths = new Elixir.GulpPaths()
        .src(src || config.get('assetsPath') + '/img/favicon.png')
        .output(output || config.get('publicPath'));
    
    new Task('favicons', function() {
        return gulp
            .src(paths.src.path)
            .pipe(favicons(paths.output.name, options || {
                appName: null,                  // Your application's name. `string`
                appDescription: null,           // Your application's description. `string`
                developerName: null,            // Your (or your developer's) name. `string`
                developerURL: null,             // Your (or your developer's) URL. `string`
                background: "#fff",             // Background colour for flattened icons. `string`
                path: "/",                      // Path for overriding default icons path. `string`
                url: "/",                       // Absolute URL for OpenGraph image. `string`
                display: "standalone",          // Android display: "browser" or "standalone". `string`
                orientation: "portrait",        // Android orientation: "portrait" or "landscape". `string`
                start_url: "/?homescreen=1",    // Andorid start application's URL. `string`
                version: "1.0",                 // Your application's version number. `number`
                logging: false,                 // Print logs to console? `boolean`
                online: false,                  // Use RealFaviconGenerator to create favicons? `boolean`
                icons: {
                    android: true,              // Create Android homescreen icon. `boolean`
                    appleIcon: true,            // Create Apple touch icons. `boolean`
                    appleStartup: true,         // Create Apple startup images. `boolean`
                    coast: true,                // Create Opera Coast icon. `boolean`
                    favicons: true,             // Create regular favicons. `boolean`
                    firefox: true,              // Create Firefox OS icons. `boolean`
                    opengraph: true,            // Create Facebook OpenGraph image. `boolean`
                    twitter: true,              // Create Twitter Summary Card image. `boolean`
                    windows: true,              // Create Windows 8 tile icons. `boolean`
                    yandex: true                // Create Yandex browser icon. `boolean`
                }
            }))
            .pipe(gulp.dest(paths.output.baseDir));
    });
});
