import './css/Home.css';
import Tree from '../components/Tree';
import Header from '../components/Header'
import Footer from '../components/Footer'


function Home() {
  return (
    <>
      <section className="columns">
          <Tree
            name="Live Oak"
            description="Does not lose its leaves."
            image="images/live-oak.webp"

          />
          <Tree
            name="Dogwood"
            description="Flowers in the spring."
            image="images/dogwood.jpg"
          />
      </section>
    </>
    
  );
}

export default Home;
