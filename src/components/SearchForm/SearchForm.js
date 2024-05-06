import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSearchstring } from '../../redux/searchStringRedux';

const SearchForm = () => {
    const dispatch = useDispatch();
    const searchString = useSelector(state => state.searchString);
    const [searchQuery, setSearchQuery] = useState(searchString);

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateSearchstring(searchQuery));
    }

    return (
        <form onSubmit={handleSubmit} className={styles.searchForm}>
            <TextInput 
                placeholder="Search…"
                value={searchQuery} 
                onChange={e => setSearchQuery(e.target.value)} 
            />
            <Button type="submit">
                <span className="fa fa-search" />
            </Button>
        </form>
    );
};

export default SearchForm;