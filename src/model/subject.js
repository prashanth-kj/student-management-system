import mongoose from './index.js'


const subjectschema= new mongoose.Schema({
     name:{
        type:String,
        required:true
     }
},{
    collection:'subjects',
    versionKey:false
})

const Subjectmodel= mongoose.model('subjects',subjectschema)
export default Subjectmodel