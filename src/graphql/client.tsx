import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const httpLink = () => {
  return new HttpLink({
    uri: "https://graphbrainz.herokuapp.com",
  });
};

const getClient = new ApolloClient({
  link: httpLink(),
  cache: new InMemoryCache(),
});

export default getClient;
