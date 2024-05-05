import styles from './Card.module.scss';
import clsx from 'clsx';
import { toggleCardFavorite } from '../../redux/store';
import { useDispatch } from 'react-redux';

const Card = ({ title, isFavorite, id}) => {
    const dispatch = useDispatch();

    const classChange = () => {
        dispatch(toggleCardFavorite(id));
      };

    return (
        <li className={styles.card}>
            {title}
            <button type="button" onClick={classChange} className={clsx(styles.button, isFavorite && styles.active)}>
                <i className="fa fa-star-o"></i>
            </button>
        </li>
    );
};

export default Card;