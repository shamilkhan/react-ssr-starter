import fs from 'fs';
import path from 'path';
import express from 'express';
import React from "react";
import { renderToNodeStream } from "react-dom/server";
import AppReact from "./dist/index";

const app = express();

app.use(express.static("./dist"));

app.get("/", (req, res) => {
  // fs.readFile("./dist/style.css", "utf-8", (err, data) => {
    console.log("data is", data);
    res.write('<html><head>' + `<link rel="stylesheet" href="/style.css"></link>` + '</head><body><div id="root">')
    // Render the frontend React app
    const stream = renderToNodeStream(<AppReact />);
    // Pipe that HTML to the response
    stream.pipe(res, { end: false });
    // When React is finished, clean up the dangling HTML tags
    stream.on('end', () => res.end('</div><script src="/hydrate.js"></script></body></html>'))
  // });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is listening");
});