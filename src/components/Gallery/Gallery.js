import React, { useEffect, useState, useReducer } from 'react';
import styled from 'styled-components';
import GalleryItems from 'components/GalleryItems/GalleryItems';
import Button from 'components/Button/Button';
import Spinner from 'components/Spinner/Spinner';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const initialState = { start: 0, end: 3, page: 1 };

const buttonIcons = [
  {
    id: 1,
    arrow: faArrowLeft,
    type: 'previous',
  },
  {
    id: 2,
    arrow: faArrowRight,
    type: 'next',
  },
];

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width:100%;
`;

const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: center;
    max-width:90%;
`;

const Counter = styled.p`
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform:translateX(-50%);
    color: white;
    text-shadow: 2px 2px 4px #000000;
    font-size: 2.6rem;
    padding: 10px;
    text-align: center;
`;

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  function reducer(state, action) {
    const { start, end, page } = state;
    switch (action.type) {
      case 'next':
        if (end >= photos.length) { return initialState; }
        return { start: start + 3, end: end + 3, page: page + 1 };
      case 'previous':
        if (start <= 0) { return { start: 27, end: 30, page: 10 }; }
        return { start: start - 3, end: end - 3, page: page - 1 };
      default:
        throw new Error('Reducer action.type error');
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch('https://picsum.photos/v2/list')
      .then((resp) => resp.json())
      .then((data) => setPhotos(data))
      .then(() => {
        setIsLoaded(true);
      })
      .catch((err) => {
        throw (err);
      });
  }, []);

  const buttons = buttonIcons.map((item) => (
    <Button key={item.id} icon={item.arrow} onClick={() => dispatch({ type: item.type })} />
  ));

  return (

    <>
      <Wrapper>
        {isLoaded ? (
          <>
            <GalleryItems data={photos} start={state.start} end={state.end} />
            <ButtonsWrapper>
              {buttons}
            </ButtonsWrapper>
            <Counter>
              {`${state.page}/10`}
            </Counter>
          </>
        )
          : (<Spinner />)}
      </Wrapper>
    </>
  );
};

export default Gallery;
