import styles from './ContactListItem.module.css';

import { deleteContact } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.item_list}>
      <span>{contact.name}</span>
      <span>: {contact.number}</span>{' '}
      <button onClick={() => dispatch(deleteContact(contact.id))}>
        Delete
      </button>
    </li>
  );
};
