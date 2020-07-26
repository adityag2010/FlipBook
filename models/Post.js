const uuidv4 = require('uuid/v4');
const moment = require('moment');

class Post {
  constructor(userId, text) {
    this.id = uuidv4();
    this.userId = userId;
    this.text = text;
    this.timestamp = Date.now();
    this.likes = [];
  }

  getId() {
    return this.id;
  }

  getUserId() {
    return this.userId;
  }

  getText() {
    return this.text;
  }

  getTimestamp() {
    return this.timestamp;
  }

  getPost() {
    const post = `
      id: ${this.id}\n
      ${this.text}\n
      ~ ${this.userId} at ${moment(this.timestamp).format('YYYY-MM-DD hh:mm A')}, ${this.likes.length} likes
    `;
    return post;
  }

  likePost(userId) {
    this.likes.push(userId);
  }
}

module.exports = Post;
