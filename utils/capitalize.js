Object.defineProperty(String.prototype, 'capitalize', {
  value: function () {
    const string = this.trim();
    return string.charAt(0).toUpperCase() + string.slice(1);
  },
  writable: true,
  configurable: true
});
