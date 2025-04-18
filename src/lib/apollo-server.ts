import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: 'https://mindminder-be.mahali.dev/api/graphql',
      // Use fetch with no-store option to disable caching
      fetch: (uri: RequestInfo | URL, options?: RequestInit) => {
        return fetch(uri, {
          ...options,
          cache: 'no-store',
        });
      },
    }),
    defaultOptions: {
      query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
      },
    },
    // This setting disables the client-side only "Query String Error Policy"
    queryDeduplication: false,
  });
});
