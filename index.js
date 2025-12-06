import express from "express";

const app = express();

//MiddleWare
app.use(express.json())  //Frontend can access the backend Data

app.post('/add-user',(req,res)=>{
  let data = req.body; //data passing from the frontend can be accessed by this.

  console.log(data); //Output : The Particular data
  //if You skip the above app.use(express.json) Then 
  //The Communication between the frontend and the backend is restricted
 //The Data will give undefined as output.

  // Logic to add the data into our database
  res.send("Data Added to the database");
});

app.get("/", (req, res) => {
  res.end("api success");
});

app.listen(3000, () => {
  console.log(`Server is running at ${3000}`);
});
