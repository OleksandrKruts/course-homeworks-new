import { useState, useEffect, useRef } from "react";
import "./ImagesList.css";

const ImagesList = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const isFetching = useRef(false);

  useEffect(() => {
    if (isFetching.current) return;
    isFetching.current = true;

    setLoading(true);
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=10`)
      .then((response) => response.json())
      .then((data) => {
        setImages((prev) => [...prev, ...data]);
      })
      .catch((error) => console.error(error.message))
      .finally(() => {
        setLoading(false);
        isFetching.current = false;
      });
  }, [page]);

  const showMorePage = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <h1 className="header">Image Gallery</h1>
      <div className="images-wrapper">
        <ul className="images-grid">
          {images.map(({ id, download_url, author }, index) => (
            <li key={`${index}-${id}`} className="image-item">
              <img src={download_url} alt={author} className="image" />
            </li>
          ))}
        </ul>

        {loading && <p className="loading">Loading data...</p>}

        <button className="show-more" onClick={showMorePage} disabled={loading}>
          SHOW MORE
        </button>
      </div>
    </>
  );
};

export default ImagesList;
