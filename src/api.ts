import axios from "axios";

const UNSPLASH_ACCESS_KEY = "R0FOGP8L2j0cDefFKxScuaaaIE43hZXwpW4fwhKUbc4";


type ApiResponse = {
  results: Array<{
    id: string;
    alt_description: string;
    likes: number;
    description: string;
    created_at: string;
    tags: { title: string }[];
    urls: {
      small: string;
      regular: string;
    };
    user: {
      name: string;
      social: {
        portfolio_url: string;
      };
      location: string;
    };
  }>;
  total: number;
  total_pages: number;
};

export const fetchImages = async (query: string, page: number): Promise<ApiResponse> => {
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