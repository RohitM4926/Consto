var express=require('express');
var app=express();

app.get("/",(req,res)=>{
    res.send(
        "<h1> Contoso </h1>"
        +"<hr/>"
        +"<h3> Contoso is a multinational company has their 12 Offices all over world</h3>"
        +"</br>"
        +"<p>Contoso has public Cloud subscription to use it as Infrastructure as a Service (I-a-a-S) and Platform As A service</p>"
    
        
    );
});
app.get("/contactus",(req,res)=>{
    res.send(
        "<h1> contoso </h1>"
        +"<hr/>"
        +"<h3>Our Smart team </h3>"
        +"<ol>"
        +"<li> chief mentor: Rohit mangale </li>"
        +"<li> NO:223171 </li>"
        +"<li> IACSD Student </li>"


    );
});


var server=app.listen(9000);
console.log("contoso running on 9000 port ");