const args = require("minimist")(process.argv.slice(2));

//这个是打包的模块是哪一个
const target = args._[0] || "reactivity";
const format = console.log(args);
