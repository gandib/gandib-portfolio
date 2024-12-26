"use server";

import envConfig from "@/src/config/envConfig";
import { queryParams } from "@/src/types";
import { cookies } from "next/headers";

export const getAllProjects = async (query: queryParams[]) => {
  const params = new URLSearchParams();
  if (query) {
    query.forEach((item) => {
      params.append(item.name, item.value as string);
    });
  }
  const url = `${envConfig.baseApi}/project?${params.toString()}`;
  const token = (await cookies()).get("accessToken")?.value;

  try {
    const res = await fetch(url, {
      method: "GET",
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();

    // Ensure data structure is correct
    if (!data || !data.data.result) {
      throw new Error("Invalid data format");
    }

    return data;
  } catch (error) {
    console.error("Error fetching Projects:", error);
    throw error;
  }
};

export const getSingleProject = async (projectId: string) => {
  let fetchOptions = {};
  const token = (await cookies()).get("accessToken")?.value;

  fetchOptions = {
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await fetch(
    `${envConfig.baseApi}/project/${projectId}`,
    fetchOptions
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }
  return res.json();
};
