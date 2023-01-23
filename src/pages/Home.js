import TypeIt from "typeit-react";

const Home = () => {
  return (
    <main className="container">
      <div className="banner">
        <div className="form">
          <div>
            <span>mariiamercier -- 80x24 </span>
          </div>

          <p>Last login: Tue Jan 17 @mariiamercier</p>

          <TypeIt
            className="typed"
            options={{
              strings: [
                "Je suis Mariia Mercier. Je suis developpeuse Front-end.",
              ],
              speed: 150,
              waitUntilVisible: true,
            }}
          />
        </div>
      </div>
      <div className="projects">
        <a
          href="https://github.com/MariiaMERCIER/toDoListV3"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src="https://res.cloudinary.com/dcvjq7vzd/image/upload/v1674227186/portfolio/todolist_nz0nvp.png"
            alt="todolist"
          />
        </a>

        <a
          href="https://marvel-by-mmercier.netlify.app/"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src="https://res.cloudinary.com/dcvjq7vzd/image/upload/v1674227236/portfolio/marvel_zu4xqj.png"
            alt="marvel"
          />
        </a>
        <a
          href="https://vinted-replica-mmercier.netlify.app/"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src="https://res.cloudinary.com/dcvjq7vzd/image/upload/v1674227231/portfolio/vinted_rtbmqt.png"
            alt="vinted"
          />
        </a>
        <a
          href="https://my-netflix-movies.netlify.app/"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src="https://res.cloudinary.com/dcvjq7vzd/image/upload/v1674227241/portfolio/netflix_df9elb.png"
            alt="netflix"
          />
        </a>
        <a
          href="https://my-deliveroo-replique.netlify.app/"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src="https://res.cloudinary.com/dcvjq7vzd/image/upload/v1674227187/portfolio/deliveroo_s3l5tm.png"
            alt="deliveroo"
          />
        </a>
        <a
          href="https://tripadvisor-mariiamercier.netlify.app/"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src="https://res.cloudinary.com/dcvjq7vzd/image/upload/v1674227222/portfolio/tripadvisor_kh3jgn.png"
            alt="tripadvisor"
          />
        </a>
      </div>
    </main>
  );
};

export default Home;
