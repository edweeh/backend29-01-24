const express = require("express");
const cors = require("cors");
const signupRouter = require('./routes/signupRoute');
const adminRouter = require('./routes/adminRoute');
const loginRouter = require('./routes/loginRoute');
const db = require("./Connection/Database");

const app = express(); // Removed "new" before express

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/', (request, response) => {
    response.send("hi database");
});

app.use("/signup", signupRouter);
// app.use("/login", loginRouter);

app.use("/admin", adminRouter);


// app.use("/login", loginRouter);



app.listen(3001, (request, response) => { // Changed from (3000, (request, response) => ...) to (3000, () => ...)
    console.log("Server is running on port 3001");
});
