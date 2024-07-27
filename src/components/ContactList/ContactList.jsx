import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={styles.list}>
      {filteredContacts.map(contact => (
        <li className={styles['list-item']} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;