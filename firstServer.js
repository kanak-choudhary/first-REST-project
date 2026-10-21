const http=require("http")
const server=http.createServer(  // mathod to crete a server

(req,res)=>{
console.log(" Server start congrass.."); 

if(req.url==="/"){
    res.end( `<h1> Hello i'm home </h>`)
}

else if(req.url==="/about"){
    res.end("About page")
}

else if(req.url==="/contact"){
    res.end("Contact page")
}

}
) 
server.listen(3000, ()=>{
    console.log("server is running");
    
})

