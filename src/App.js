import React from 'react';
import PropTypes from 'prop-types';
import Contact from './components/Contact';


const name = "Camille Ramiere";
const avatar = "https://randomuser.me/api/portraits/women/65.jpg"

const name2 = "Alexandre De Margerie"
const avatar2 = "https://randomuser.me/api/portraits/men/47.jpg"
const isOnline = false

const name3 = "Hermina Krasznai"
const avatar3 = "https://randomuser.me/api/portraits/women/46.jpg"
function App() {
  return (
    <div className="App">
       <Contact
         name={name}
         isOnline
         avatar={avatar}
      />
      <Contact
         name={name2}
         isOnline = {isOnline}
         avatar={avatar2}
      />
    <Contact
         name={name3}
         isOnline
         avatar={avatar3}
      />
    </div>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  avatar : PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default App;
