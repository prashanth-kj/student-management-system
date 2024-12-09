import Studentmodel from "../model/student.js";

const createStudent=async(req,res)=>{

       try {
           let user= await Studentmodel.findOne({email:req.body.email})
            if(!user){
                 let {name,email,rollnumber}=req.body
                 if(name && email && rollnumber){
                     let newStudent=await Studentmodel.create(req.body)
                    res.status(201).send({
                         message:"New student created sucessfully",
                         student:newStudent
                    })
                 }else{
                    res.status(400).send({
                         message:"All Data field is mandatory"
                    })
                 }
            }else{
                 req.status(400).send({
                     message:`Acoount with ${req.body.email} is already exists`
                 })
            }
       } catch (error) {
        console.log(error)
       }
}

const getStudents=async(req,res)=>{
      try {
          let allStudents= await Studentmodel.find()
          res.status(201).send({
            message:"All students fetched sucessfully",
            students:allStudents
       })

      } catch (error) {
        console.log(error)
      }
}

const getstudentbyId=async(req,res)=>{
     try {
        
          let studentId=req.params.id;

          let student= await Studentmodel.findById(studentId)
          if(student){
                
                res.status(200).json({
                    message:"Student fetched sucessfully",
                    student:student
                })

          }else{
               res.status(404).json({
                    message:"Student not found"
               })
          }

     } catch (error) {
          console.log(error)
     }
}

const editstudent=async(req,res)=>{
      try {
          let studentId=req.params.id;
          
           let student = await Studentmodel.findById(studentId)
           if(student){
                let {name,email,rollnumber}=req.body
                  
                student.name=name
                student.email=email
                student.rollnumber=rollnumber

                await student.save()

                res.status(200).json({
                    message:"Student updated sucesfully",
                    student
                })

           }
           else{
               res.status(404).json({
                     message:"Student not found"
               })
           }
      } catch (error) {
          console.log(error)
      }
}

const deletestudent=async(req,res)=>{
  try {
     let studentId=req.params.id
     
     if(studentId){
          let deletestudent = await Studentmodel.deleteOne({_id:studentId})

          res.status(200).json({
               message:"Student deleted sucessfully"
          })
     }else{
          res.status(404).json({
               message:"Student id not found"
          })
     }

       
  } catch (error) {
     console.log(error)
  }
}

export default {
    createStudent,
    getStudents,
    getstudentbyId,
    editstudent,
    deletestudent
}