const express = require('express');
const router = express.Router();

//var msg="test msg"

const pendingTask = ["Learning Java at morning", "Dynamic Programming at 8:00 pm"];
const complete=[];

//renderring ejs file,which is stored in parentFolderOfThisProject/views
router.get('/', async (req, res) => {         
//passing pendingTask array in ejs file
await res.render('To-do-webApp',{pendingTask});

});

/*
router.get('/msg', (req, res) => {         
    res.send('test msg');
    });
*/

//adding new task using this api,which is being consumed by ejs file
router.post('/add_task', async (req, res) => { 
           
    const newTask =await req.body.newtask;   
        
    pendingTask.push(newTask); 
    console.log("Task Added: "+pendingTask);  
    
    res.redirect('/');   
     });

//removing selected task from array object using below api
router.post('/remove_task',async (req, res) =>{
        //console.log("into remove task ")
        
        const completeTask =await req.body.check;
        console.log("selected checkbox task  is: "+completeTask);

    if (typeof completeTask === "string") {
            //    console.log("to remove single element")       
       complete.push(completeTask);
       pendingTask.splice(pendingTask.indexOf(completeTask), 1);
    } 
    else if (typeof completeTask === "object") { 
       //        console.log("for multiple elements")

        for (var i = 0; i < completeTask.length; i++) { 
                      
        complete.push(completeTask[i]);
        pendingTask.splice(pendingTask.indexOf(completeTask[i]), 1); 
        }  
    }
    
       res.redirect("/");       
       });
       
       
module.exports = router;