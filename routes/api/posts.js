const express = require("express");
const router = express.Router();

//Post model
const Post = require("../../models/Post");
//User model
const User = require("../../models/User");

// @route   POST api/posts/comment/:id
// @desc    Add comment to post
// @access  Public
router.post("/comment/:id", (req, res) => {
  //either store the user id in client side
  //use the id or use the email
  console.log("adding comment");
  User.findOne({
    _id: req.body.id
  }).then(usr => {
    Post.findById(req.params.id).then(post => {
      const newComment = {
        text: req.body.text,
        name: req.body.name,
        avatar: req.body.avatar,
        // id either from request or from the
        // matched email from the dbdoc
        user: usr._id
      };

      // Add to comments array
      post.comments.unshift(newComment);

      // Save
      post.save().then(post => res.json(post));
    });
  });
});

module.exports = router;
