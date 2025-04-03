import './css/Home.css';
import HomeBlock from '../components/HomeBlock';

function Home() {
  return (
    <>
      <div id='main-image-container'>
        <img id='main-image' src={`${process.env.PUBLIC_URL}/images/yugioh-banner.webp`} alt='yugioh cards spread out'/>
      </div>
      <div id='page'>
        <div id='home-content' className='columns'>
          <section id='featured' className='three'>
            <h2 id='featured-title'>Featured</h2>

            <div id='featured-blocks' className='columns'>
              <HomeBlock
                image={`${process.env.PUBLIC_URL}/images/block-one.webp`}
                title='New Banlist Announced'
                alt='New Banlist'
                link='/yugiverse/Forums'
              />
              <HomeBlock
                image={`${process.env.PUBLIC_URL}/images/block-two.png`}
                title='Best Tech Cards'
                alt='Best Tech Cards'
              />
              <HomeBlock
                image={`${process.env.PUBLIC_URL}/images/block-three.jpg`}
                title='Most Expensive Cards of 2025'
                alt='Expensive Cards 2025'
              />
            </div>
          </section>

          <section id='mystery-monster' className='one'>
            <h2 id='mystery-monster-title'>Who's that Monster?</h2>
            <div id='mystery-monster-container'>
              <img src={`${process.env.PUBLIC_URL}/images/mystery-monster.jpg`} alt='Mystery Monster' />
            </div>
            <p>
              Silhouette Rabbit is a Level 2 DARK Beast monster in Yu-Gi-Oh! with a shadowy,
              mysterious design that makes it look like a swift and elusive creature...
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

export default Home;
