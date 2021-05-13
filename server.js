const { createServer } = require("http");
const app = require("./dist/App.js");

app.use(express.static('public'))

app.get('*', (req, res) => {
  res.sendFile(__dirname + "/public/index.html")
})

createServer((req, res) => {
  const { html } = app.render({ url: req.url });

  res.write(`
    <!DOCTYPE html>
    <div id="app">${html}</div>
    <script src="/dist/bundle.js"></script>
    <link rel='stylesheet' href='/build/bundle.css'>
  `);

  res.end();
}).listen(3000);