import BookItem from './book-Item';
import classes from './book-list.module.css';

function BookList(props) {
  const { items } = props;
  return (
    <div className={classes.list}>
      {items.map((event) => (
        <BookItem
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
          authorName={event.authorName}
          price={event.price}
        />
      ))}
    </div>
  );
}

export default BookList;
