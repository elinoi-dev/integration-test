import React, { useReducer } from "react";
import { Button, Form, Icon, Modal } from "semantic-ui-react";

import "./AddModal.scss";

const reducer = (state, action) => {
  switch (action.type) {
    case "firstName":
      return { ...state, firstName: action.value };
    case "lastName":
      return { ...state, lastName: action.value };
    case "email":
      return { ...state, email: action.value };
    case "roles":
      return { ...state, roles: action.value };
    default:
      return state;
  }
}

const options = [
  {
    key: "admin", text: "Admin", value: "ROLE_ADMIN",
  },
  {
    key: "user", text: "user", value: "ROLE_USER",
  }
];

const AddModal = ({ addUser }) => {
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    roles: '',
  }

  const [formElements, dispatch] = useReducer(reducer, initialState);

  return (
    <Modal trigger={<Button>Ajouter un utilisateur</Button>}>
      <Modal.Header>
        <Icon name="close" />
      </Modal.Header>
      <Modal.Content>
        <h2>
          <Icon.Group size="large">
            <Icon circular inverted />
            <Icon name="user plus" size="small" />
          </Icon.Group>
          Ajouter un utilisateur
          </h2>
        <Form>
          <Form.Group widths="equal">
            <Form.Input label="Prénom" placeholder="Prénom"
              value={formElements.firstName} onChange={(e) => dispatch({ type: "firstName", value: e.target.value })}
            />
            <Form.Input label="Nom" placeholder="Nom"
              value={formElements.lastName} onChange={(e) => dispatch({ type: "lastName", value: e.target.value })}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input label="Email" placeholder="Email"
              value={formElements.email} onChange={(e) => dispatch({ type: "email", value: e.target.value })}
            />
            <Form.Select label="Rôles" placeholder="Rôles" options={options} value={formElements.roles}
              onChange={(e, data) => dispatch({type: "roles", value: data.value})}
            />
          </Form.Group>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => addUser(formElements)} icon="check" content="Valider" />
        <Button icon="times" content="Annuler" />
      </Modal.Actions>
    </Modal>
  )
}

export default AddModal;
