import './css/Yugidex.css';
import Monster from '../components/Monster';
import SectionTitle from '../components/SectionTitle';

function Yugidex() {
  const monsters = [
    {
      id: 'blue-eyes-white-dragon',
      name: 'Blue-Eyes White Dragon',
      image: `${process.env.PUBLIC_URL}/images/blue-eyes-white-dragon.jpg`,
      level: 8,
      biotext: 'This legendary dragon is a powerful engine of destruction...',
      type: 'Dragon / Normal',
      attribute: 'Light',
      attack: '3000',
      defense: '2500',
      cardart: [
        `${process.env.PUBLIC_URL}/images/blue-eyes-white-dragon2.jpg`,
        `${process.env.PUBLIC_URL}/images/blue-eyes-white-dragon3.jpg`,
        `${process.env.PUBLIC_URL}/images/blue-eyes-white-dragon4.jpg`
      ]
    },
    {
      id: 'elzette-of-the-white-forest',
      name: 'Elzette of the White Forest',
      image: `${process.env.PUBLIC_URL}/images/elzette-of-the-white-forest.jpg`,
      level: 2,
      biotext: 'You can send 1 Spell/Trap from your hand or field to the GY...',
      type: 'Spellcaster / Effect',
      attribute: 'Light',
      attack: '0',
      defense: '0',
      cardart: []
    },
    {
      id: 'bahamut-shark',
      name: 'Bahamut Shark',
      image: `${process.env.PUBLIC_URL}/images/bahamut-shark.jpg`,
      level: 4,
      biotext: 'Once per turn: You can detach 1 material from this card...',
      type: 'Sea Serpent / Xyz / Effect',
      attribute: 'Water',
      attack: '2600',
      defense: '2100',
      cardart: []
    },
    {
      id: 'toadally-awesome',
      name: 'Toadally Awesome',
      image: `${process.env.PUBLIC_URL}/images/toadally-awesome.jpg`,
      level: 2,
      biotext: 'Once per turn, during the Standby Phase: You can detach...',
      type: 'Aqua / Xyz / Effect',
      attribute: 'Water',
      attack: '2200',
      defense: '0',
      cardart: []
    },
    {
      id: 'mulcharmy-purulia',
      name: 'Mulcharmy Purulia',
      image: `${process.env.PUBLIC_URL}/images/mulcharmy-purulia.jpg`,
      level: 4,
      biotext: 'If you control no cards (Quick Effect): You can discard this card...',
      type: 'Aqua / Xyz / Effect',
      attribute: 'Water',
      attack: '2200',
      defense: '0',
      cardart: []
    },
    {
      id: 'naturia-exterio',
      name: 'Naturia Exterio',
      image: `${process.env.PUBLIC_URL}/images/naturia-exterio.jpg`,
      level: 10,
      biotext: '"Naturia Beast" + "Naturia Barkion"\nA Fusion Summon...',
      type: 'Beast / Fusion ／ Effect',
      attribute: 'Earth',
      attack: '2800',
      defense: '2400',
      cardart: []
    },
    {
      id: 'tornado-dragon',
      name: 'Tornado Dragon',
      image: `${process.env.PUBLIC_URL}/images/tornado-dragon.jpg`,
      level: 4,
      biotext: 'Once per turn (Quick Effect): You can detach 1 material...',
      type: 'Wyrm / Xyz ／ Effect',
      attribute: 'Wind',
      attack: '2100',
      defense: '2000',
      cardart: []
    },
    {
      id: 'mystic-tomato',
      name: 'Mystic Tomato',
      image: `${process.env.PUBLIC_URL}/images/mystic-tomato.jpg`,
      level: 4,
      biotext: 'When this card is destroyed by battle and sent to the GY...',
      type: 'Plant / Effect',
      attribute: 'Dark',
      attack: '1400',
      defense: '1100',
      cardart: [`${process.env.PUBLIC_URL}/images/mystic-tomato2.webp`]
    }
  ];

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
              image={monster.image}
              monsterData={monster}
            />
          ))}
        </section>
      </div>
    </>
  );
}

export default Yugidex;