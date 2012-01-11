function ObjectId(val){
  return mongo.ObjectId(String(val));
}

function Bool(val){
  if (val === 'false'){
    return false;
  } else if (val === '0'){
    return false;
  } else {
    return Boolean(val);
  }
}

// attempt to convert the given value into a date object
function Datetime(val){
  if (val instanceof Date) {
    return val;
  }
  return new Date(val);
}

// attempt to convert the given value into an integer timestamp
function Timestamp(val){
  if (val instanceof Date){
    return val.getTime();
  } else if (typeof val == 'string'){
    return Number(val);
  } else {
    return val;
  }
}

// don't do anything to the value! HAHAHA!
function Any(val){
  return val;
}
