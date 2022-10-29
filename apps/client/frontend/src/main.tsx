import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider, GlobalStyle } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client';
import { RecoilRoot } from 'recoil';

const link = new HttpLink({uri: 'http://localhost:5005/graphql'})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ChakraProvider>
      <RecoilRoot>

        <BrowserRouter>
          <GlobalStyle />
          <App />
        </BrowserRouter>
      </RecoilRoot>
      </ChakraProvider>
    </ApolloProvider>
  </React.StrictMode>
)
