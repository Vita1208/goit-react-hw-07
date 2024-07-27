import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import { useDispatch, useSelector } from 'react-redux';

import styles from './SearchBox.module.css';

function SearchBox() {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  return (
    <>
      <p className={styles.title}> Find contacts by name</p>
      <input
        type="text"
        name="search"
        className={styles['search-box']}
        value={filter}
        onInput={e => dispatch(changeFilter(e.target.value))}
      />
    </>
  );
}

export default SearchBox;