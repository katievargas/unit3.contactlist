import React from 'react';

const ContactList = ({ contacts }) => {
  return (
    <table>
        <thread>
            <tr>
                <th colSpan={3}>Contact List</th>
            </tr>
        </thread>
        <tbody>
            <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
            </tr>
            {
                // Map over data here
            }
        </tbody>
    </table>
  );
}

export default ContactList;
