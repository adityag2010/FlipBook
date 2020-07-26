class Follow {
  constructor(userId) {
    this.userId = userId;
    this.timestamp = Date.now();
  }

  getUserId() {
    return this.userId;
  }

  getTimestamp() {
    return this.timestamp;
  }
}

module.exports = Follow;
