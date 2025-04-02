import './css/About.css'
import SectionTitle from '../components/SectionTitle';

function About() {
    return (
        <>
            <SectionTitle
                title="About Us"
            />
            <div id="page" className="columns">
                <section id="about-us-container" className="three">
                    <div>
                        <p>
                        Welcome to Yu-Gi-Verse, the ultimate Yu-Gi-Oh! card database and community hub! Whether you're a seasoned duelist, a collector, or just starting your journey, we provide everything you need to explore the vast world of Yu-Gi-Oh!.
                        <br /><br />
                        Our extensive card database allows you to search for any card, check rulings, build decks, and stay updated on the latest releases. But Yu-Gi-Verse is more than just a database—it’s a place for duelists to connect. Our community forums are the perfect space to discuss strategies, share deck ideas, trade cards, and talk about everything from the latest banlist to classic formats.
                        <br /><br />
                        Join Yu-Gi-Verse today and become part of a thriving dueling community where every card, combo, and conversation matters!
                        </p>

                        <h4>Getting Started</h4>
                        <section id="tut-center">
                        </section>
                    </div>
                </section>

                <section id="contact-container" className="one">
                    <h2>Contact Us</h2>
                </section>
            </div>
        </>
    );
}

export default About;