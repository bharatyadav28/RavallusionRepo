const { cookies } = require("next/headers");

const FetchRequest = async ({ path, isTokenRequired = true }) => {
  let headers = {
    "Content-Type": "application/json",
  };
  if (isTokenRequired) {
    headers.Authorization = `${cookies().get("supplier_token")?.value}`;
  }
  console.log("Headers:", headers);

  try {
    const response = await fetch(`https://yeii-api.onrender.com${path}`, {
      method: "GET",
      headers,
      //   cache: "force-cache",
      // cache: "no-cache",
    });

    const responseData = await response.json();
    // console.log("Response Data:", responseData);
    if (!response.ok) {
      throw new Error(
        responseData?.message ||
          responseData?.errors ||
          responseData?.error?.message
      );
    }
    return { success: true, data: responseData };
  } catch (error) {
    return { success: false, message: error.message };
  }
};
