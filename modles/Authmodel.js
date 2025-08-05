import mongoose from 'mongoose';
const {Schema} =mongoose;
const authSchema = new mongoose.Schema({
    firstName:{
        type :String,
        required:true

    },
    lastName:{
        type :String,
        required:true

    },
    
    email:{
        type :String,
        required:true,
        unique:true

    },
    password:{
        type :String,
        required:true

    },
    mobile:{
        type :String,
        match: /^[1-9][0-9]{9}$/,
        required:true

    },
role:{
    type :String,
    required:true,
    default:'Volunteer'
}},{
        timestamps: true 
    }
)
const AuthModel =mongoose.model("assignment",authSchema);
export default AuthModel;