
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'


const userDataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },

    mobile: {
        type: Number,
        required: true,
    },

    address: {
        type: String,
        required: true,
    },
    
    isAdmin: {
        type : Boolean,
        default : false,
    },

    firmid : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'firmData',
    }],

    linkedbanks : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'userbranch',
    }],

    slips:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'userslip'
    }]

},
{
    timestamp: true
});

userDataSchema.pre('save', async function(next){
    if(this.isModified('password')){
        const salt = await bcrypt.genSalt(10)
        this.password = await bcrypt.hash(this.password, salt)
        
        
    }
    next();
})

// // Verify The Password
// userDataSchema.methods.isPasswordMatch = async function (enteredPassword){
//     return await bcrypt.compare(enteredPassword,this.password)
// }

const UserData = mongoose.model("userData", userDataSchema);
export default UserData;