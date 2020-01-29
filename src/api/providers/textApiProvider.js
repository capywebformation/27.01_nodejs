// src/api/providers/textApiProvider.js

const request = require('request');
const baseUrl = "https://www.randomtext.me/api"

exports.getRandomText = () => {
  return new Promise((resolve, reject) => {

    request(baseUrl + "/lorem", (error,response, body) => {
      try {
        body = JSON.parse(body);
        resolve(body.text_out);
      } catch (e) {
        console.log(e)
        reject(false)
      }
    })

  });
}
