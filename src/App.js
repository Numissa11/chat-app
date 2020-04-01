import React from 'react';
import Contact from './components/Contact';

const name = "Camillus Victorius";
const avatar = "https://randomuser.me/api/portraits/women/65.jpg"

function App() {
  return (
    <div className="App">
            <Contact
         name={name}
         isOnline
         avatar={avatar}
      />
    </div>
  );
}

export default App;
