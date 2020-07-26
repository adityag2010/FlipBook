const User = require('../models/User');
const Post = require('../models/Post');

class FlipBookService {
  constructor() {
    this.users = []; // Store as hashmap
    this.posts = [];
  }

  // Check if userId is unique
  isValidUserId(userId) {
    const existingUser = this.users.find((user) => user.getUserId() === userId);
    return existingUser ? false : true;
  }

  // Check if user exists
  isValidUser(userId) {
    const existingUser = this.users.find((user) => user.getUserId() === userId);
    return existingUser ? true : false;
  }

  // Signup new user
  signUp(userId) {
    if (this.isValidUserId(userId)) {
      const user = new User(userId);
      this.users.push(user);
      console.log(`${userId} signed up successfully!`);
    } else {
      console.log(`Username ${userId} already exists!`);
    }
  }

  // Show all users
  showUsers() {
    if (this.users.length) {
      this.users.forEach((user) => {
        console.log(user.getUserId())
      });
    } else {
      console.log('No Users!');
    }
  }

  // Create new post
  post(userId, postText) {
    if (this.isValidUser(userId)) {
      const post = new Post(userId, postText);
      this.posts.unshift(post);
      console.log('Post added successfully!');
    } else {
      console.log(`${userId} is not an existing user!`);
    }
  }

  // Follow user
  follow(followerUserId, followingUserId) {
    if (followingUserId === followerUserId) {
      console.log('Can\'t follow yourself!');
      return;
    }
    if (this.isValidUser(followerUserId)) {
      const follower = this.users.find((user) => user.getUserId() === followerUserId);
      if (this.isValidUser(followingUserId)) {
        follower.follow(followingUserId);
        console.log('User followed successfully');
      } else {
        console.log(`${followingUserId} is not an existing user!`);
      }
    } else {
      console.log(`${followerUserId} is not an existing user!`);
    }
  }

  // Show newsfeed
  showNewsFeed(userId) {
    const user = this.users.find((user) => user.getUserId() === userId);
    const followingUsers = user.getFollowing();
    this.posts.forEach((post) => {
      if (post.getUserId() === userId) {
        console.log(post.getPost());
      } else {
        const followingUser = followingUsers.find((followingUser) => followingUser.getUserId() === post.getUserId());
        if (post.getTimestamp() > followingUser.getTimestamp()) {
          console.log(post.getPost());
        }
      }
    });
  }
}

module.exports = FlipBookService;
