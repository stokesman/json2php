// Generated by CoffeeScript 2.6.1
var json2php;

json2php = function(obj) {
  var i, result;
  switch (Object.prototype.toString.call(obj)) {
    case '[object Null]':
      result = 'null';
      break;
    case '[object Undefined]':
      result = 'null';
      break;
    case '[object String]':
      result = "'" + obj.replace(/\\/g, '\\\\').replace(/\'/g, "\\'") + "'";
      break;
    case '[object Number]':
    case '[object Boolean]':
      result = obj.toString();
      break;
    case '[object Array]':
      result = 'array(' + obj.map(json2php).join(', ') + ')';
      break;
    case '[object Object]':
      result = [];
      for (i in obj) {
        if (obj.hasOwnProperty(i)) {
          result.push(json2php(i) + " => " + json2php(obj[i]));
        }
      }
      result = "array(" + result.join(", ") + ")";
      break;
    default:
      result = 'null';
  }
  return result;
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = json2php;
  // Not that good but usefull
  global.json2php = json2php;
}
