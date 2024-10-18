express = require("express");
app =  express()

app.get("/",(req,res)=>
{
	res.sendFile("./src/index.html",{root:__dirname})
})

app.get("/index.css", (req, res) => {
	res.sendFile("./src/index.css",{root:__dirname})
})

app.get("/index.js", (req, res) => {
	res.sendFile("./src/index.js",{root:__dirname})
})

app.listen(3000, () => {
	console.log("Listening on port 3000")
})