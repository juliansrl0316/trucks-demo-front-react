import axios from "axios";

class AppService {
  constructor() {
    axios.defaults.baseURL = "https://trucksapi.herokuapp.com";
  }

  sendGETRequest = async (query) => {
    const response = await axios.get(query);
    if (response && response.data) {
      return { ...response.data, networkCode: response.status };
    }
  };

  getAllRoutes = () => {
    return this.sendGETRequest("/api/trucks/");
  };

}

const myService = new AppService();
export default myService;
