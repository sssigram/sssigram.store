const express = require("express");
const instagramRouter = require("./routes/instagram");
const instagramScrapper = require("./middleware/instagramScrapper");
const app = express();
const port = 5050;

// middlewhare
app.use(express.json());
app.use(instagramScrapper.getInstagramVideo);
app.use("/instagram", instagramRouter.router);

app.listen(port, () => console.log(`server started on port ${port}!`));
