import './css/Yugidex.css';
import Monster from '../components/Monster';
import SectionTitle from '../components/SectionTitle';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Yugidex() {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get("https://yugiverse-server.onrender.com/api/monsters");

      setMonsters(response.data);
    })();
  }, []);

  return (
    <>
      <SectionTitle title="Yugidex" />
      <div id="page">
        <section id="monsters">
          {monsters.map(monster => (
            <Monster
              key={monster.id}
              id={monster.id}
              name={monster.name}
              image={`https://yugiverse-server.onrender.com/${monster.image}`}
              monsterData={monster}
            />
          ))}
        </section>
      </div>
    </>
  );
}

export default Yugidex;