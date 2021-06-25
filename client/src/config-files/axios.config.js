export const axiosConfig = {
  baseURL: "http://localhost:5001",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
  withCredentials: false,
};
