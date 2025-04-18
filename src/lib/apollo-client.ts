import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

export function getClient() {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: 'https://mindminder-be.mahali.dev/api/graphql',
      // Use default fetch without disabling cache
      fetch: (uri: RequestInfo | URL, options?: RequestInit) => {
        return fetch(uri, {
          ...options,
        });
      },
    }),
    defaultOptions: {
      query: {
        fetchPolicy: 'cache-first', // Use cache first, then network if needed
        errorPolicy: 'all',
      },
      watchQuery: {
        fetchPolicy: 'cache-and-network', // Use cache but also update from network
        errorPolicy: 'all',
      },
    },
    queryDeduplication: true, // Enable query deduplication
  });
}
