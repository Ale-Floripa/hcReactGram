const mongoose =  require("mongoose");
const { Schema } = mongoose;
ObjectId = mongoose.Schema.Types.ObjectId;

const photoSchema = new Schema (
    {
        image: String,
        title: String,
        likes: Array,
        comments: Array,
        userId: {String, ObjectId},
        userName: String,
    },
    {
        timestamps: true,
    }
);

const Photo = mongoose.model("Photo", photoSchema);

module.exports = Photo;