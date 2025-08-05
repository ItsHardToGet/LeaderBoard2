import AuthModel from "../modles/Authmodel.js"
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
const salt = bcrypt.genSaltSync(10);
const Login=async(req,res)=>{
    try{
        let {email,password}=req.body.data;
        console.log("login",req.body.data,email)
        let user=await AuthModel.findOne({email})
        if(!user){
           return  res.json({"err":1,"msg":"Enter correct email and password"})

        }
        if( bcrypt.compareSync(password, user.password)){
            let payload={
                fullName:`${user.firstName} ${user.lastName}`,
                email:user.email,
                role:user.role
            }
            // console.log("satge2")
            let token=jwt.sign(payload,process.env.CLIENT_SECRET,{expiresIn:'1h'});

          return  res.json({"err":0,"msg":"Login success","token":token});
        }else{
           return res.json({"err":1,"msg":"Enter correct email and password"})
 
        }


    }
    catch(err){
      return res.json({"err":1,"msg":"enter correct email or password"})  ; 
   

    
    }
    // res.send({"err":0,"mess":"Login Success"})
}
const Register= async (req,res)=>{
   try{
    const userData=req.body.data;
    console.log("data:",req.body.data)
    const salt = bcrypt.genSaltSync(10);
    userData.password=bcrypt.hashSync( userData.password, salt);
    const user=new AuthModel(userData);
    
    await user.save();
     res.json({"err":0,"msg":"User registered successfully"})
    }
   catch(err){
    res.send({"err":1,"msg":"enter valid email||phone details for registration "});
    console.log("err:",err);
   }
   
   
   
}
const findAll=async(req,res)=>{
try{
    const data=await AuthModel.find({"role":{$in:["Volunteer","Intern"]}})
//     const data = await AuthModel.find({
//   role: { $in: ["intern", "volunteer"] }
// });
    return res.send({"err":0,"msg":"data received in pdata","pdata":data})
}catch(e){
    return res.send({"err":1,"msg":"error occured","error":e})

}
}
const findone=async(req,res)=>{
    // console.log("new",req.body.data)
    const { id } = req.params;




 try{
    console.log("s2", id)

    const data=await AuthModel.findOne({"_id":id})
    return res.send({"err":0,"msg":"data received in pdata","pdata":data})
}catch(e){
    return res.send({"err":1,"msg":"error occured","error":e})

}   
}
export {Login,Register,findAll,findone}
