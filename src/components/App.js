import React from 'react';
import Header from './Header/';
import UsersList from './UsersList/';
import Footer from './Footer/';

const App = () => {
  return (
    <div className="App">
      <Header />

      <UsersList />

      <Footer />
    </div>
  );
}

export default App;