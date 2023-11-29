import { Fragment } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { getAllBools } from '../../helpers/api-util';
import BookList from '../../components/books/book-list';
import BooksSearch from '../../components/books/books-search';

function AllBooksPage(props) {
  const router = useRouter();
  const { books } = props;

  function findEventsHandler(year, month) {
    const fullPath = `/books/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <Fragment>
      <Head>
        <title>All Books - Your Website Name</title>
        <meta
          name="description"
          content="Browse and search for books in our collection"
        />
      </Head>
      <BooksSearch onSearch={findEventsHandler} />
      <BookList items={books} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const books = await getAllBools();

  return {
    props: {
      books: books,
    },
    revalidate: 60,
  };
}

export default AllBooksPage;
