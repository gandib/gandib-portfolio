"use server";

import axiosInstance from "@/src/lib/AxiosInstance";
import axios from "axios";

export const contactMe = async (userData: any) => {
  try {
    const { data } = await axiosInstance.post("/auth/contact-me", userData);

    return data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      throw new Error(error?.response?.data?.message);
    } else {
      throw new Error(error);
    }
  }
};
