import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';// import client from './yourApolloClient'; // Replace with your Apollo client setup
import { setContext } from '@apollo/client/link/context';
import Header from './components/Header';
// import Main from './Main';
import Footer from './components/Footer';
import MauiMap from './components/MauiMap';
//import pages
import { Register } from './pages/Register';
import FoodTruckRestaurantPage from './pages/Food';
import ThingsToDo from './pages/ThingsToDo';


// Create the Apollo client
const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql'  // this is your server's GraphQL endpoint
});

//setting authorization header with a token (will grab token from local storage once paywall includes login)
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  }
});

//setting apolloclient that we will serve on http
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
//finished creating apollo client^


function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            {/* <Route exact path="/" element={<Main />} /> */}
            <Route exact path="/" element={<Register />} />

            <Route exact path="/MauiMap" element={<MauiMap />} />
            <Route exact path="/food-info" element={<FoodTruckRestaurantPage />} />
            <Route exact path="/general-info" element={<ThingsToDo />} />

          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </ApolloProvider>
  );
}

export default App;
