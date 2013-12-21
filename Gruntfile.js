module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    env: {
      search_path: ['lib'],
    },
    jsx: {
      test: {
        src: grunt.option('target') || 't/**/*.jsx',
        add_search_path: "<%= env.search_path %>",
        test : true,
      },
    },
  });

  grunt.loadNpmTasks("grunt-jsx");

  grunt.registerTask('default', ['jsx:test']);
}


