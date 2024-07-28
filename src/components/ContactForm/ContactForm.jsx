import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { addContact } from '../../redux/contactsOps';
import { selectLoading } from '../../redux/contactsSlice';

import styles from './ContactForm.module.css';

const addContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short')
    .max(50, 'Too long')
    .required('Name required to fill out'),
  phone: Yup.string()
    .min(7, 'Too short')
    .max(9, 'Too long')
    .required('Phone number required to fill out'),
});

function ContactForm() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  const nameFieldId = useId();
  const phoneFieldId = useId();

  const initValues = { name: '', phone: '' };

  function handleSubmit(contact, actions) {
    dispatch(addContact(contact));
    actions.resetForm();
  }

  return (
    <Formik
      initialValues={initValues}
      onSubmit={handleSubmit}
      validationSchema={addContactSchema}
    >
      <Form className={styles.form}>
        <div className={styles.fieldset}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field id={nameFieldId} name="name" type="text" />
          <ErrorMessage name="name" component="span" className={styles.error} />
        </div>

        <div className={styles.fieldset}>
          <label htmlFor={phoneFieldId}>Phone</label>
          <Field id={phoneFieldId} name="phone" type="text" />
          <ErrorMessage
            name="phone"
            component="span"
            className={styles.error}
          />
        </div>

        <button type="submit" disabled={isLoading}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;