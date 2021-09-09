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
  query GetRepositories(
      $sortOrder: AllRepositoriesOrderBy,
      $sortDirection: OrderDirection,
    ) {
    repositories(
      orderBy: $sortOrder,
      orderDirection: $sortDirection,
    ) {
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
  }
`;

export const GET_REPOSITORY = gql`
  query GetRepository($repoId: ID!) {
    repository(id: $repoId) {
      id,
      fullName,
      ownerAvatarUrl,
      description,
      language,
      stargazersCount,
      forksCount,
      reviewCount,
      ratingAverage,

      url,
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`;
