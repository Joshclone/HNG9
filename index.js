 const express = require('express');
const cors = require('cors')
const app = express();

const PORT = process.env.PORT || 8000;
app.use(express.json());
app.use(cors())
app.get("/hng",(req,res)=>{
    res.status(200).json({
        

        
        

            slackUsername: "Nwaeze Joshua",
            backend: true,
            age: "26",
            bio: "Hi my name is Nwaeze Joshua, I am a backend developer, proficienct in  ExpressNodeJs, l want to learn more and become a skilled software developer providing scalable solutions to applications",
      
    })
})



app.listen(PORT,()=>{
    console.log(`Server is listening at port ${PORT}`);
})
