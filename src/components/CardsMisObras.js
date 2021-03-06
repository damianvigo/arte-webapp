const CardsMisObras = ({ el, isOpenModal, setIdModal }) => {
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
      <article
        data-aos-duration={animateonScrollDuration}
        data-aos={animateOnScroll}
        className="box-shadow-card"
      >
        <figure onClick={isOpenModal}>
          <img
            onClick={() => setIdModal(id)}
            src={img}
            title={titleCard}
            alt={altTitle}
          />
        </figure>
        <h2>{titleCard}</h2>
        <p>{description}</p>
      </article>
    </>
  );
};

export default CardsMisObras;
