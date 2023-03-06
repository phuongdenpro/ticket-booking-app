import axiosClient from "./axiosClient";
import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthApi {
  //[POST] auth/login
  login = (params) => {
    const url = "auth/user/login";
    return  axiosClient.post(url, params);
  };

  //[GET] auth/register
  register = (params) => {
    const url = "auth/user/register";
    return axiosClient.post(url, params);
  };

  getInfor = (params) => {
    const url = "user/profile";
    return axiosClient.get(url, params);
  };

  save_token = (response) => {
    AsyncStorage.setItem("access", response.data.data.access_token);
    AsyncStorage.setItem("refresh", response.data.data.refresh_token);
  };
  clear_token = () => {
    AsyncStorage.removeItem("access");
    AsyncStorage.removeItem("refresh");
  };
  save_info = (response) => {
    AsyncStorage.setItem("info", JSON.stringify(response.data.data));
  };
  
  getStorageInfo = async () => {
    const value = await AsyncStorage.getItem("info");
    if (value !== null) {
      return JSON.parse(value);
    }
    return null;
  };
}

const authApi = new AuthApi();
export default authApi;
