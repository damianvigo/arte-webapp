import { useState } from 'react';
import { useModal } from '../hooks/useModal';
import styled from 'styled-components';
import CardsHome from './CardsHome';
import Modal from './Modal';
import { v4 as uuidv4 } from 'uuid';

const initialDbHome = [
  {
    id: uuidv4(),
    title: 'Mis Pinturas destacadas',
    img: 'https://placeimg.com/600/600/tech',
    titleCard: 'Ragnar',
    description: 'Oleo sobre tela. 80 x 70cm',
    animateOnScroll: 'fade-down-right',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://placeimg.com/600/600/any',
    titleCard: 'Tango',
    description: 'Oleo sobre tela. 80 x 70cm',
    animateOnScroll: 'fade-up-right',
    animateonScrollDuration: '3000',
  },
];

const CardsHomeSection = styled.section`
  background-color: var(--first-alpha-color);
  border-bottom: thin solid var(--first-color);
  h3 {
    padding: 5rem 0;
    margin: 0 auto;
  }
`;

const CardsHomeStyled = styled.section`
  text-align: center;
  article {
    width: 100%;
    min-width: 200px;
    max-width: 400px;
    margin: 2rem auto;
    border: thin solid var(--black-color);
  }
  figure {
    background-color: var(--high-black-alpha-color);
    img {
      width: 100%;
      transition: opacity 0.5s ease-out;
      :hover {
        opacity: 0.5;
      }
    }
  }

  @media screen and (min-width: 830px) {
    display: grid;
    grid-template-columns: repeat(2, 45%);
    justify-content: space-around;
    align-content: center;
    img {
      height: 400px;
      object-fit: cover;
      object-position: 50% 50%;
    }
    img:hover {
    }
    h3 {
      grid-column: span 2;
    }
    hr {
      grid-column: span 2;
    }
  }
`;

const PinturasHome = () => {
  const [idModal, setIdModal] = useState('');
  const [isOpen, isOpenModal, closeModal] = useModal(false);
  return (
    <CardsHomeSection className="section">
      <CardsHomeStyled className="container full-lg-screen">
        <h3 className="text-center">Pinturas destacadas</h3>
        <hr style={{ width: '100%', maxWidth: '800px' }} />
        <CardsHome
          dbHome={initialDbHome}
          setIdModal={setIdModal}
          isOpenModal={isOpenModal}
        />
      </CardsHomeStyled>
      {idModal && (
        <Modal
          idModal={idModal}
          dbHome={initialDbHome}
          closeModal={closeModal}
          isOpen={isOpen}
        />
      )}
    </CardsHomeSection>
  );
};

export default PinturasHome;
