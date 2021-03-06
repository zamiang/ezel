//
// Test your Backbone model code like any other node modules.
//

var Commit = require('../../models/commit'),
    Commits = require('../../collections/commits');

describe('Commit', function() {

  var commit;

  beforeEach(function() {
    commit = new Commit({
      sha: 'qux'
    });
  });

  describe('#url', function() {

    it('includes the owner and repo', function() {
      commit.collection = new Commits(null, {
        owner: 'foo',
        repo: 'bar'
      });
      commit.url().should.include('/repos/foo/bar/qux');
    });
  });
});