import { useRef } from 'react';

import Button from '../ui/button';
import classes from './books-search.module.css';

function BooksSearch(props) {
  const yearInputRef = useRef();
  const monthInputRef = useRef();
  const nameInputRef = useRef();
  const authorNameInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const bookName = nameInputRef.current.value;
    const authorName = authorNameInputRef.current.value;
    // console.log('book name ->', bookName, ' author name  ->', authorName);
    // props.onSearch(selectedYear, selectedMonth);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="name">Book Name</label>
          <input id="name" ref={nameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="name">Author Name</label>
          <input id="name" ref={authorNameInputRef} />
        </div>
      </div>
      <Button>Find Book</Button>
    </form>
  );
}

export default BooksSearch;
