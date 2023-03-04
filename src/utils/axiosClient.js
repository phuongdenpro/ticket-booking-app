import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const base_url = "https://ticket-booking-server-production.up.railway.app/";
const axiosClient = axios.create({
  baseURL: base_url,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(
  async (config) => {
    let token = await AsyncStorage.getItem("access");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosClient.interceptors.response.use(
    (response) => {
      if (response && response.data) {
        if (Array.isArray(response.data)) {
          return {
            isSuccess: true,
            data: response.data,
          };
        }
        return {
          isSuccess: true,
          ...response.data,
        };
      } else if (response) {
        return {
          isSuccess: true,
          data: response,
        };
      } else {
        return {
          isSuccess: false,
        };
      }
    },
    (error) => {
      console.log("Response Error:", error);
      return {
        isSuccess: false,
      };
    }
  );
  
  export default axiosClient;
