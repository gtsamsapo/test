var mongoose = require('mongoose');
var i = 0;
var s = 'mystring';
var i;
for (i = 0; i < s.length; i = i + 1) {
  console.log(s.charAt(i));
}


var n = 123;
var s = '123';

if (n == s) {
  alert('The variables were equal');
}

if (n === s) {
  alert('The variables were identical');
}

module.exports = mongoose.model('Expense', {
    data: {
        type: Object,
        default: {}
    }
});
