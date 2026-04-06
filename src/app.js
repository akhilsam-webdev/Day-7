const express = require("express");
const noteModel = require("./models/notes.model");

const app = express();
app.use(express.json());

//post api
app.post("/note", async (req, res) => {
  const { titel, dis } = req.body;
  const note = await noteModel.create({
    titel,
    dis,
  });

  res.status(201).json({
    msg: "note created susscefully",
    note,
  });
});

//get
app.get("/note",async(req,res)=>{
    const note = await noteModel.find()

    res.status(200).json({
        msg:"fetched all notes",
        note
    })

})

module.exports = app;
