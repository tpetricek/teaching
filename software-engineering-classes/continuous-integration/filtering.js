var assert = require('assert');
var bot = require('../bot');

describe('Blocking offensive words from queries', function () {
  // This file is similar to 'communication.js'. It defines a couple of tests
  // that specify how the 'isPermitted' function in 'bot.js' should work!

  it('should block sentence about Brexit', function () {
    // Any mention of 'brexit' is not allowed (sorry)
    var query = "Brexit is going to be great!"
    assert.equal(bot.isPermitted(query), false)
  });

  it('should block sentence using shit', function () {
    // Shit is almost as bad as brexit - also not allowed!
    var query = "I'm not getting paid enough for this shit!"
    assert.equal(bot.isPermitted(query), false)
  });

  it('should not block sentence about shitake mushrooms', function () {
    // But shitake mushrooms are fine. This needs more clever handling!
    var query = "Shitake is my favorite musrhoom."
    assert.equal(bot.isPermitted(query), true)
  });

});