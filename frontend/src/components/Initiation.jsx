import "../blocks/Initiation.css";

function Initiation() {
  return (
    <section className="initiation">
      <h2 className="initiation__title">
        Hello. To bookmark articles to an account, please
      </h2>
      <div className="initiation__container">
        <button type="button" className="initiation__button">
          Register
        </button>
        <p className="initiation__text">or</p>
        <button type="button" className="initiation__button">
          Sign in
        </button>
      </div>
    </section>
  );
}

export default Initiation;
