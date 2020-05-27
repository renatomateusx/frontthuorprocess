import UTILIS_API from "./utilisAPI";

var API_HEADERS = {
  async getHeader() {
    return new Promise(async(resolve, reject) => {
      try {
        var user = await UTILIS_API.GetUserSession(); // JSON.parse(sessionStorage.getItem("user"));
        var header = {
          headers: {
            'Access-Control-Allow-Origin': '*',
            Authorization: "Bearer " + user.token
          }
        }
        resolve(header);
      }
      catch (error) {
        reject(error);
      }
    })

  }
}
export default API_HEADERS 
