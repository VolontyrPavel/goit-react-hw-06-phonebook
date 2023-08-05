import { useSelector } from "react-redux";
import { selectVisibleContacts } from "redux/selectors";
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/contactsSlise";

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name}: {number}
          </p>
          <button type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

