import Subjectmodel from "../model/subject.js";

const createSubject=async(req,res)=>{
     try {
        
        let {name}=req.body
         if(name){
            let newSubject= await Subjectmodel.create(req.body)
            res.status(201).send({
                message:"new subject created sucessfully",
                Subject:newSubject
            })
         }else{
             res.status(400).send({
                 message:"subject name is required"
             })
         } 

     } catch (error) {
        console.log(error)
     }
}

const getSubjects=async(req,res)=>{
    try {
        let subjects= await Subjectmodel.find()
         res.status(200).send({
             message:"get All Subjects fetched sucessfully",
             Allsubjects:subjects
         })
    } catch (error) {
        console.log(error)
    }
}

export default {
     createSubject,
     getSubjects
}