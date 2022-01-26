import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let gif = new Schema({
    url: {
        type: String,
    },
    created_at: {
        type: Date
    }
});


export default mongoose.model("gif", gif);