import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favourite from "./pages/Favourite";
import NotFound from "./pages/NotFound";
import Nav from "./components/Nav";
import { useState } from "react";
// import{
// BrowserRouter as Router,
// Routes,
// Route,
// Link
// } from "react-router-dom";

function App() {
  const [contacts, setContacts] = useState([]);
  const formsub = (data) => {
    console.log(data);
    setContacts([...contacts, data]);
  };

  const deleteContact = (id) => {
    let newContact = contacts.filter((singleContact) => {
      return singleContact.id !== id;
    });
    setContacts(newContact);
  };
const favToggle = (id)=>{
  let updatedContact = contacts.map((singleContact)=>{
    return singleContact.id === id ? {...singleContact, fav: !singleContact.fav} : singleContact;
  });
  setContacts(updatedContact);
};
  return (
    <Router>
      {/* <div classname="h1">
      Private contact
    </div> */}
      <Nav />
      {/* <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/favourite">Favourite</Link>
      </li>
    </ul> */}
      <Routes>
        <Route
          exact
          path="/"
          element={<Home formsub={formsub} contacts={contacts} favToggle={favToggle} deleteContact={deleteContact} />}
        />
        <Route path="/favourite" element={<Favourite contacts={contacts} favToggle={favToggle} deleteContact={deleteContact}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
