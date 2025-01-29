import Footer from "./Footer";
import Header from "./Header";

const Error404 = () => {
  return (
    <>
      <Header />

      <section className="col-md-10 temporary-down-section">
        <h1>Nous sommes désoler...</h1>

        <p className="temporary-down-section-para">
          Chez DIGITALY, nous travaillons actuellement pour finaliser les
          différentes sections de notre site.
          <span>
            <br />
          </span>
          Notre objectif est de vous offrir une expérience unique avec des
          services sur mesure et
          <span>
            <br />
          </span>
          innovants.
        </p>

        <p className="temporary-down-section-para">
          Bien que certaines pages ne soient pas encore disponibles,
          <span>
            notre équipe déploie tous ses
            <span>
              <br />
            </span>
            efforts pour vous proposer une plateforme à la hauteur de vos
            attentes.
          </span>
        </p>

        <p className="temporary-down-section-para">
          <span>
            N'hésitez pas à nous contacter pour toute question ou pour discuter
            de vos projets
            <span>
              <br />
            </span>
            numériques.
          </span>
          Nous serons ravis de vous accompagner dès maintenant.
        </p>

        <div className="temporary-down-btns">
          <a href="#">Revenir à l’accueil</a>
          <p>OU</p>
          <a href="#">Nous Contacter</a>
        </div>

        <div className="temporary-down-last-div">
          <p>
            Merci de votre patience.
            <span>
              <br />
            </span>
            L’équipe DIGITALY
          </p>
        </div>



      </section>

      <Footer />
    </>
  );
};

export default Error404;
