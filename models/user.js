import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const Schema = mongoose.Schema

const Session = new Schema({
    refreshToken: {
        type: String,
        default: "",
    }
})

const User = new Schema({
    firstName: {
        type: String,
        default: "",
    },
    lastName: {
        type: String,
        default: "",
    },
    email: {
        type: String,
        default: ""
    },
    authStrategy: {
        type: String,
        default: "local"
    },
    refreshToken: {
        type: [Session]
    },
})

User.set("toJSON", {
    transform: function(doc, ret, options) {
        delete ret.refreshToken
        return ret
    },
})

User.plugin(passportLocalMongoose)

export default mongoose.model("User", User)