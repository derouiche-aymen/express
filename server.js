const express =require('express')
const app=express()
const port = 4000;
const path=require('path')

var test = (req,res,next)=>{
    var date= new Date();
    if ((date.getHours() < 9||date.getHours()>17)||
        (date.getDay()==0||date.getDay()==6)){
        next(res.send('<h1>we are closed</h1>'))
    }
    else {next()}
}

app.use(test, express.static((path.join(__dirname,'html'))) )




app.listen(port, (err=>{
    if (err) {
        throw err
    }
    else {
        console.log(`SERVER IS RUNNING IN PORT ${port}`)
    }
}))
// app.get()
