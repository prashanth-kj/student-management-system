import mongoose from './index.js'


const marksschema=new mongoose.Schema({
      marks:{
        type:Number,
        required:true
      },
      student:{
         type:mongoose.Schema.Types.ObjectId,
         ref:"students",
      },
      subject:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"subjects",
      }
},{
    collection:'marks',
    versionKey:false
})

const Marksmodel=mongoose.model('marks',marksschema)

export default Marksmodel

