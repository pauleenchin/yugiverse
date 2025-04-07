import { useLocation, Link } from 'react-router-dom';
import './css/Yugidex.css';

function MonsterPage() {
  const { state } = useLocation();
  const monster = state?.monster;
  const imgBase = "https://yugiverse-server.onrender.com/";
  const imgSrc = imgBase + monster.image;

  if (!monster) {
    return <p>Monster not found. Try going back to the Yugidex.</p>;
  }

  return (
    <>
      <div id="yugi-header" className="header-centered">
      <Link to="/yugidex" id="yugi-nav-left">&larr; Back</Link>
        <h2 id="yugi-number-name">
          {monster.name} {Array(monster.level).fill('★').join(' ')}
        </h2>
        <span style={{ width: "60px" }}></span> { }
      </div>
      <div id="page">
        <div id="main-content" className="columns">
          <div className="one container">
            <img src={imgSrc} id="main-yugi-img" alt={monster.name} />
          </div>
          <div className="one container">
            <div className="container" id="bio-text">
              <p>{monster.biotext}</p>
            </div>
            <div className="container" id="sub-section">
              <div className="columns">
                <div className="one"><h4>Type: {monster.type}</h4></div>
                <div className="one"><h4>Attribute: {monster.attribute}</h4></div>
              </div>
              <div className="columns">
                <div className="one"><h4>Attack: {monster.attack}</h4></div>
                <div className="one"><h4>Defense: {monster.defense}</h4></div>
              </div>
              <div id="card-art" className="one">
                <h4>Card Art</h4>
                <div className="columns">
                  {monster.cardart.length > 0 ? monster.cardart.map((img, i) => (
                    <img key={i} src={imgBase + img} className="card-art-img one" alt={`Art ${i}`} />
                  )) : <p>No card art available</p>}
                </div>
              </div>
            </div>
          </div>
          <div id="additional-content" className="columns"></div>
        </div>
      </div>
    </>
  );
}

export default MonsterPage;
