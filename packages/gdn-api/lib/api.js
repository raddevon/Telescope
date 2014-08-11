HTTP.publish({name: 'api/posts'}, function(data) {
    // this.userId, this.query, this.params
    return Posts.find({});
  });