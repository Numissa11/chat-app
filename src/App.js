import React from 'react';
import PropTypes from 'prop-types';
import Contact from './components/Contact';
import ContactList from './components/ContactList';



function App() {
  return (
    <div className="App">
      <ContactList />
    <Contact />

    
    </div>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  avatar : PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired,
};

export default App;
