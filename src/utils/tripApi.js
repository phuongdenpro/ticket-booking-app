import axiosClient from "./axiosClient";
import AsyncStorage from "@react-native-async-storage/async-storage";

class TripApi {
  findAllTrip = (params) => {
    const url = `trip-detail`;
    const res = axiosClient.get(url, {
      params: {
        sort:'DESC',
        ...params,
      },
    });
    return res;
  };
}

const tripApi = new TripApi();
export default tripApi;
