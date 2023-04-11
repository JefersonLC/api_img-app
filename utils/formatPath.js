Object.defineProperty(String.prototype, 'formatPath', {
  value: function () {
    const string = this.trim();
    return string
      .split('')
      .map((e) => (e === ' ' ? '_' : e))
      .join('');
  },
  writable: true,
  configurable: true
});
