import { Fragment } from 'react';

import { getBookById, getFeaturedBooks } from '../../helpers/api-util';
import BookSummary from '../../components/book-detail/book-summary';
import BookLogistics from '../../components/book-detail/book-logistics';
import BookContent from '../../components/book-detail/book-content';
import Head from 'next/head';

function BookDetailPage(props) {
  const book = props.selectedbook;

  if (!book) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Fragment>
      <Head>
        <title>{book.title}</title>
        <meta
          name="description"
          content={`Book description of ${book.title}`}
        />
      </Head>
      <BookSummary title={book.title} />
      <BookLogistics
        date={book.date}
        address={book.location}
        image={book.image}
        imageAlt={book.title}
        authorName={book.authorName}
        price={book.price}
      />
      <BookContent>
        <p>{book.description}</p>
      </BookContent>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const bookId = context.params.bookId;

  const book = await getBookById(bookId);

  return {
    props: {
      selectedbook: book,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const books = await getFeaturedBooks();

  const paths = books.map((book) => ({ params: { bookId: book.id } }));

  return {
    paths: paths,
    fallback: 'blocking',
  };
}

export default BookDetailPage;
