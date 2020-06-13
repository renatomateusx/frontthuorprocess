import UTILIS_API from "./utilisAPI";

var API_HEADERS = {
  getHeader() {
    return new Promise(async(resolve, reject) => {
      try {
        var user = await UTILIS_API.GetUserSession(); 
        console.log(user);
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
