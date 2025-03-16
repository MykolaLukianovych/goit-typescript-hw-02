import { useState, useEffect } from "react";
import { fetchImages } from "./api";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

export interface Image {
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
}

interface ImageData {
  total_pages: number;
  total: number;
  results: Image[];
}

const App = () => {
  const [query, setQuery] = useState<string>("");
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);


  useEffect(() => {
    if (!query) return;

    const fetchData = async (): Promise<void> => {
      setLoading(true);
      setError(false);

      try {
        const data: ImageData = await fetchImages(query, page);
        setImages((prev) => (page === 1 ? data.results : [...prev, ...data.results]));
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query, page]);

  const handleSearch = (newQuery: string): void => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch}/>
      {error && <ErrorMessage />}
      <ImageGallery images={images} openModal={setSelectedImage} />
      {loading && <Loader />}
      {images.length > 0 && !loading && <LoadMoreBtn onClick={() => setPage((prev) => prev + 1)} />}
      {selectedImage && <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />}
    </div>
  );
};

export default App;