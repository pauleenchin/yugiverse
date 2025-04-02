import '../pages/css/Home.css';

function HomeBlock({ image, title, alt, link }) {
  const blockContent = (
    <div className="home-block">
      <img src={image} alt={alt} />
      <h4 className="block-title">{title}</h4>
    </div>
  );

  return link ? (
    <a href={link} className="clickable-box">{blockContent}</a>
  ) : blockContent;
}

export default HomeBlock;
