// Task 1: Basic Server Initialization & Custom Port
// Goal: Create a Node.js server using the built-in http module that listens on port 5000 instead of 3000.

// Requirements:

// Import the http module.

// Create a server that responds with a plain text message: "Welcome to my custom server!".

// Log a startup message to the terminal once the server is listening: Server is running on port 5000


// const http=require("http")

// const server=http.createServer( 
//     (req,res)=>{
       
//         res.end("Welcome to my custom serverServer is running")
//          console.log("server is running");
//     }
// );

// server.listen(5000,()=> {
//     console.log("Server is running on port 5000");
    
// });

// Task 2: Request Inspector (Exploring req)
// Goal: Practice reading properties from the incoming req object.

// Requirements:

// Build a server that listens on port 3000.

// Whenever a request comes in, print both req.url and req.method in your terminal.

// Send a dynamic response back to the browser showing what URL path was requested (e.g., Requested Path: /your-path).

