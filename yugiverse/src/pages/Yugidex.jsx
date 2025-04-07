import './css/Yugidex.css';
import Monster from '../components/Monster';
import SectionTitle from '../components/SectionTitle';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Yugidex() {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get("http://localhost:3001/api/monsters");

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
              image={`http://localhost:3001/${monster.image}`}
              monsterData={monster}
            />
          ))}
        </section>
      </div>
    </>
  );
}

export default Yugidex;