import axios from "axios";
import { useQuery } from "react-query";

export const userService = {
  getAll: function useGetAllUsers() {
    return useQuery("userData", async () => {
      const { data } = await axios
        .get(process.env.REACT_APP_BASE_URL)
        .then()
        .catch();

      return data;
    });
  },
  create: () => {},
};
