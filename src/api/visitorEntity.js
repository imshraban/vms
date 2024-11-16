import axios from "axios";
import { APIKeys } from "../enum/key";

const API_URL = "//z-pass.in/visitor_details";

class VisitorEntity {
  getAllVisitor() {
    return axios
      .get(`${API_URL}/readAll.php`, {
        headers: {
          "X-API-Key": APIKeys.X_API_KEY,
        },
      })
      .then((response) => response.data)
      .catch((error) => {
        console.error("Error fetching visitor data:", error);
        throw error;
      });
  }

  saveVisitor(visitorData) {
    return axios
      .post(`${API_URL}/add.php`, visitorData, {
        headers: {
          "X-API-Key": APIKeys.X_API_KEY,
        },
      })
      .then((response) => response.data)
      .catch((error) => {
        console.error("Error saving visitor data:", error);
        throw error;
      });
  }

  updateVisitor(contactNumber, checkOutTime, isCheckedOut) {
    return axios
      .put(
        `${API_URL}/update.php?contact_number=${contactNumber}`,
        {
          check_out_time: checkOutTime,
          is_checked_out: isCheckedOut,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-API-Key": APIKeys.X_API_KEY,
          },
        }
      )
      .then((response) => response.data)
      .catch((error) => {
        console.error("Error updating visitor data:", error);
        throw error;
      });
  }
}

export default new VisitorEntity();
