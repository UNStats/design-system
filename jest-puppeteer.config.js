// Configure Puppeteer launch options for jest-puppeteer:
// https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#puppeteerlaunchoptions
module.exports = {
  launch: {
    // https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  }
};
