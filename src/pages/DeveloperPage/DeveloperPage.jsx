import photo from "../../assets/id-2x2.webp";
import css from "./DeveloperPage.module.css";

const DeveloperPage = () => {
  // const snowflakes = Array.from({ length: 200 }).map((_, index) => (
  //   <div
  //     key={index}
  //     className={css.snowflake}
  //     style={{
  //       left: `${Math.random() * 100}%`,
  //       width: `${Math.random() * 5 + 5}px`,
  //       height: `${Math.random() * 5 + 5}px`,
  //       animationDelay: `${Math.random() * 10}s`,
  //     }}
  //   ></div>
  // ));

  return (
    <div className={css.wrapper}>
      {/* {snowflakes} */}
      <div className={css.content}>
        <img className={css.photo} src={photo} alt="photo" />
        <h2 className={css.name}>Yuriy Shukan</h2>
        <p className={css.slogan}>
          {/* &ldquo;Пишу код, як пишуть вірші. Іноді в риму, іноді в рядки. А
          іноді, просто так вийшло ;)&rdquo; */}
          Front-end developer
        </p>
        <a
          className={css.link}
          href="https://www.linkedin.com/in/yuriy-shukan"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Linkedin
        </a>
      </div>
    </div>
  );
};

export default DeveloperPage;
