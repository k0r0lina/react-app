import styles from './List.module.scss';
import ColumnForm from '../ColumnForm/ColumnForm';
import Column from '../Column/Column';
import SearchForm from "../SearchForm/SearchForm";
import { useSelector } from 'react-redux';
import { getColumnsByList, getListById } from '../../redux/store';
import { useParams } from 'react-router';
import { Navigate } from 'react-router-dom';

const List = () => {
  const { listId } = useParams();

  const listData = useSelector(state => getListById(state, listId))
  const columns = useSelector(state => getColumnsByList(state, listId));
    
  const { title, description } = listData;
  
  if(!listData) return <Navigate to="/" />
  return (
      <div className={styles.list}>
        <header className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
        </header>
        <p className={styles.description}>{description}</p>
        <SearchForm />
        <section className={styles.columns}>
          {columns.map(column =>
            <Column
              key={column.id}
              {...column}  />
          )}
        </section>
        <ColumnForm listId={listId}/>
      </div>
    );
};


export default List;