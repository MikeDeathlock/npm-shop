const express = require("express");
const shopRouters = require("./routes/shoprouts");
const PORT = 8000;
const app = express();

app.use(shopRouters);

// app.use("/about",(req, res, next) => {
//     // console.log("Request => ", req)
//     res.send("<h1>About page!!!!!</h1>");
// })

// app.use("/resources",(req, res, next) => {
//     res.send("<h1>Resources page!!!!!</h1>");
// })

// app.use("/contact",(req, res, next) => {  
//     res.send("<h1>Contact page!!!!!</h1>");
// })

// app.use("/careers",(req, res, next) => {  
//     res.send("<h1>Careers page!!!!!</h1>");
// })

// app.use("/vacancies",(req, res, next) => {
//     res.send("<h1>Vacancies page!!!!!</h1>");
// })

// app.use("/",(req, res, next) => {    
//     res.send("<h1>Home page!!!!!</h1>");
// })

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));