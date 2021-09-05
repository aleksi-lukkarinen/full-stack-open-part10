import { gql } from "@apollo/client";



export const GET_AUTHORIZED_USER = gql`
query AuthorizedUser {
  authorizedUser {
    id
    username
  }
}
`;

export const GET_REPOSITORIES = gql`
query GetRepositories {
  repositories {
    edges {
      node {
        id,
        fullName,
        description,
        language,
        ownerAvatarUrl,
        stargazersCount,
        forksCount,
        reviewCount,
        ratingAverage,
      }
    }
  }
}`;
