import mongoose from './index.js';

const studentschema= new mongoose.Schema({
      name:{
         type:String,
         required:true
      },
      email:{
         type:String,
         required:true
      },
      rollnumber:{
         type:String,
         required:true,
         unique:true
      }
},{
    collection:'students',
    versionKey:false
})

const Studentmodel= mongoose.model('students',studentschema)
export default Studentmodel