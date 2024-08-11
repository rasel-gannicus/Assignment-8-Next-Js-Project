"use server";

export const registerUser = async (data: any) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKENED_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  const userInfo = await res.json();
  // console.log(userInfo);
  return userInfo;
};