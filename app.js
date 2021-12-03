const express = require("express")
const app = express()
const mongoose = require("mongoose")
const url = "mongodb+srv://Rhythm:Rhyt0269@cluster0.nnejt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const mySchema = require('./schema');
mongoose.connect(url).then(() => console.log("connected to Database"))
app.use(express.json())
app.post("/add-new-student", async(req, res) => {
    const myname = req.body.Name;
    const mybook = req.body.book;
    const mydate = req.body.date;

    try {
        const newproject = new mySchema({
            Name: myname,
            book: mybook,
            date: mydate
        })
        const savedproject = await newproject.save()
        res.json({ "message": "Student is saved", "data": savedproject })
    } catch (err) {
        res.json(err);
    }
})

app.use("/", (req, res) => {
    //res.send("Hello");
    res.json({ "message": "Express server started" })
})

app.listen(3001, () => console.log("Express Server Strarted"))