// Generated on 2013-10-15 using generator-jekyllrb 0.4.0
'use strict';

// Directory reference:
//   css: css
//   sass: _scss
//   javascript: js
//   images: img
//   fonts: fonts

module.exports = function (grunt) {
  // Show elapsed time after tasks run
  require('time-grunt')(grunt);
  // Load all Grunt tasks
  require('load-grunt-tasks')(grunt);
  grunt.loadNpmTasks('grunt-bower-install');

  grunt.initConfig({
    // Configurable paths
    yeoman: {
      app: 'app',
      dist: 'dist'
    },
    watch: {
      sass: {
        files: ['<%= yeoman.app %>/_scss/**/*.{scss,sass}'],
        tasks: ['sass:server', 'autoprefixer:server']
      },
      autoprefixer: {
        files: ['<%= yeoman.app %>/css/**/*.css'],
        tasks: ['copy:stageCss', 'autoprefixer:server']
      },
      jekyll: {
        files: [
          '<%= yeoman.app %>/**/*.{html,yml,md,mkd,markdown}',
          '_config.yml', '_around_town.yml',
          '!<%= yeoman.app %>/_bower_components'
        ],
        tasks: ['jekyll:server']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '.jekyll/**/*.html',
          '.tmp/css/**/*.css',
          '{.tmp,<%= yeoman.app %>}/<%= js %>/**/*.js',
          '<%= yeoman.app %>/img/**/*.{gif,jpg,jpeg,png,svg,webp}',
          '<%= yeoman.app %>/*.{gif,jpg,jpeg,png,svg,webp}'
        ]
      }
    },
    connect: {
      options: {
        port: 9001,
        livereload: 35728,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: [
            '.tmp',
            '.jekyll',
            '<%= yeoman.app %>'
          ]
        }
      },
      dist: {
        options: {
          open: true,
          base: [
            '<%= yeoman.dist %>'
          ]
        }
      },
      test: {
        options: {
          base: [
            '.tmp',
            '.jekyll',
            'test',
            '<%= yeoman.app %>'
          ]
        }
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
      server: [
        '.tmp',
        '.jekyll'
      ]
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
            cwd: '<%= yeoman.dist %>/css',
            src: '**/*.css',
            dest: '<%= yeoman.dist %>/css'
          }
        ]
      },
      server: {
        files: [
          {
            expand: true,
            cwd: '.tmp/css',
            src: '**/*.css',
            dest: '.tmp/css'
          }
        ]
      }
    },
    jekyll: {
      options: {
        bundleExec: true,
        config: '_config.yml,_around_town.yml,_config.build.yml',
        src: '<%= yeoman.app %>'
      },
      dist: {
        options: {
          dest: '<%= yeoman.dist %>'
        }
      },
      server: {
        options: {
          config: '_config.yml,_around_town.yml',
          dest: '.jekyll'
        }
      },
      check: {
        options: {
          doctor: true
        }
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
      css: ['<%= yeoman.dist %>/css/**/*.css']
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
              // Jekyll processes and moves HTML and text files
              // Usemin moves CSS and javascript inside of Usemin blocks
              // Copy moves asset files and directories
              'img/**/*',
              'fonts/**/*',
              // Like Jekyll, exclude files & folders prefixed with an underscore
              '!**/_*{,/**}',
              // Explicitly add any files your site needs for distribution here
              //'_bower_components/jquery/jquery.js',
              'favicon.ico',
<<<<<<< HEAD
              'a/**/*'
=======
              'a/**/*',
              'touch-icon-*.*'
>>>>>>> sneaks the map in
              //'apple-touch*.png'
            ],
            dest: '<%= yeoman.dist %>'
          }
        ]
      },
      // Copy CSS into .tmp directory for Autoprefixer processing
      stageCss: {
        files: [
          {
            expand: true,
            dot: true,
            cwd: '<%= yeoman.app %>/css',
            src: '**/*.css',
            dest: '.tmp/css'
          }
        ]
      }
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
        src: [
          '<%= yeoman.app %>/css/style.scs',
          '<%= yeoman.app %>/_scss/style.sccs'
        ]
      }
    },
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      check: {
        src: [
          '<%= yeoman.app %>/css/**/*.css',
          '<%= yeoman.app %>/_scss/**/*.scss'
        ]
      }
    },
    concurrent: {
      server: [
        'sass:server',
        'copy:stageCss',
        'jekyll:server'
      ],
      dist: [
        'sass:dist',
        'copy:dist'
      ]
    },
    premailer: {
      options: {
        baseUrl: 'http://illisconsin.com',
        verbose: true
      },
      mailchimp: {
        files: {
          '<%= yeoman.dist %>/rsvp/email_template/index.html': ['<%= yeoman.dist %>/rsvp/email_template/index.html']
        }
      }
    },
    bowerInstall: {
      server: {
        src: '.jekyll/**/*.html',
        ignorePath: 'app'
      },
      dist: {
        src: '<%= yeoman.dist %>/index.html',
        ignorePath: 'app'
      }
    }
  });

  // Define Tasks
  grunt.registerTask('server', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'concurrent:server',
      'bowerInstall:server',
      'autoprefixer:server',
      'connect:livereload',
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
    'bowerInstall:dist',
    'useminPrepare',
    'concat',
    'autoprefixer:dist',
    'cssmin',
    'uglify',
    'usemin',
    'premailer:mailchimp'
  ]);

  grunt.registerTask('default', [
    'check',
    'test',
    'build'
  ]);
};
