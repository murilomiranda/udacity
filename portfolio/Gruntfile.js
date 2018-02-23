module.exports = function(grunt) {
  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          // engine: 'im',
          sizes: [{
            name: 'small',
            width: '30%',
            quality: 20
          },{
            name: 'large',
            width: '50%',
            quality: 40
          },{
            width: 800,
            suffix: '_large_1x',
            quality: 50
          },{
            width: 1600,
            suffix: '_large_2x',
            quality: 30
        }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png,jpeg}'],
          cwd: 'img/',
          dest: 'img_dest/'
        }]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['img_dest'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['img_dest']
        },
      },
    },

    /* Copy the "fixed" images that don't go through processing into the images/directory */
    copy: {
      dev: {
        files: [{
          expand: true,
          src: ['img/fixed/*.{gif,jpg,png}'],
          dest: 'img_dest/',
          flatten: true,
        }]
      },
    },

  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'responsive_images']);

};
