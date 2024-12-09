import Marksmodel from "../model/marks.js";
import Studentmodel from "../model/student.js";


const reportCard=async(req,res)=>{
     
       try {
           
           let studentId = req.params.id;
           let student = await Studentmodel.findById(studentId)

            if(!student){
                return res.status(404).json({message:"Student not found"})      
            }

            let marks= await Marksmodel.find({student:studentId}).populate('subject','name')
            
             if(!marks.length){
                 return res.status(404).json(({message:"Mark not found"}))
             }

             let totalmarks = marks.reduce((acc,curr)=>(acc + curr.marks),0)
             let pass = marks.every((mark)=> mark.marks>=0)

             res.status(200).json({
                message:"Report card generated sucessfully",
                student:{
                    id:student._id,
                    name:student.name,
                    rollnumber:student.rollnumber
                },
                subjects:marks.map((mark)=>({
                     subject:mark.subject.name,
                     marks:mark.marks
                })),
                totalmarks,
                status:pass ? 'pass' : 'Fail'
             })

             

       } catch (error) {
         console.log(error)
       }

}

export default{
    reportCard
}