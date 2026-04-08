import { graphql } from '~/client/graphql';

export const GetRelatedProductsQuery = graphql(`
  query GetRelatedProducts {
    site {
      products(entityIds: [77, 80, 81, 86]) {
        edges {
          node {
            relatedProducts(first: 2) {
              edges {
                node {
                  entityId
                  name
                  sku
                  path
                  addToCartUrl

                  defaultImage {
                    ...ImageFields
                    altText
                  }

                  prices {
                    price {
                      formatted
                      value
                      currencyCode
                    }
                  }

                  productOptions {
                    edges {
                      node {
                        displayName
                      }
                    }
                  }

                  availabilityV2 {
                    status
                  }

                  brand {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  fragment ImageFields on Image {
    url320wide: url(width: 320)
    url640wide: url(width: 640)
    url960wide: url(width: 960)
    url1280wide: url(width: 1280)
  }
`);