import css from './App.module.css';
import { useEffect, useState } from 'react';

import { fetchImage } from '../../js/image-api.js';
import SearchBar from '../SearchBar/SearchBar.jsx';
import ImageGallery from '../ImageGallery/ImageGallery.jsx';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn.jsx';

export default function App() {
  // const [clicks, setClicks] = useState(0);
  const [image, setImage] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);

  // useEffect(() => {
  //   console.log(clicks);
  //   async function getImage() {
  //     try {
  //       const data = await fetchImage();
  //       console.log(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   getImage();
  //     fetchImage()
  //       .then(data => console.log(data))
  //       .catch();
  //   },
  // }, [clicks]);
  // ==================================================================================

  const handleSearch = topic => {
    setSearchTerm(topic);
    setPage(1);
    setImage([]);
  };
  // const handleSearch = async topic => {
  //   try {
  //     setSearchTerm(topic);
  //     setPage(1);
  //     setError(false);
  //     setIsLoading(true);
  //     setImage([]);
  //     const data = await fetchImage(topic);
  //     setImage(data);
  //     console.log(data);
  //   } catch {
  //     setError(true);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  useEffect(() => {
    if (searchTerm === '') {
      return;
    }
    async function getData() {
      try {
        setIsLoading(true);
        setError(false);

        const data = await fetchImage(searchTerm, page);

        setImage(prevImegas => {
          return [...prevImegas, ...data];
        });
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    console.log(page, searchTerm);
    getData();
  }, [searchTerm, page]);

  return (
    <div className={css.container}>
      <SearchBar onSubmit={handleSearch} />

      {image.length > 0 && <ImageGallery items={image} />}

      {isLoading && <p className={css.text}>Loading data, please is wait...</p>}

      {error && (
        <p className={css.text}>Whoops there was an error plz reload...</p>
      )}

      {image.length > 0 && !isLoading && (
        <LoadMoreBtn page={page} onPage={setPage} />
      )}

      {/* {image.length > 0 && !isLoading && (
        <button onClick={() => setPage(page + 1)}>
          Load more imegas {page}
        </button>
      )} */}
    </div>
  );
}
