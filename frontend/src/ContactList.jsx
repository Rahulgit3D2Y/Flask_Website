import React from "react";
import PropTypes from "prop-types";

const ContactsList = ({ contacts }) => {
  return (
    <div>
      <h2>Contacts</h2>
      <table>
        <thead>
          <th>FirstName</th>
          <th>lastName</th>
          <th>Email</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.firstName}</td>
              <td>{contact.lastName}</td>
              <td>{contact.email}</td>
              <td>
                <button>UPDATE</button>
                <button>DELETE</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default ContactsList;
