import express from "express"

const app = express()

app.get("/", (req, res) => {
    res.json("Backend is working")
})

app.listen(5001, () => {
    console.log("Listening on port 5001...")``
})