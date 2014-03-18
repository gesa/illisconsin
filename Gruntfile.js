// Generated on 2014-03-14 using generator-jekyllrb 0.4.0-alpha
'use strict';
var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
  return connect.static(require('path').resolve(dir));
};

// Directory reference:
//   css: assets/css
//   sass: _scss
//   javascript: assets/js
//   images: assets/img
//   fonts: assets/fonts

module.exports = function (grunt) {
  // show elapsed time at the end
  require('time-grunt')(grunt);
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);

  // Configurable paths
  var yeomanConfig = {
    app: 'app',
    dist: 'dist'
  };

  grunt.initConfig({
    yeoman: yeomanConfig,
    watch: {
      sass: {
        files: ['<%= yeoman.app %>/_scss/**/*.{scss,sass}'],
        tasks: ['sass:server', 'autoprefixer:server']
      },
      autoprefixer: {
        files: ['<%= yeoman.app %>/assets/css/**/*.css'],
        tasks: ['copy:stageCss', 'autoprefixer:server']
      },
      jekyll: {
        files: [
          '<%= yeoman.app %>/**/*.{html,yml,md,mkd,markdown}',
          '_config.yml',
          '!<%= yeoman.app %>/_bower_components'
        ],
        tasks: ['jekyll:server']
      },
      livereload: {
        options: {
          livereload: LIVERELOAD_PORT
        },
        files: [
          '.jekyll/**/*.html',
          '.tmp/assets/css/**/*.css',
          '{.tmp,<%= yeoman.app %>}/<%= js %>/**/*.js',
          '<%= yeoman.app %>/assets/img/**/*.{gif,jpg,jpeg,png,svg,webp}'
        ]
      }
    },
    connect: {
      options: {
        port: 9000,
        // Change hostname to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          middleware: function (connect) {
            return [
              lrSnippet,
              mountFolder(connect, '.tmp'),
              mountFolder(connect, '.jekyll'),
              mountFolder(connect, yeomanConfig.app)
            ];
          }
        }
      },
      dist: {
        options: {
          middleware: function (connect) {
            return [
              mountFolder(connect, yeomanConfig.dist)
            ];
          }
        }
      },
      test: {
        options: {
          middleware: function (connect) {
            return [
              mountFolder(connect, '.tmp'),
              mountFolder(connect, 'test'),
              mountFolder(connect, yeomanConfig.app)
            ];
          }
        }
      }
    },
    open: {
      server: {
        path: 'http://localhost:<%= connect.options.port %>'
      }
    },
    clean: {
      dist: {
        files: [
          {
            dot: true,
            src: [
              '.tmp',
              '<%= yeoman.dist %>/*',
              // Running Jekyll also cleans the target directory.  Exclude any
              // non-standard `keep_files` here (e.g., the generated files
              // directory from Jekyll Picture Tag).
              '!<%= yeoman.dist %>/.git*'
            ]
          }
        ]
      },
      server: ['.tmp', '.jekyll']
    },
    sass: {
      options: {
        bundleExec: true,
        debugInfo: false,
        lineNumbers: false,
        loadPath: 'app/_bower_components'
      },
      dist: {
        files: {
          '.tmp/css/style.css': '<%= yeoman.app %>/_scss/style.scss'
        }
      },
      server: {
        options: {
          debugInfo: true,
          lineNumbers: true
        },
        files: {
          '.tmp/css/style.css': '<%= yeoman.app %>/_scss/style.scss'
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 versions']
      },
      dist: {
        files: [
          {
            expand: true,
            cwd: '<%= yeoman.dist %>/assets/css',
            src: '**/*.css',
            dest: '<%= yeoman.dist %>/assets/css'
          }
        ]
      },
      server: {
        files: [
          {
            expand: true,
            cwd: '.tmp/assets/css',
            src: '**/*.css',
            dest: '.tmp/assets/css'
          }
        ]
      }
    },
    jekyll: {
      options: {
        bundleExec: true,
        config: '_config.yml',
        src: '<%= yeoman.app %>'
      },
      dist: {
        options: {
          dest: '<%= yeoman.dist %>',
          config: '_config.yml,_config.build.yml'
        }
      },
      server: {
        options: {
          dest: '.jekyll'
        }
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        '<%= yeoman.app %>/js/**/*.js',
        'test/spec/**/*.js',
        '!<%= yeoman.app %>/js/vendor/**/*',
        '!<%= yeoman.app %>/_bower_components/**/*'
      ]
    },
    csscss: {
      options: {
        bundleExec: true,
        minMatch: 2,
        ignoreSassMixins: false,
        colorize: true,
        shorthand: false,
        verbose: true
      },
      check: {
        src: ['<%= yeoman.app %>/assets/css/**/*.css',
          '<%= yeoman.app %>/_scss/**/*.scss']
      }
    },
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      check: {
        src: [
          '<%= yeoman.app %>}/assets/css/**/*.css',
          '<%= yeoman.app %>}/_scss/**/*.scss'
        ]
      }
    },
    // UseminPrepare will only scan a single page for usemin blocks. If you
    // use usemin blocks that aren't in index.html, create a usemin manifest
    // page (hackery!) and point this task there.
    useminPrepare: {
      options: {
        dest: '<%= yeoman.dist %>'
      },
      html: '<%= yeoman.dist %>/index.html'
    },
    usemin: {
      options: {
        basedir: '<%= yeoman.dist %>',
        dirs: ['<%= yeoman.dist %>/**/*']
      },
      html: ['<%= yeoman.dist %>/**/*.html'],
      css: ['<%= yeoman.dist %>/assets/css/**/*.css']
    },
    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: false,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true
        },
        files: [
          {
            expand: true,
            cwd: '<%= yeoman.dist %>',
            src: '**/*.html',
            dest: '<%= yeoman.dist %>'
          }
        ]
      }
    },
    // Usemin adds files to concat
    concat: {},
    // Usemin adds files to uglify
    uglify: {},
    // Usemin adds files to cssmin
    cssmin: {
      dist: {
        options: {
          check: 'gzip'
        }
      }
    },
    copy: {
      dist: {
        files: [
          {
            expand: true,
            dot: true,
            cwd: '<%= yeoman.app %>',
            src: [
              // Jekyll processes and moves HTML and text files. Usemin processes
              // and moves CSS and javascript inside of Usemin blocks.
              // Copy moves asset files and directories
              '*.{ico,png}',
              'assets/**/*',
              // Follow the Jekyll pattern and exclude all files and folders
              // prefixed with an underscore
              '!**/_*/**',
              '!**/_*'
              // Explicitly add other files your site needs for distribution here
            ],
            dest: '<%= yeoman.dist %>'
          }
//            Sample bower copy, don't forget stageAssets too.
//          },
//          {
//            expand: true,
//            cwd: '<%= yeoman.app %>/_bower_components/fontawesome',
//            src: 'fonts/*',
//            dest: '<%= yeoman.dist %>'
//          }
        ]
      },
      // Copy CSS into .tmp directory for Autoprefixer processing
      stageAssets: {
        files: [
          {
            expand: true,
            dot: true,
            cwd: '<%= yeoman.app %>/assets/css',
            src: '**/*.css',
            dest: '.tmp/css'
          }
//          },
//          {
//            nonull: true,
//            expand: true,
//            dot: true,
//            cwd: '<%= yeoman.app %>/_bower_components/fontawesome',
//            src: 'fonts/*',
//            dest: '.tmp'
//          }
        ]
      }
    },
    concurrent: {
      server: [
        'sass:server',
        'copy:stageAssets',
        'jekyll:server'
      ],
      dist: [
        'sass:dist',
        'copy:dist'
      ]
    }
  });

  // Define Tasks
  grunt.registerTask('server', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'open', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'concurrent:server',
      'autoprefixer:server',
      'connect:livereload',
      'open',
      'watch'
    ]);
  });

  // No real tests yet. Add your own.
  grunt.registerTask('test', [
    //   'clean:server',
    //   'concurrent:test',
    //   'connect:test'
  ]);

  grunt.registerTask('check', [
    'clean:server',
    'sass:server',
    'jshint:all',
    'csscss:check',
    'csslint:check'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    // Jekyll cleans files from the target directory, so must run first
    'jekyll:dist',
    'concurrent:dist',
    'useminPrepare',
    'concat',
    'autoprefixer:dist',
    'cssmin',
    'uglify',
    'usemin',
    'htmlmin'
  ]);

  grunt.registerTask('default', [
    'check',
    'test',
    'build'
  ]);
};
