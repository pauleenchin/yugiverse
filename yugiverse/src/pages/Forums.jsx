import DiscussionPost from '../components/DiscussionPost';
import TopicBlock from '../components/TopicBlock';
import SectionTitle from '../components/SectionTitle';
import './css/Forums.css';

function Forums() {
    return (
        <>
            <SectionTitle
                title="Forums"
            />
            <div id="page">
                <main id="content" className="columns">
                    <section id="forums" className="five">
                        <section id="forum-posts">
                            <DiscussionPost
                                title="Is Branded Despia Still Meta in 2025?"
                                content="With the latest banlist changes and new support cards coming out, do you think Branded Despia is still a top-tier deck?"
                                link="#"
                            />
                            <DiscussionPost
                                title="Can You Chain to Super Polymerization?"
                                content="Hey everyone, I’ve been getting mixed answers about Super Polymerization and whether or not it can be negated or chained to."
                            />
                            <DiscussionPost
                                title="Looking for Dark Magician 1st Edition (LOB), Offering Meta Staples"
                                content="I’m looking to trade for a 1st Edition Legend of Blue-Eyes Dark Magician (LOB-005) in Near Mint condition."
                            />
                            <DiscussionPost
                                title="What Was Your First Ever Yu-Gi-Oh! Deck?"
                                content="What was the first-ever Yu-Gi-Oh! deck you played with? Structure Deck, custom build, or random packs?"
                            />
                        </section>
                    </section>

                    <aside id="trending-topics-section" className="one">
                        <h3 id="topic-title">Trending Topics</h3>
                        <aside id="topic-section">
                            <TopicBlock
                                title="New Banlist Announced – What Got Hit the Hardest?"
                                content="The latest Yu-Gi-Oh! banlist just dropped. Did your deck survive, or do you need a full rebuild?"
                                link="#"
                            />
                            <TopicBlock
                                title="Best Tech Cards for the Current Meta"
                                content="Hand Traps, Board Breakers, Floodgates — which tech cards dominate right now?"
                                link="#"
                            />
                            <TopicBlock
                                title="Most Expensive Cards of 2025 – Are They Worth It?"
                                content="Some cards are skyrocketing in value. Are they worth the hype?"
                                link="#"
                            />
                            <TopicBlock
                                title="Which Archetype Deserves New Support?"
                                content="If Konami brought back a classic archetype, which would you choose — Blackwings, Infernities, Six Samurai?"
                                link="#"
                            />
                        </aside>
                    </aside>
                </main>
            </div>
        </>
    );
}

export default Forums;