import '../pages/css/Forums.css';

function TopicBlock({ title, content, link }) {
    return (
        <a href={link} className="clickable-box">
            <div className="topic-block">
                <h4 className="discussion-title">{title}</h4>
                <p className="discussion-content">{content}</p>
            </div>
        </a>
    );
}

export default TopicBlock;