import { AtSignIcon, CalendarIcon, EditIcon } from "@chakra-ui/icons";
import { List, ListIcon, ListItem, Button, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <List color="gray.500" fontSize="1.2em" fontWeight="bold" spacing={10}>
      <Text>Interface</Text>

      {/* <ListItem backgroundColor="white">
        <ListIcon as={CalendarIcon} color="white" />
        <NavLink to="/">Dashboard</NavLink>
      </ListItem> */}

      <ListItem>
        <Button colorScheme="gray" width="100%">
          <ListIcon as={EditIcon} />
          <NavLink to="/">Dashboard</NavLink>
        </Button>
      </ListItem>

      <ListItem>
        <Button colorScheme="gray" width="100%">
          <ListIcon as={EditIcon} />
          <NavLink to="/create">Create</NavLink>
        </Button>
      </ListItem>

      <ListItem>
        <Button colorScheme="gray" width="100%">
          <ListIcon as={EditIcon} />
          <NavLink to="/profile">Profile</NavLink>
        </Button>
      </ListItem>
    </List>
  );
}