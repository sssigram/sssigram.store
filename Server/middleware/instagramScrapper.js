const axios = require("axios");
const cheerio = require("cheerio");
const qs = require("qs");

const getInstagramVideo = async (req, res, next) => {
  const url = `https://v3.saveig.app/api/ajaxSearch`;
  const data = {
    q: `${req.body.url}`,
    t: "media",
    lang: " en",
  };
  const headers = {
    Accept: "*/*",
    "Accept-Encoding": "gzip, deflate, br, zstd",
    "Accept-Language": "en-US,en;q=0.9,ur;q=0.8",
    // "Content-Length": "74",
    "Content-Type": "application/x-www-form-urlencoded",
    Origin: "https://saveig.app",
    Priority: "u=1, i",
    Referer: "https://saveig.app/",
    "Sec-Ch-Ua":
      '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
    "Sec-Ch-Ua-Mobile": "?0",
    "Sec-Ch-Ua-Platform": '"Linux"',
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-site",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
  };
  let response = await axios.post(url, qs.stringify(data), { headers });
  let resData = response.data.data;
  const $ = cheerio.load(resData);
  const parentElement = $(".download-items");
  const downloadURL = parentElement
    .find(".download-items__btn")
    .find("a")
    .attr("href");
  res.body = { downloadURL: downloadURL };
  next();
};

exports.getInstagramVideo = getInstagramVideo;
