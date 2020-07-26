const Follow = require('./Follow');

class User {
  constructor(userId) {
    this.userId = userId;
    this.following = [];
  }

  getUserId() {
    return this.userId;
  }

  getFollowing() {
    return this.following;
  }

  follow(userId) {
    const follow = new Follow(userId);
    this.following.push(follow);
  }
}

module.exports = User;
