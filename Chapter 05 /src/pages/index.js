import { getFeaturedBooks } from '../helpers/api-util';
import BookList from '../components/books/book-list';
import Head from 'next/head';

function HomePage(props) {
  return (
    <div>
      <Head>
        <title>Feature Books - NextCommercePro</title>
        <meta name="description" content="Feature books in our collection" />
      </Head>
      <BookList items={props.books} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredBooks = await getFeaturedBooks();

  return {
    props: {
      books: featuredBooks,
    },
    revalidate: 1800,
  };
}

export default HomePage;
