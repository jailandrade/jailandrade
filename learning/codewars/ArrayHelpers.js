Array.prototype.square = function() {
  return this.map(function(num){
    return num * num;
  });
}

Array.prototype.cube = function() {
  return this.map(function(num){
    return num * num * num;
  });
}

Array.prototype.average = function() {
  if (!this) { return NaN; }
  if (this.length < 2 ) { return 'Wrong average'; }
  var a = 0;
  this.forEach(function(entry){
    a += entry;
  });
  return a / this.length;
}

Array.prototype.sum = function() {
  var s = 0;
  this.forEach(function(entry){
    s += entry;
  });
  return s;
}

Array.prototype.even = function() {
  var e = [];
  this.forEach(function(entry){
    if (entry % 2 == 0 ) {
      e.push(entry);
    }
  });
  if (e) {
    return e;
  } else { return 'Wrong result for even()'; }
}

Array.prototype.odd = function() {
  var o = [];
  this.forEach(function(entry){
    if (entry % 2 != 0 ) {
      o.push(entry);
    }
  });
  if (o) {
    return o;
  } else { return 'Wrong result for odd()'; }
}
