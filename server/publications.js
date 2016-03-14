Meteor.publish('posts', function() {
  //return Posts.find({flagged: false, author: author});
  return Posts.find();
});
