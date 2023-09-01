import jwt_decode from "jwt-decode";

export function isCookieExpired() {

    function check_cookie_name(name) {

        const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        if (match) {
            // console.log(match)
            return match
        }
        else {
            return false
        }   
    }
    
    const token = check_cookie_name("jwtTk")
    if (!token) {
        return false
    }

    let decodedToken = jwt_decode(`${token}`);
    // console.log("Decoded Token", decodedToken);
    let currentDate = new Date();
    
    // JWT exp is in seconds
    if (decodedToken.exp * 1000 < currentDate.getTime()) {
    //   console.log("Token expired.");
      return true
    } else {
    //   console.log("Valid token");   
      return false
    }

}
