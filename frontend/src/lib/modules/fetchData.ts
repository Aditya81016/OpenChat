export default async function fetchData(
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
  endpoint: string,
  format?: "text" | "json"
) {
  // sends the fetch request
  const response = await fetch(`http://127.0.0.1:8080${endpoint}`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
  });

  let data; // variable to store fetched data

  // try getting data
  try {
    const spareResponse = response.clone();

    // if a format was specified...
    if (format) {
      // get the data in the specified format
      data = await spareResponse[format]();
    } else {
      // else try getting the data in json format
      data = await spareResponse.json();
    }
  } catch {
    // if by any means there was an error while getting the data
    // simply get the data in text format
    data = await response.text();
  }

  // at lastr return the data
  return data;
}
