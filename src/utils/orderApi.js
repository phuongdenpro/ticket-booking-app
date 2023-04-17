import axiosClient from "./axiosClient";
import AsyncStorage from "@react-native-async-storage/async-storage";

class OrderApi {
  getOrderAvailable = (params) => {
    const url = `order/customer/bill/available`;
    const res = axiosClient.get(url, {
      params: {
        ...params,
        isAll: true,
      },
    });
    return res;
  };
  getOrderHistory = (params) => {
    const url = `order/customer/bill/history`;
    const res = axiosClient.get(url, {
      params: {
        ...params,
        isAll: true,
      },
    });
    return res;
  };

  getOrderById(id, params) {
    const url = `order/id/${id}`;
    const res = axiosClient.get(url, {
      ...params,
    });
    return res;
  }

  booking(params) {
    const url = `booking`;
    const res = axiosClient.post(url, params);
    return res;
  }
}

const orderApi = new OrderApi();
export default orderApi;
