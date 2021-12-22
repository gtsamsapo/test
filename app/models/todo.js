var mongoose = require('mongoose');
var i = 0;
module.exports = mongoose.model('Expense', {
    data: {
        type: Object,
        default: {}
    }
});
