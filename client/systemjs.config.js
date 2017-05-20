/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
    System.config({
        paths: {
            // paths serve as alias
            "npm:": "/lib/"
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: "app",
            // angular bundles
            "@angular/core": "npm:@angular/core/bundles/core.umd.js",
            "@angular/common": "npm:@angular/common/bundles/common.umd.js",
            "@angular/compiler": "npm:@angular/compiler/bundles/compiler.umd.js",
            "@angular/platform-browser": "npm:@angular/platform-browser/bundles/platform-browser.umd.js",
            "@angular/platform-browser-dynamic": "npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js",
            "@angular/http": "npm:@angular/http/bundles/http.umd.js",
            "@angular/router": "npm:@angular/router/bundles/router.umd.js",
            "@angular/forms": "npm:@angular/forms/bundles/forms.umd.js",
            "angular2-highcharts": "https://cdn.rawgit.com/gevgeny/angular2-highcharts/v0.3.0/dist",
            "highcharts/highstock.src": "https://cdn.rawgit.com/highcharts/highcharts-dist/v4.2.1/highstock.js",
            // other libraries
            "rxjs": "npm:rxjs",
            "angular2-in-memory-web-api": "npm:angular2-in-memory-web-api",
            "socket.io-client": "npm:socket.io-client/socket.io.js",
            "gridifier": "npm:gridifier/dist/gridifier.min.js",
            "ng2-responsive": "npm:ng2-responsive",
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: "./main.js",
                defaultExtension: "js"
            },
            rxjs: {
                defaultExtension: "js"
            },
            'ng2-responsive': {
                main: './index.js',
                defaultExtension: 'js'
            },
            "angular2-in-memory-web-api": {
                main: "./index.js",
                defaultExtension: "js"
            },
            "socket.io-client": {
                defaultExtension: "js"
            },
            "angular2-highcharts": {
                main: "./index.js",
                defaultExtension: "js"
            },
            "gridifier": {
                defaultExtension: "js"
            },
        }
    });
})(this);
