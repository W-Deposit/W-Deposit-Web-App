import axios from "axios";

class AuthenticationService {
  signin = async (username:String, password:String) => {
      try {
          const response = await axios.post("/api/auth/signin", { username, password });
          if (response.data.accessToken) {
              localStorage.setItem("user", JSON.stringify(response.data));
          }
          return response.data;
      } catch (err) {
          console.log(err);
          throw err;
      }
  }

  signOut() {
    localStorage.removeItem("user");
  }

  register = async(firstname: any, lastname: any, username: any, email: any, password: any) => {
    return axios.post("/api/auth/signup", {
      firstname,
      lastname,
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.stringify(localStorage.getItem('user'));;
  }
}

export default new AuthenticationService();