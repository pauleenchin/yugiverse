import './css/Home.css';
import Header from '../components/Header'
import Footer from '../components/Footer'


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
              <a href='/Forums' className='clickable-box'>
                <div className='home-block one'>
                  <img src= {`${process.env.PUBLIC_URL}/images/block-one.webp`} alt='New Banlist' />
                  <h4 className='block-title'>New Banlist Announced</h4>
                </div>
              </a>

              <div className='home-block one'>
                <img src={`${process.env.PUBLIC_URL}/images/block-two.png`} alt='Best Tech Cards' />
                <h4 className='block-title'>Best Tech Cards</h4>
              </div>

              <div className='home-block one'>
                <img src={`${process.env.PUBLIC_URL}/images/block-three.jpg`} alt='Expensive Cards 2025' />
                <h4 className='block-title'>Most Expensive Cards of 2025</h4>
              </div>
            </div>
          </section>

          <section id='mystery-monster' className='one'>
            <h2 id='mystery-monster-title'>Who's that Monster?</h2>
            <div id='mystery-monster-container'>
              <img src={`${process.env.PUBLIC_URL}/images/mystery-monster.jpg`} alt='Mystery Monster' />
            </div>
            <p>
              Silhouette Rabbit is a Level 2 DARK Beast monster in Yu-Gi-Oh! with a shadowy,
              mysterious design that makes it look like a swift and elusive creature. Its
              effect focuses on dodging attacks or interactions, allowing it to vanish from
              the field temporarily. This card is often used in trick-based or control decks,
              where its ability to avoid danger can set up strategic plays.
            </p>
          </section>
        </div>
      </div>
      
    </>
    
  );
}

export default Home;
