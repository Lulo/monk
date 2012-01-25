var mongo = require('mongojs');

module.exports.ObjectId = function (val) {
  //return String(val);
  return mongo.ObjectId(String(val));
}

module.exports.Bool = function (val) {
  if (val === 'false'){
    return false;
  } else if (val === '0'){
    return false;
  } else {
    return Boolean(val);
  }
}

// attempt to convert the given value into a date object
module.exports.Datetime = function (val) {
  if (val instanceof Date) {
    return val;
  }
  return new Date(val);
}

// attempt to convert the given value into an integer timestamp
module.exports.Timestamp = function (val) {
  if (val instanceof Date){
    return val.getTime();
  } else if (typeof val == 'string'){
    return Number(val);
  } else {
    return val;
  }
}

// don't do anything to the value! HAHAHA!
module.exports.Any = function (val) {
  return val;
}
