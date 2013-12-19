module.exports = function(grunt) {

    'use strict';

    // Load all grunt tasks
    // --------------------------
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);



    // Init Config
    // --------------------------
    var appConfig = {

        app:   'app',
        dist:  'dist',

        // Metadata
        pkg: grunt.file.readJSON('package.json'),
        banner:
        '\n' +
        '/*\n' +
        ' * -------------------------------------------------------\n' +
        ' * Project: <%= pkg.title %>\n' +
        ' * Version: <%= pkg.version %>\n' +
        ' * Author:  <%= pkg.author.name %> (<%= pkg.author.email %>)\n' +
        ' *\n' +
        ' * Copyright (c) <%= grunt.template.today(\'yyyy\') %> <%= pkg.author.name %>\n' +
        ' * -------------------------------------------------------\n' +
        ' */\n' +
        '\n',

        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= dist %>/*'
                    ]
                }]
            },
            server: '.tmp'
        },

        // Start Server
        connect: {
            server: {
                options: {
                    port: 9000,
                    hostname: 'localhost',
                    livereload: true,
                    middleware: function (connect) {
                        return [
                            connect.static(require('path').resolve( '.tmp' )),
                            connect.static(require('path').resolve( appConfig.app ))
                        ];
                    }
                }
            }
        },

        copy:{
            styles: {
                expand: true,
                cwd: '<%= app %>/css',
                dest: '.tmp/',
                src: '{,*/}*.css'
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= app %>',
                    dest: '<%= dist %>',
                    src: [
                        '*.{ico,png,txt}',
                        'js/vendor/{,*/}*.js',
                        'img/*',
                        '*.html'
                    ]
                }]
            },
        },

        // CSS Minify options
        cssmin: {
          options:{
            keepSpecialComments: 0
          }
        },

        // JS Linting
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                ignores: '<%= app %>/js/vendor/*'
            },
            all: [
                'Gruntfile.js',
                '<%= app %>/js/{,*/}*.js'
            ]
        },



        // JS Minify options
        uglify: {
            options: {
                mangle: false,
                banner: '<%= banner %>'
            }
        },

        useminPrepare: {
            html: '<%= app %>/index.html',
            options: {
                dest: '<%= dist %>'
            }
        },

        usemin: {
            html: ['<%= dist %>/index.html'],
            css: ['<%= dist %>/css/{,*/}*.css'],
            options: {
                dirs: ['<%= dist %>']
            }
        },

        // Watch Task
        watch: {
            options: {
                livereload: true
            },
            css: {
                files: '<%= app %>/css/{,*/}*.css',
                tasks: 'copy:styles'
            },
            js: {
                files: '<%= jshint.all %>',
                tasks: 'jshint'
            },
            html: {
                files: '<%= app %>/*.html'
            }
        }

    };

    grunt.initConfig(appConfig);


    // Register tasks
    // --------------------------
    grunt.registerTask( 'default', [
        'jshint',
        'build'
    ]);

    grunt.registerTask( 'build', [
        'clean:dist',
        'useminPrepare',
        'concat',
        'jshint',
        'uglify',
        'cssmin',
        'copy:dist',
        'usemin'
    ]);

    grunt.registerTask( 'server', [
        'clean:server',
        'copy:styles',
        'connect',
        'watch'
    ]);

};
