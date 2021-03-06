import styled from 'styled-components';

const CardStyled = styled.article`
  figure {
  }
`;

const CardsHomeDescription = styled.p`
  padding: 1rem;
`;

const CardsHome = ({ el, setIdModal, isOpenModal }) => {
  let {
    id,
    img,
    titleCard,
    description,
    animateOnScroll,
    animateonScrollDuration,
    altTitle,
  } = el;

  return (
    <>
      <CardStyled
        data-aos-duration={animateonScrollDuration}
        data-aos={animateOnScroll}
        className={'box-shadow-card'}
      >
        <figure onClick={isOpenModal}>
          <img
            onClick={() => setIdModal(id)}
            src={img}
            alt={altTitle}
            title={titleCard}
          />
        </figure>

        <h4>{titleCard}</h4>
        <CardsHomeDescription>{description}</CardsHomeDescription>
      </CardStyled>
    </>
  );
};

export default CardsHome;
