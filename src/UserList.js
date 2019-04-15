import React from "react";
import { Button, Icon, Item } from "semantic-ui-react";

import "./UserList.scss";

const UserList = ({ users, removeUser }) => (
  <Item.Group>
    {
      users.map((user, i) => (
        <Item key={i}>
          {user.image ? <Item.Image src={user.image} /> : <Icon name="user circle" />}
          <Item.Content>
            <Item.Header>{user.firstName} {user.lastName}</Item.Header>
            <Item.Description>{user.roles}</Item.Description>
          </Item.Content>
          <div>
            {
              user.image ? <Button icon="pencil" /> : <span>Invitation envoyée <Icon name="paper plane outline" /></span>
            }
            <Button onClick={() => removeUser(i)} icon="trash alternate outline" />
          </div>
        </Item>
      ))
    }
  </Item.Group>
);

export default UserList;
