import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const SearchForm = () => {
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'UPDATE_SEARCHSTRING', payload: searchQuery });
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