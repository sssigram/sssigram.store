const axios = require("axios");
const cheerio = require("cheerio");
const qs = require("qs");

const getInstagramVideo = async (instagramUrl) => {
  const url = `https://v3.saveig.app/api/ajaxSearch`;

  // q: "https://www.instagram.com/reels/C6mHdHxNOSb/",
  const data = {
    q: `${instagramUrl}`,
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
  // let dataAxios = [];
  let res = await axios.post(url, qs.stringify(data), { headers });
  let resData = res.data.data;
  const $ = cheerio.load(resData);
  const parentElement = $(".download-items");
  const downloadURL = parentElement
    .find(".download-items__btn")
    .find("a")
    .attr("href");
  // console.log(downloadURL);
  return downloadURL;

  // let res = await axios.post("http://localhost:3001/");
  // .then((res) => {
  //   //   console.log(res.data.data);
  //   const returnData = res.data.data;
  //   const $ = cheerio.load(returnData);
  //   const parentElement = $(".download-items");
  //   const downloadURL = parentElement
  //     .find(".download-items__btn")
  //     .find("a")
  //     .attr("href");
  //   //   console.log(downloadURL);
  //   return downloadURL;
  //   // console.log(res.data.data);
  // })
  // .catch((err) => {
  //   console.log(err);
  //   return err;
  // });
  // console.log(res);
};

exports.getInstagramVideo = getInstagramVideo;
// getInstagramVideo();
// let x = getInstagramVideo("https://www.instagram.com/reels/C6mHdHxNOSb/");
// console.log(x);
