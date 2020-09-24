import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PhotosWrapper = styled.div`
    flex-basis: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const Photo = styled.img`
    height: 200px;
    width: 200px;
    margin: 10px;
    object-fit: cover;
    box-shadow: 0px 6px 10px 0px rgba(0,0,0,0.8);
    transition: 0.4s;

    :hover{
        filter: brightness(120%);
    }

    @media (min-width: 768px) {
        height: 300px;
        width: 300px;
    }
    @media (min-width: 1280px) {
        height: 400px;
        width: 400px;
    }
    @media (min-width: 1800px) {
        height: 500px;
        width: 500px;
    }
`;

const GalleryItems = ({ data, start, end }) => {
  const slug = (url) => {
    const imageLink = [];
    for (let i = url.length; i >= 0; i -= 1) {
      if (url[i] === '/') {
        break;
      } else {
        imageLink.push(url[i]);
      }
    }
    return imageLink.reverse().join('');
  };

  return (
    <PhotosWrapper>
      {data.slice(start, end).map((item) => (
        <a
          key={item.id}
          href={`${item.download_url}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Photo
            src={`http://source.unsplash.com/${slug(item.url)}`}
          />
        </a>
      ))}
    </PhotosWrapper>

  );
};

GalleryItems.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  start: PropTypes.number,
  end: PropTypes.number,
};

GalleryItems.defaultProps = {
  start: 0,
  end: 3,
};

export default GalleryItems;
