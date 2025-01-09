function hi() {
    console.log("Hello World!");
  }
  hi();
  const fetch = require("node-fetch");
  const cheerio = require("cheerio");
  class BingApi {
    constructor(_0x25601e) {
      this.cookie = _0x25601e;
      this.headers = {
        'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:120.0) Gecko/20100101 Firefox/120.0",
        'Accept': "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
        'Accept-Language': "en-US,en;q=0.5",
        'Content-Type': "application/x-www-form-urlencoded",
        'Alt-Used': "www.bing.com",
        'Upgrade-Insecure-Requests': '1',
        'Sec-Fetch-Dest': "document",
        'Sec-Fetch-Mode': "navigate",
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-User': '?1',
        'Cookie': "_U=" + _0x25601e + ';',
        'X-Forwarded-For': '20.' + this.getRandomNum() + '.' + this.getRandomNum() + '.' + this.getRandomNum()
      };
    }
    async ["createImages"](_0x399a64, _0x6daa4f) {
      try {
        const _0x3c1660 = 'q=' + encodeURIComponent(_0x399a64);
        let _0x1ed021 = await this.getCredits();
        if (!_0x1ed021) {
          _0x1ed021 = 0x0;
        }
        let _0x77d404 = await this.sendRequest(_0x1ed021 > 0x0 ? _0x6daa4f : true, _0x3c1660);
        if (_0x77d404.status === 0xc8) {
          const _0x2c7991 = await _0x77d404.text();
          const _0x2e0f23 = cheerio.load(_0x2c7991);
          const _0x4d7077 = _0x2e0f23(".gil_err_img.rms_img").length;
          if (!_0x6daa4f && _0x1ed021 > 0x0 && _0x2e0f23("#gilen_son").hasClass("show_n")) {
            throw "Dalle-3 is currently unavailable due to high demand";
          } else {
            if (_0x2e0f23('#gilen_son').hasClass('show_n') || _0x4d7077 === 0x2 && _0x1ed021 > 0x0 && _0x6daa4f) {
              throw "Slow mode is currently unavailable due to high demand";
            } else {
              if (_0x4d7077 === 0x2) {
                throw "Invalid cookie";
              } else {
                if (_0x4d7077 === 0x4) {
                  throw "Prompt has been blocked";
                } else {
                  throw "Unknown error";
                }
              }
            }
          }
        }
        const _0x3ed094 = _0x77d404.headers.get("x-eventid");
        return await this.retrieveImages(_0x3ed094);
      } catch (_0x3d2c9c) {
        console.log("error is " + _0x3d2c9c);
      }
    }
    async ["getCredits"]() {
      const _0x15ca4e = await fetch("https://www.bing.com/create", {
        'headers': this.headers,
        'method': 'GET',
        'mode': "cors"
      });
      const _0x24fbb5 = await _0x15ca4e.text();
      const _0x26b4da = cheerio.load(_0x24fbb5);
      return _0x26b4da("#token_bal").text();
    }
    ["getRandomNum"]() {
      return Math.floor(Math.random() * 0xfe) + 0x1;
    }
    async ['sendRequest'](_0x52f869, _0xd5f955) {
      try {
        const _0x3bb287 = await fetch("https://www.bing.com/images/create?" + _0xd5f955 + "&rt=" + (_0x52f869 ? '3' : '4'), {
          'headers': this.headers,
          'method': "POST",
          'mode': 'cors',
          'redirect': "manual"
        });
        return _0x3bb287;
      } catch (_0x26f45c) {
        console.log("Error in sendRequest:", _0x26f45c);
      }
    }
    async ['retrieveImages'](_0x29479f) {
      try {
        while (true) {
          const _0x340ade = await fetch("https://www.bing.com/images/create/async/results/1-" + _0x29479f, {
            'headers': this.headers,
            'method': 'GET',
            'mode': 'cors'
          });
          const _0x328737 = await _0x340ade.text();
          if (_0x328737.includes("\"errorMessage\":\"Pending\"")) {
            throw "Error occurred";
          }
          let _0x3468ff = [];
          if (_0x328737 === '') {
            await new Promise(_0x2b1f75 => setTimeout(_0x2b1f75, 0x1388));
            continue;
          }
          const _0x19e6a5 = cheerio.load(_0x328737);
          for (let _0x79ff02 = 0x0; _0x79ff02 < _0x19e6a5(".mimg").length; _0x79ff02++) {
            const _0x44c0b5 = _0x19e6a5(".mimg")[_0x79ff02].attribs.src;
            const _0x122457 = _0x44c0b5.slice(0x0, _0x44c0b5.indexOf('?'));
            _0x3468ff.push(_0x122457);
          }
          return _0x3468ff;
        }
      } catch (_0x56efa3) {
        console.log("Error in retrieveImages: " + _0x56efa3);
      }
    }
  }
  const apikyst = ["1-8CNXA-k5mm0ruZAUfVI14pAtOvuHOVCTxWg3u6SsBeT4u9FCX5GLLNhFhMDFMEGoRkGPrhbwByZ9l-W5RpnCMVcXqv3d-eSkqB2jyOj7Ib2HnvF9qN1DeXNXVfrTp4um633acUvBwVDVBRBHDnVKRqfbcB_giDh_Yr3d0hIC5dgpM4sU-VgPk-h5F8R6Rlby5Qpdo4RGKeCtMpKlzyBDA", "1WdAN6NWWReTpe8bUwYzaxi1pd4ftHnVlnnW1cWoheoYgBA12UUrWG4BIi8ccOKMN3nWt1yZeDDJJugsje9Bw-k6i2yFNOHLuC9NlCjBtmZhxmcgYwIKypNCfFC2WWwWXHqbl5mLsdA-dIw9lHEXTBrF2sxPHPVBmnvZlAJKUiQ6WZrrbP28V4rSDdovN6otPA6VfLpVSwAJ7DYuLHwVIZg", "1ttZrlV0EfkbC3IXLYJrSExXotu4nothyxA6tFzP_N4Opx-bkeE3HckcDhJaN-Yl7hdAEm5hnvf9X52aT30ymsgefhXcEFCQCR15GZwumOZy3YXBTrjPwx0dqP8OC1hkU8PwVHFi3hNJfWy6KZ5fhQiTgs3wPL_1nIWRwEpFLJ1BFyOkLVC5SelRk4Msq0R5t1DP3HSAPLz7Pwc9o_iwmow"];
  const apikeybing = apikyst[Math.floor(apikyst.length * Math.random())];
  module.exports = {
    'BingApi': BingApi,
    'apikeybing': apikeybing
  };