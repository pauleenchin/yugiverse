import './css/Forums.css'

function Forums() {
    return (
        <>
            <h2 id="forum-title">Forums</h2>
            <div id="page">
                <main id="content" className="columns">
                    <section id="forums" className="five">
                        <section id="forum-posts">
                            <a href="#" className="clickable-box">
                            <div className="discussion-post">
                                <h3 className="discussion-title">Is Branded Despia Still Meta in 2025?</h3>
                                <p className="discussion-content">
                                    With the latest banlist changes and new support cards coming out, do you think Branded Despia is still a top-tier deck?
                                </p>
                            </div>
                        </a>
                        <div className="discussion-post">
                            <h3 className="discussion-title">Can You Chain to Super Polymerization?</h3>
                            <p className="discussion-content">
                            Hey everyone, I’ve been getting mixed answers about Super Polymerization and whether or not it can be negated or chained to.
                            </p>
                        </div>
                        <div className="discussion-post">
                            <h3 className="discussion-title">Looking for Dark Magician 1st Edition (LOB), Offering Meta Staples</h3>
                            <p className="discussion-content">
                            I’m looking to trade for a 1st Edition Legend of Blue-Eyes Dark Magician (LOB-005) in Near Mint condition.
                            </p>
                        </div>
                        <div className="discussion-post">
                            <h3 className="discussion-title">What Was Your First Ever Yu-Gi-Oh! Deck?</h3>
                            <p className="discussion-content">
                            What was the first-ever Yu-Gi-Oh! deck you played with? Structure Deck, custom build, or random packs?
                            </p>
                        </div>
                        </section>
                    </section>

                    <aside id="trending-topics-section" className="one">
                        <h3 id="topic-title">Trending Topics</h3>
                        <aside id="topic-section">
                            <a href="#" className="clickable-box">
                                <div className="topic-block">
                                    <h4 className="discussion-title">New Banlist Announced – What Got Hit the Hardest?</h4>
                                    <p className="discussion-content">
                                        The latest Yu-Gi-Oh! banlist just dropped. Did your deck survive, or do you need a full rebuild?
                                    </p>
                                </div>
                            </a>
                            <a href="#" className="clickable-box">
                                <div className="topic-block">
                                    <h4 className="discussion-title">Best Tech Cards for the Current Meta</h4>
                                    <p className="discussion-content">
                                        Hand Traps, Board Breakers, Floodgates — which tech cards dominate right now?
                                    </p>
                                </div>
                            </a>
                            <a href="#" className="clickable-box">
                                <div className="topic-block">
                                    <h4 className="discussion-title">Most Expensive Cards of 2025 – Are They Worth It?</h4>
                                    <p className="discussion-content">
                                        Some cards are skyrocketing in value. Are they worth the hype?
                                    </p>
                                </div>
                            </a>
                            <a href="#" className="clickable-box">
                                <div className="topic-block">
                                    <h4 className="discussion-title">Which Archetype Deserves New Support?</h4>
                                    <p className="discussion-content">
                                        If Konami brought back a classic archetype, which would you choose — Blackwings, Infernities, Six Samurai?
                                    </p>
                                </div>
                            </a>
                        </aside>
                    </aside>
                </main>
            </div>
        </>
    );
}

export default Forums;