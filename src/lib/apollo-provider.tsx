'use client';

import { ApolloProvider } from '@apollo/client';
import { ReactNode } from 'react';

import { getClient } from './apollo-client';

interface ApolloWrapperProps {
  children: ReactNode;
}

export function ApolloWrapper({ children }: ApolloWrapperProps) {
  const client = getClient();
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
