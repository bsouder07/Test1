import {Schema, model} from "mongoose";

const userSchema = new Schema({
//Need a way to identify a user.
email: {
    type: String,
    required: true,
    unique: true,
    minlength: 4,
    maxlength: 24,  
},
//Never store a raw password string in the database
passwordHash: {
    type: String,
    required: true,
},

})

const User = model("User", userSchema)

export default User

//ss