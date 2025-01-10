const express=require("express");
const cors = require("cors");

const app=express();
const option = {
  origin:(origin,callback) => {
    callback(null,true)
  }
}
app.use(cors(options));
app.use(express.json());

let studentData = [{
  name: "jothish",
  Age: 25,
  rollno: 151541
}];


app.post('/',(req,res)=>{
  studentData.push(req.body);
  console.log(req.body)
  res.send(Done);
})
const data = ["hello",123,{"key":"value"}];

app.get('/',(req,res)=>{
  res.send(studentData);
})

app.listen(3333,()=>{
  console.log("started hhg")
})           