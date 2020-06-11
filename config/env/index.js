const resolve = (path,fileName) => path + '/' + fileName;

const dev = resolve(__dirname,'dev-env.js');
const prod = resolve(__dirname,'prod-env.js');
const test = resolve(__dirname,'test-env.js');
const dist = './config'

module.exports = {
  dev,
  prod,
  test,
  dist
}