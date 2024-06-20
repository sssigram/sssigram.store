const express = require("express");
const instagramRouter = require("./routes/instagram");
const instagramScrapper = require("./middleware/instagramScrapper");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 5050;

// middlewhare
// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(instagramScrapper.getInstagramVideo);
app.use(cors());
app.use("/instagram", instagramRouter.router);

app.listen(port, () => console.log(`server started on port ${port}!`));
