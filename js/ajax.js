
const axios = require("axios");

class Ajax {
  static echo(data) {
    return new Promise((resolve, reject) => {
      if (data) {
        resolve(data);
      }
      else {
        reject(new Error());
      }
    });
  }

  static async get() {
    try {
      const response = await axios.get("https://yesno.wtf/");
      const { answer, forced, image } = response.data;
      return response.data;
    }
    catch(error) {

    }
  }
}

module.exports = Ajax;
