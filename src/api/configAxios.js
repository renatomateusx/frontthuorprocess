var API_HEADERS = {
  getHeader() {
    var user = JSON.parse(sessionStorage.getItem("user"));
    var header = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        Authorization: "Bearer " + user.token
      }
    }
    return header;
  }
}
export default API_HEADERS 
