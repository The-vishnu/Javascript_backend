import express from "express";

const app = express();

app.get('/', (req, res) =>{
    res.send('server is ready');
});

const port = "3000";

app.listen(port, () =>{
    console.log(`Run on https://localhost:${port}`);
});


app.get('/userData', (req, res) =>{
    const sampaleData = [
        {
            id: 1,
            color: "red",
            value: "#f00"
        },
        {
            id: 2,
            color: "green",
            value: "#0f0"
        },
        {
            id: 3,
            color: "blue",
            value: "#00f"
        },
        {
            id: 4,
            color: "cyan",
            value: "#0ff"
        },
        {
            id: 5,
            color: "magenta",
            value: "#f0f"
        },
        {
            id: 6,
            color: "yellow",
            value: "#ff0"
        },
        {
            id: 7,
            color: "black",
            value: "#000"
        }
    ]

    res.send(sampaleData);
});

// app.get('/demy', (res))