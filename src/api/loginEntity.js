import axios from "axios";
import { APIKeys } from "../enum/key";

const API_URL = "//z-pass.in/user";

class loginEntity {
  async loginUser(username, password) {
    const requestBody = {
      username: username,
      password: password,
    };

    const headers = {
      "X-API-Key": APIKeys.X_API_KEY,
      "Content-Type": "application/json",
    };

    try {
      const response = await axios.post(`${API_URL}/login.php`, requestBody, {
        headers: headers,
      });
      return response.data;
    } catch (error) {
      console.error("Error during login:", error);
      throw error;
    }
  }

  async createUser(requestBody) {
    const headers = {
      "X-API-Key": APIKeys.X_API_KEY,
      "Content-Type": "application/json",
    };

    try {
      const response = await axios.post(`${API_URL}/create.php`, requestBody, {
        headers: headers,
      });
      return response.data;
    } catch (error) {
      console.error("Error during signup:", error);
      throw error;
    }
  }
}

export default new loginEntity();
