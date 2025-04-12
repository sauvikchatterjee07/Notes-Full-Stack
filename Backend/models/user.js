const mongoose =require('mongoose')
const bcrypt=require('bcrypt')
const user_Schema=new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
      },
      password: {
        type: String,
        required: true,
      }
})
//hashing password before adding to data base
user_Schema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

  
  // Method to compare passwords
  user_Schema.methods.comparePassword = function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
  };
module.exports=mongoose.model("User",user_Schema)  
