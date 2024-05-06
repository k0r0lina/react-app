import styles from './ColumnForm.module.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/columnsRedux';

const ColumnForm = ({listId}) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addColumn({ title, icon, listId }));
        setTitle('');
        setIcon('');
     };

	return (
        <form onSubmit={handleSubmit} className={styles.columnForm}>
            <label>Title:</label> <TextInput type="text" value={title} onChange={e => setTitle(e.target.value)}></TextInput>
            <label>Icon:</label> <TextInput type="text" value={icon} onChange={e => setIcon(e.target.value)}></TextInput>
            <Button>Add column</Button> 
        </form>
	);
};

export default ColumnForm;