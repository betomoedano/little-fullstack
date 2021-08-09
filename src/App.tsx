import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import CreateUser from './Components/CreateUser';
import ListOfUsers from './Components/ListOfUsers';
import UpdatePassword from './Components/UpdatePassword';

import './App.css';

function App() {

  const client = new ApolloClient({
    //uri: "http://localhost:3001/graphql",
    uri:"https://little-fullstack.herokuapp.com/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>hello little fellow!</h1>
        <h2>Welcome to my fullstack little project 💻👨🏻‍💻</h2>
        <CreateUser/>
        <ListOfUsers/>
        <UpdatePassword/>
      </div>
    </ApolloProvider>
  );
}

export default App;
