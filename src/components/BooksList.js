import List from "./List";

const BooksList = ({ books }) => {
  return (
    <div className="bookslist">
      {books.map((book) => (
        <List
          key={book.title}
          title={book.title}
          rating={book.rating}
          image={book.image}
          link={book.link}
        />
      ))}
    </div>
  );
};

export default BooksList;
