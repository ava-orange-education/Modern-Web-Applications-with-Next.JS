import { useMemo } from 'react';
import Image from 'next/image';
import Button from '../ui/button';
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';
import classes from './book-Item.module.css';

function BookItem(props) {
  const { title, image, date, location, id, authorName, price } = props;
  const humanReadableDate = useMemo(() => {
    return new Date(date).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }, [date]);

  const formattedAddress = useMemo(() => {
    return location.replace(', ', '\n');
  }, [location]);

  const exploreLink = useMemo(() => {
    return `/books/${id}`;
  }, [id]);

  return (
    <li className={classes.item}>
      <Image src={'/' + image} alt={title} width={300} height={250} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h4>{title + ' - By ' + authorName}</h4>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
            <address>{' at ' + price + ' only '}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Books </span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default BookItem;
