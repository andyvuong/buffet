module.exports = function(mongoose) {
    var studentSchema = mongoose.Schema({
        email: String,
        class: Number
    });
    
    return mongoose.model('Student', studentSchema);
}