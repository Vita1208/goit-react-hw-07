import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { HiUser } from 'react-icons/hi2';
import { HiPhone } from 'react-icons/hi2';
import { deleteContact } from '../../redux/contactsOps';

import styles from './Contact.module.css';

function Contact({ contact }) {
  const dispatch = useDispatch();

  return (
    <>
      <div className={styles.profile}>
        <div className={styles.user}>
          <HiUser size={'18px'} title="contact icon" />
          <span>{contact.name}</span>
        </div>

        <div className={styles.phone}>
          <HiPhone size={'18px'} title="phone icon" />
          <span>{contact.phone}</span>
        </div>
      </div>

      <button type="button" onClick={() => dispatch(deleteContact(contact.id))}>
        Delete
      </button>
    </>
  );
}

Contact.propTypes = {
  contact: PropTypes.object,
};

export default Contact;