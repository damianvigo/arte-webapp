import styled from 'styled-components';

const ConocemeStyledBackground = styled.section`
  background-color: var(--third-alpha-color);
  img {
    border: medium solid var(--black-color);
    /* filter: grayscale(1); */
    /* filter: sepia(1); */
  }
`;

const ConocemeStyled = styled.article`
  h2 {
    color: ${({ theme }) => theme || 'var(--title-color);'};
  }
`;

const FlipCard = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  max-width: 300px;
  min-height: 300px;
  margin: 0 auto;
  perspective: 10rem;
  cursor: pointer;
  transform-style: preserve-3d;
  transition: transform 1s ease-in-out;
  &:hover {
    transform: rotateY(180deg);
  }
`;

const FlipFace = styled.figure`
  position: absolute;
  width: 100%;
  height: inherit;
  backface-visibility: hidden;
  &:first-child {
    transform: rotateY(0deg);
  }
  &:last-child {
    transform: rotateY(180deg);
  }
  img {
    filter: brightness(1.2);
  }
`;

const ConocemeSectionStyled = styled.div`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 47%);
    justify-content: space-between;
    align-content: center;
    article:nth-child(3) {
      grid-column: span 2;
    }
  }

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, 30%);
    justify-content: space-between;
    align-content: center;
    article:nth-child(3) {
      grid-column: span 1;
    }
  }
`;

const Conoceme = ({ theme, resplandor, avatar }) => {
  return (
    <ConocemeStyledBackground className={theme}>
      <ConocemeSectionStyled
        id="conoceme"
        className="conoceme section container full-lg-screen"
      >
        <ConocemeStyled
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="text-center text-lg-left"
        >
          <h2 className="text-right">¿Quién soy?</h2>
          <p className="text-right">
            Me llamo Adriana Stigliano y soy de Buenos Aires Argentina.
          </p>
          <p className="conoceme-description text-right">
            <strong>
              Pinto al óleo y al acrílico. Mi temática es variada realizo
              paisajes, retratos, marinas y abstractos.
            </strong>
          </p>
          <p className="text-right">
            Amo pintar y lo hago en mi taller y también en espacios libres, para
            estar más en contacto con la naturaleza.
          </p>
        </ConocemeStyled>
        <article
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <FlipCard>
            <FlipFace>
              <img
                src={avatar}
                alt="Adriana Stigliano"
                title="Adriana Stigliano"
              />
            </FlipFace>
            <FlipFace>
              <img
                src={resplandor}
                alt="Cuadro abstracto al óleo de Adriana Stigliano"
                title="Resplandor"
              />
            </FlipFace>
          </FlipCard>
        </article>
        <article
          data-aos="zoom-out-right"
          data-aos-offset="300"
          data-aos-easing="ease-out-sine"
          data-aos-duration="1000"
        >
          <p>
            <strong>
              Trabajé toda mi vida como docente. Estuve en la escuela de Bellas
              Artes General Urquiza.
            </strong>
          </p>
          <p>
            En ella realicé proyectos de arte vinculados a la formación de niños
            y adultos
          </p>
          <p>
            <strong>
              Siempre me gustó dibujar y por tal motivo concurrí a diferentes
              seminarios de arte, donde aprendí la técnica del óleo y pintura
              hiperrealista.
            </strong>
          </p>
          <p>
            En la actualidad continúo con la actividad artística y expongo en
            diferentes espacios
          </p>
        </article>
      </ConocemeSectionStyled>
    </ConocemeStyledBackground>
  );
};

export default Conoceme;
