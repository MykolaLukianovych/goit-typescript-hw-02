import axios from "axios";

const UNSPLASH_ACCESS_KEY = "R0FOGP8L2j0cDefFKxScuaaaIE43hZXwpW4fwhKUbc4";

export const fetchImages = async (query, page) => {
  try {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query, page, per_page: 12 },
      headers: { Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}` },
    });

    return response.data;
  } catch {
    throw new Error("Failed to fetch images");
  }
};