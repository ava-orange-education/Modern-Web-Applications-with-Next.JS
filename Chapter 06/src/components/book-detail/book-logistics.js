import { useMemo } from 'react';
import Image from 'next/image';
import AddressIcon from '../icons/address-icon';
import DateIcon from '../icons/date-icon';
import LogisticsItem from './logistics-item';
import classes from './book-logistics.module.css';

function BookLogistics(props) {
  const { date, address, image, imageAlt, authorName, price } = props;

  const humanReadableDate = useMemo(() => {
    return new Date(date).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }, [date]);

  const addressText = useMemo(() => {
    return address.replace(', ', '\n');
  }, [address]);

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <Image src={`/${image}`} alt={imageAlt} width={500} height={500} />
      </div>
      <ul className={classes.list}>
        <p>{authorName}</p>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{addressText + ' at ' + price + ' only'}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default BookLogistics;
