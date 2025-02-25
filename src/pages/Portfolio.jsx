
export default function(){
  return (
    <main>
      <h1>PORTFOLIO</h1>
      <section className="portfolio"> 

        {/* FIRST CARD */}
        <div className="card" data-href="project1.html">
          <h2>Gymnasium - School DB / Console App</h2>
          <img src="../Images/GymnasiumDB.png" alt="Gymnasium menu" />
          <p>
            A comprehensive school database built with Entity Framework featuring an intuitive console interface.
            Click for more details.
          </p>
          {/* Link that triggers the modal popup */}
          <a href="#school-popup" className="btn">More Info</a>
          <a href="https://github.com/NoahtlHoff/Gymnasium" className="github-link">View on GitHub</a>
        </div>

        <article id="school-popup" className="popup">
          <a href="#" className="close">&times;</a>
          <h2>Gymnasium - School DB / Console App</h2>
          <p>
            This project is a robust school database application built with Entity Framework.
            It features a user-friendly console interface that allows for easy navigation and quick access to detailed school data.
          </p>
          <p>
            The application was designed with usability and performance in mind, offering functionalities such as record management and report generation.
            Here you can add even more detailed information about features, design choices, challenges, and lessons learned.
          </p>
        </article>
        <a href="#" className="close-popup"></a>  

        {/* Card for Numbers Game project */}
        <div className="card" data-href="project2.html">
          <h2>Numbers Game - Can you guess the right number?</h2>
          <img src="../Images/NumbersGame.png" alt="User guessed too high in game" />
          <p>
            An interactive console app with various difficulties. Click for more details.
          </p>
          {/* Link that triggers the modal popup */}
          <a href="#number-popup" className="btn">More Info</a>
          <a href="https://github.com/NoahtlHoff/NumbersGame" className="github-link">View on GitHub</a>
        </div>

        <article id="number-popup" className="popup">
          <a href="#" className="close">&times;</a>
          <h2>Numbers Game - Can you guess the right number?</h2>
          <p>
            This interactive console app challenges users to guess the correct number over multiple difficulty levels.
            The design is minimalistic yet engaging, offering dynamic feedback and a variety of game modes.
          </p>
          <p>
            More detailed descriptions of the game mechanics, user interface considerations, and the code structure can be added here.
          </p>
        </article>
        <a href="#" className="close-popup"></a>
      </section>
    </main>
  );
};
