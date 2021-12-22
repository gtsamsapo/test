var mongoose = require('mongoose');
var i = 0;
var s = 'mystring';
var i;
for (i = 0; i < s.length; i = i + 1) {
  console.log(s.charAt(i));
}
module.exports = mongoose.model('Expense', {
    data: {
        type: Object,
        default: {}
    }
});
