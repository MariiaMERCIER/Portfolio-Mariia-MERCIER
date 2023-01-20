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
        <img src={require("../assets/images/todolist.png")} alt="todolist" />

        <img src={require("../assets/images/marvel.png")} alt="marvel" />

        <img src={require("../assets/images/vinted.png")} alt="vinted" />

        <img src={require("../assets/images/netflix.png")} alt="netflix" />

        <img src={require("../assets/images/deliveroo.png")} alt="deliveroo" />

        <img
          src={require("../assets/images/tripadvisor.png")}
          alt="tripadvisor"
        />
      </div>
    </main>
  );
};

export default Home;
