const polyfills = () => {
  // BigInt to JSON method
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
};

export default polyfills;
