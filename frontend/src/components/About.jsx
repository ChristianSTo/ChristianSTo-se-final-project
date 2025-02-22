import "../blocks/About.css";
import chicagoNewsLogo from "../assets/profilePicture.jpg";

function About() {
  return (
    <main className="about">
      <img
        className="about__img"
        src={chicagoNewsLogo}
        alt="chicagoNewsLogo"
      ></img>

      <div className="about__container">
        <h2 className="about__title">About the Author</h2>
        <p className="about__paragraph">
          Christian is a Software Engineer has keen experience in developing and
          designing web appications. His knowledge and skills in JavaScript,
          React, HTML and CSS are from the TripleTen Bootcamp. He loves team
          projects and participated in three Code Jams, which are competitive
          team events. His teams each won an award.
        </p>
      </div>
    </main>
  );
}

export default About;
