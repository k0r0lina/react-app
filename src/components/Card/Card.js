import styles from './Card.module.scss';
import clsx from 'clsx';
import { toggleCardFavorite, removeCard } from '../../redux/cardsRedux';
import { useDispatch } from 'react-redux';

const Card = ({ title, isFavorite, id}) => {
    const dispatch = useDispatch();

    const classChange = () => {
        dispatch(toggleCardFavorite(id));
      };

    const remove = () => {
        dispatch(removeCard(id));
    }

    return (
        <li className={styles.card}>
            {title}
            <div>
                <button type="button" onClick={classChange} className={clsx(styles.button, isFavorite && styles.active)}>
                    <i className="fa fa-star-o"></i>
                </button>
                <button type="button" onClick={remove} className={styles.button}>
                    <i className="fa fa-trash"></i>
                </button>
            </div>
        </li>
    );
};

export default Card;