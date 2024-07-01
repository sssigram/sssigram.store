// const { SitemapStream, streamToPromise } = require("sitemap");
// const { createWriteStream } = require("fs");
// const { resolve } = require("path");
import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import { resolve } from "path";

// Define your static routes
const links = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/video", changefreq: "weekly", priority: 0.7 },
  { url: "/reel", changefreq: "monthly", priority: 0.7 },
  { url: "/story", changefreq: "monthly", priority: 0.7 },
  { url: "/photo", changefreq: "monthly", priority: 0.7 },
  { url: "/igtv", changefreq: "monthly", priority: 0.7 },
  { url: "/faq", changefreq: "monthly", priority: 0.7 },
  { url: "/about", changefreq: "monthly", priority: 0.7 },
  // Add other routes here
];

async function generateSitemap() {
  const sitemap = new SitemapStream({
    hostname: "https://storiesig.xyz/",
  });
  const writeStream = createWriteStream(resolve("public", "./sitemap.xml"));

  sitemap.pipe(writeStream);
  links.forEach((link) => sitemap.write(link));
  sitemap.end();

  await streamToPromise(sitemap);
  console.log("Sitemap generated successfully!");
}

generateSitemap().catch(console.error);
