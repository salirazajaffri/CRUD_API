const mongoos =require('mongoose');
const Schema = mongoos.Schema;

let UserSchema = new Schema(
    {

        username:{type:String, required: true},
        password:{type:String , required:true}

    }
);

module.exports=mongoos.model('User',UserSchema);