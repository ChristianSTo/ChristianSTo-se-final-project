import "../blocks/About.css";
import chicagoNewsLogo from "../assets/profilePicture.jpg";

function About() {
  return (
    <section className="about">
      <img className="about__img" src={chicagoNewsLogo}></img>

      <div className="about__container">
        <h2 className="about__title">About the Author</h2>
        <p className="about__paragraph">
          This block describes the project author. Here you should indicate your
          name, what you do, and which development technologies you know. You
          can also talk about your experience with TripleTen, what you learned
          there, and how you can help potential customers.
        </p>
      </div>
    </section>
  );
}

export default About;
