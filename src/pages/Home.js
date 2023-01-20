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
        <img
          src={require("https://res.cloudinary.com/dcvjq7vzd/image/upload/v1674227186/portfolio/todolist_nz0nvp.png")}
          alt="todolist"
        />

        <img
          src={require("https://res.cloudinary.com/dcvjq7vzd/image/upload/v1674227236/portfolio/marvel_zu4xqj.png")}
          alt="marvel"
        />

        <img
          src={require("https://res.cloudinary.com/dcvjq7vzd/image/upload/v1674227231/portfolio/vinted_rtbmqt.png")}
          alt="vinted"
        />

        <img
          src={require("https://res.cloudinary.com/dcvjq7vzd/image/upload/v1674227241/portfolio/netflix_df9elb.png")}
          alt="netflix"
        />

        <img
          src={require("https://res.cloudinary.com/dcvjq7vzd/image/upload/v1674227187/portfolio/deliveroo_s3l5tm.png")}
          alt="deliveroo"
        />

        <img
          src={require("https://res.cloudinary.com/dcvjq7vzd/image/upload/v1674227222/portfolio/tripadvisor_kh3jgn.png")}
          alt="tripadvisor"
        />
      </div>
    </main>
  );
};

export default Home;
