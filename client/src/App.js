import React from 'react';

import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

// import logo from './logo.svg';
// import './App.css';

import { setContext } from '@apollo/client/link/context';

// import  ApolloClient  from 'apollo-boost';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import SavedMovies from './pages/SavedMovies';
import SearhMovies from './pages/SearchMovies';





const httpLink = createHttpLink({
  uri: '/graphql',
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
     headers: {
         ...headers,
         authorization: token ? `Bearer ${token}` : '',
         },
  
     };
  });

const client = new ApolloClient({
  
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),


});

function App() {
  return (
    <ApolloProvider client={client}>
<<<<<<< HEAD
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <div className="container">
          <Home />
        </div>
        <Footer />
      </div>
=======
      <Router>
        <>
        <Navbar />
        <Switch>
          <Route exact path='/' component={SearchMovies} />

          <Route exact path='/saved' component={SavedMovies} />

          <Route render={() => <h1 className='display-2'>Wrong Page</h1>} />
        
          </Switch>
        </>
      </Router>

>>>>>>> 61e43e7240ab270f594126e6e9c459d8de359b22
    </ApolloProvider>
  );
}

export default App;
