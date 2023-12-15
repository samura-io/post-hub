import styles from '@/styles/components/pagination.module.scss';
import Button from './Button';

export default function Pagination({ page }: { page: string }) {
  const pageCount = 5;
  const buttons = Array.from({ length: pageCount }, (_, index) => index + 1);

  return (
    <div className={styles.pagination}>
      {buttons.map(buttonPage => (
        <Button
          key={buttonPage}
          className={`${styles.btn} ${
            page === buttonPage.toString() ? styles.active : ''
          }`}
          text={buttonPage.toString()}
          path={`/list/${buttonPage}`}
        />
      ))}
    </div>
  );
}
