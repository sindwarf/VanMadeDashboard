exports.get = () => (
  Promise.resolve('server response in models')
);

exports.save = (weatherObj) => {
  console.log('weatherObj', weatherObj);
};
