import Cookies from "js-cookie";

const token = Cookies.get("accessToken");

export const API_TOKEN = token || process.env.API_TOKEN || "";

export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:3001/api";
