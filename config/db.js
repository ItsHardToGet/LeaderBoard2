import mongoose from 'mongoose';
// const URL='mongodb+srv://akanksha1235nikkie:g8eP0HEPJAI4QyGV@cluster1.mjeqcqv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1/Assignment'

export const database_connectivity=async()=>{
try{
    await mongoose.connect(process.env.URL)
    console.log("db connected")
}
catch(err){
    console.log("db not connected")
}


}