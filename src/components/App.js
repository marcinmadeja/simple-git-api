import React from 'react';
import Header from './Header';
import UsersListOptions from './UsersListOptions';
import UsersList from './UsersList';
import UsersListPagination from './UsersListPagination';
import Footer from './Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <UsersListOptions />
      <UsersList />
      <UsersListPagination />
      <Footer />
    </div>
  );
}

export default App;