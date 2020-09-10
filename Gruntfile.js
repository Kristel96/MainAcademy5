module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/createUser.js',
                dest: 'build/createUser.min.js'
            }
        },
        jshint: {
            all: ['Gruntfile.js', './*.js']
        },
        imagemin: {
            static: {
                options: {
                    optimizationLevel: 7,
                    svgoPlugins: [{removeViewBox: false}],
                    // use: [mozjpeg()] // Example plugin usage
                },
                files: {
                    'build/ingPNG.png': 'assets/ingPNG.png',
                    'build/nature.jpg': 'assets/nature.jpg',
                    'build/imgGif.gif': 'assets/imgGif.gif'
                }
            },
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'assets/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'build/'
                }]
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'imagemin', 'jshint']);

};
