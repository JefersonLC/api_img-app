Object.defineProperty(String.prototype, 'lower', {
  value: function () {
    const string = this.trim();
    return string.toLowerCase();
  },
  writable: true,
  configurable: true
});
