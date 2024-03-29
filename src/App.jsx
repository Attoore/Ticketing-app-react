// layouts and pages
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Create from "./pages/Create";
import Login from "./pages/Login";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Grid, GridItem, Flex, Box, Spacer } from "@chakra-ui/react";
import { useState, useEffect } from "react";

// // router and routes
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<RootLayout />}>
//       <Route index element={<Dashboard />} />
//       <Route path="create" element={<Create />} action={createAction} />
//       <Route path="profile" element={<Profile />} />
//     </Route>
//   )
// );

function App() {
  // console.log("RENDERED -  APP component");

  // states for fetch triggering using dependacy arrays
  const [fetchTicketsTrigger, setFetchTicketsTrigger] = useState(false);
  const [fetchUsersTrigger, setFetchUsersTrigger] = useState(false);

  //States for Tickets / Users from DB
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);

  //Fetch the tickets and save to state
  useEffect(
    function () {
      async function getTickets() {
        try {
          const res = await fetch(`http://127.0.0.1:8080/tickets`);
          const tickets = await res.json();
          setTickets(tickets); // Set the state
        } catch (error) {
          console.log(error.message);
        }
      }
      getTickets();
    },
    [fetchTicketsTrigger]
  ); //trigger state inclunded

  //Fetch the Users and save to state
  useEffect(
    function () {
      async function getUsers() {
        try {
          const res = await fetch(`http://127.0.0.1:8080/users`);
          const users = await res.json();
          setUsers(users);
          // console.log(users);
        } catch (error) {
          console.log(error.message);
        }
      }
      getUsers();
    },
    [fetchUsersTrigger]
  );

  // Passing the states & funcs trough Outlet context to Dashboard.jsx & Create.jsx
  return (
    <Flex bg="gray.50">
      <Box as="aside" flex="1" borderRight="2px solid lightgray" minHeight={{ lg: "100vh" }}>
        <Sidebar />
      </Box>

      <Box as="main" flex="5">
        <Navbar />
        <Dashboard
          tickets={tickets}
          users={users}
          setTickets={setTickets}
          setFetchTicketsTrigger={setFetchTicketsTrigger}
        />
        {/* <Create
          setFetchTicketsTrigger={setFetchTicketsTrigger}
          setFetchUsersTrigger={setFetchUsersTrigger}
          users={users}
        /> */}
        <Login />
      </Box>
    </Flex>
  );
}

export default App;
