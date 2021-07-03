const List = ({ title, author, rating, image, link }) => {
  return (
    <a className="list" href={link} target="_blank">
      <div className="ch1" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="ch2">
        <div>
          <p className="title">
            <b>{title}</b> - <small>{author}</small>
          </p>
          <h4 className="rating">Rating : {rating}</h4>
        </div>
      </div>
    </a>
  );
};

export default List;
