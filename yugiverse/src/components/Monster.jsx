import "./css/Monster.css"

function Monster(props) {
    return (
        <section className="monster">
            <h3>{props.name}</h3>
            <img src={props.image} />
        </section>
    );      
}

export default Monster;