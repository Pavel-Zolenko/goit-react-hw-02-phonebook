import { PropTypes } from 'prop-types';

import { Item, Number, DeleteBtn } from './ContactItem.styled';

export const ContactItem = ({ id, name, number, deleteContact }) => {
  return (
    <Item>
      <span>{name}: </span>
      <Number>{number}</Number>
      <DeleteBtn type="button" onClick={() => deleteContact(id)}>
        Delete
      </DeleteBtn>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};