import Marksmodel from "../model/marks.js";

const createMarks=async(req,res)=>{
     try {
        let studentId = req.params.studentid;
        let subjectId = req.params.subjectid;

        let marks= new Marksmodel(req.body)
         marks.student=studentId
         marks.subject=studentId
        await marks.save()
        res.status(201).json({
            message:" marks created sucessfully",
            data:marks
        })

     } catch (error) {
        console.log(error)
     }
}

const getmarks=async(req,res)=>{
       let marks=await Marksmodel.find().populate('student','name').populate('subject','name')
       res.status(200).json({
         message:"Marks fetched sucessfully",
         data:marks
       })
}

export default{
    createMarks,
    getmarks
}

