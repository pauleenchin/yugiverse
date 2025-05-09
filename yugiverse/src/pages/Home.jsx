import './css/Home.css';
import HomeBlock from '../components/HomeBlock';

function Home() {
  return (
    <>
      <div id='main-image-container'>
        <img id='main-image' src={`${process.env.PUBLIC_URL}/images/yugioh-banner.webp`} alt='yugioh cards spread out'/>
      </div>
      <div id='page' className='columns'>
        <div id='featured-left'>
          <h2 id='featured-title'>Featured</h2>
          <div id='featured-blocks' className='columns'>
            <HomeBlock
              image={`${process.env.PUBLIC_URL}/images/block-one.webp`}
              title='New Banlist Announced'
              alt='New Banlist'
              link="/forums"
            />
            <HomeBlock
              image={`${process.env.PUBLIC_URL}/images/block-two.png`}
              title='Best Tech Cards'
              alt='Best Tech Cards'
              link="/forums"
            />
            <HomeBlock
              image={`${process.env.PUBLIC_URL}/images/block-three.jpg`}
              title='Most Expensive Cards of 2025'
              alt='Expensive Cards 2025'
              link="/forums"
            />
          </div>
        </div>
        <section id='mystery-monster'>
          <h2 id='mystery-monster-title'>Who's that Monster?</h2>
          <div id='mystery-monster-container'>
            <img src={`${process.env.PUBLIC_URL}/images/mystery-monster.jpg`} alt='Mystery Monster' />
          </div>
          <p>
            Silhouette Rabbit is a Level 2 DARK Beast monster in Yu-Gi-Oh! with a shadowy, mysterious design
            that makes it look like a swift and elusive creature. Its effect focuses on dodging attacks or
            interactions, allowing it to vanish from the field temporarily. This card is often used in trick-based
            or control decks, where its ability to avoid danger can set up strategic plays.
          </p>
        </section>
      </div>
    </>
  );
}

export default Home;