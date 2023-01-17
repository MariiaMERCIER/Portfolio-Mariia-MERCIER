import TypeIt from "typeit-react";

const Home = () => {
  return (
    <body className="container">
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
                "Je m'appelle Mariia Mercier. Je suis developpeuse Front-end.",
              ],
              speed: 150,
              waitUntilVisible: true,
            }}
          />
        </div>
      </div>
      <p></p>
    </body>
  );
};

export default Home;
