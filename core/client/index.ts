import { BigCommerceAuthError, createClient } from '@bigcommerce/catalyst-client';

import { backendUserAgent } from '../user-agent';

export const client = createClient({
  storefrontToken: process.env.BIGCOMMERCE_STOREFRONT_TOKEN ?? '',
  storeHash: process.env.BIGCOMMERCE_STORE_HASH ?? '',
  // channelId: process.env.BIGCOMMERCE_CHANNEL_ID,
  channelId: process.env.BIGCOMMERCE_CHANNEL_ID ?? '1',
  backendUserAgentExtensions: backendUserAgent,
  logger:
    (process.env.NODE_ENV !== 'production' && process.env.CLIENT_LOGGER !== 'false') ||
    process.env.CLIENT_LOGGER === 'true',
  onError: (error, queryType) => {
    if (error instanceof BigCommerceAuthError && queryType === 'query') {
      // Handle auth errors - redirect will be handled by server components
      console.error('Authentication error:', error);
    }
  },
});
