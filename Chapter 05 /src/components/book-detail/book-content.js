import classes from './book-content.module.css';

function BookContent(props) {
  return <section className={classes.content}>{props.children}</section>;
}

export default BookContent;
