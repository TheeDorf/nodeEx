const http = require("http");
const PORT = 5002 
// my 5000 does not work on a mac

http.createServer((req,res)=>{
    res.writeHead(200, { "content-type": "text/html"});
    res.write("Hello world");
    res.end();
})


.listen(PORT, ()=>{
    console.log(`server is listening at local host ${PORT} port`)
});