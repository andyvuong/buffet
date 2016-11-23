// we need to pass in one mongoose instance to each model
module.exports = function(mongoose) {
    require('./student')(mongoose);
};