import * as React from 'react';
import * as styles from './imageCardThumbnail.module.less';

const images = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Monasterio_Khor_Virap%2C_Armenia%2C_2016-10-01%2C_DD_25.jpg/1200px-Monasterio_Khor_Virap%2C_Armenia%2C_2016-10-01%2C_DD_25.jpg',
  'https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/02/04/16/himalayas-mountains.jpg',
  'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/headshot-of-giraffe-sabi-sands-game-reserve-royalty-free-image-1573571198.jpg',
  'https://willoughbyohio.com/wp-content/uploads/2019/08/animal-control-banner.jpg',
];

const ImageCardThumbnail: React.FC = () => {
  const [index, set] = React.useState<number>(2);

  const increment = (): void => {
    if (index === images.length - 1) {
      set(0);
    } else {
      set((prevState) => prevState + 1);
    }
  };

  const decrement = (): void => {
    if (index === 0) {
      set(images.length - 1);
    } else {
      set((prevState) => prevState - 1);
    }
  };

  return (
    <>
      <div style={{ position: 'absolute', left: '6rem', zIndex: 1 }}>
        <button type="button" onClick={decrement}>-</button>
        <button type="button" onClick={increment}>+</button>
      </div>
      <img
        alt="mountain"
        className={styles.img}
        src={images[index]}
      />
    </>
  );
};

export default ImageCardThumbnail;
