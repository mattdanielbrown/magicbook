var build = require('../../src/build.js');
var fs = require('fs');
var uuid = require('node-uuid');
var _ = require('lodash');

global.buildPath = function(uid, file) {
  return "spec/support/book/tmp/" + uid + "/" + file;
}

global.triggerBuild = function(config) {
  var uid = uuid.v4();
  _.defaults(config, {
    files: ["spec/support/book/content/first-chapter.md", "spec/support/book/content/second-chapter.md"],
    destination: "spec/support/book/tmp/"+uid+"/:format"
  });
  build(config);
  return uid;
};
