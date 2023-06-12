import gql from "graphql-tag";

export const BestCreative = gql`
  query GetBestCreative($locale: I18NLocaleCode) {
    bestCreativeComponents(locale: $locale) {
      data {
        attributes {
          title
          description
          subtitle
          subtitle2
          items
        }
      }
    }
  }
`;
