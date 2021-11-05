const puppeteer = require("puppeteer-core");

const takeScreenshot = require("../src/takeScreenshot.js");

module.exports = async (req, res) => {
  const settings = {
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  };

  console.log('Cook !');

  if (req.method === "POST") {
    const browser = await puppeteer.launch(settings);
    await takeScreenshot({ req, res, browser });
    await browser.close();
    return;
  }

  res.statusCode = 404;
  res.end();
};
