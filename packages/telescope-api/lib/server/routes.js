Meteor.startup(function () {

  Router.map(function() {

    this.route('api', {
      where: 'server',
      path: '/api/posts/:limit?',
      action: function() {
        var limit = parseInt(this.params.limit);
        this.response.write(postAPI(limit));
        this.response.end();
      }
    });

    this.route('api', {
      where: 'server',
      path: '/api/comments/:postId/:limit?',
      action: function() {
        var limit = parseInt(this.params.limit);
        var postId = this.params.postId;
        this.response.write(commentAPI(postId,limit));
        this.response.end();
      }
    });

  });

});