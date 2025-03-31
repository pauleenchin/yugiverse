import './css/Yugidex.css'
import Monster from '../components/Monster'

function Yugidex() {
    return (
        <>
            <div id="yugidex-header">
                <h2 id="yugidex-title">The Yu-Gi-Dex</h2>
            </div>

            <div id="page">
                <section id="monsters">
                    <Monster
                        name="Blue-Eyes White Dragon"
                        image="images/blue-eyes-white-dragon.jpg"
                    />
                    <Monster
                        name="Bahamut Shark"
                        image="images/bahamut-shark.jpg"
                    />
                    <Monster
                        name="Elzette of the White Forest"
                        image="images/elzette-of-the-white-forest.jpg"
                    />
                    <Monster
                        name="Mulcharmy Purulia"
                        image="images/mulcharmy-purulia.jpg"
                    />
                    <Monster
                        name="Mystic Tomato"
                        image="images/mystic-tomato.jpg"
                    />
                    <Monster
                        name="Naturia Exterio"
                        image="images/naturia-exterio.jpg"
                    />
                    <Monster
                        name="Toadally Awesome"
                        image="images/toadally-awesome.jpg"
                    />
                    <Monster
                        name="Tornado Dragon"
                        image="images/tornado-dragon.jpg"
                    />
                </section>
            </div>
        </>
    );
}

export default Yugidex;