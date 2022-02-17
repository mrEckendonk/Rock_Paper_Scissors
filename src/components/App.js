import paper from "../images/paper.png";
import rock from "../images/rock.png";
import scissors from "../images/scissors.png";


import "../styles/index.scss";

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <div class="container">
          <h2>Challenge Rock, Paper, Scissors</h2>
          <div class="flex-box-rps" id="flex-box-rps-div">
            <img id="rock" src={rock} width="150" height="150" alt="" onclick="rpsGame(this)" />
            <img id="paper" src={paper} width="150" height="150" alt="" onclick="rpsGame(this)" />
            <img id="scissors" src={scissors} width="150" height="150" alt="" onclick="rpsGame(this)" />
          </div>
        
          
        </div>
      </main>
    </>
  );
};

export default App;
