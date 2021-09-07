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
  }
`;

export const GET_REPOSITORY = gql`
  query GetRepository($repoId: ID!) {
    repository(id: $repoId) {
      id,
      fullName,
      url,
      ownerAvatarUrl,
      description,
      language,
      stargazersCount,
      forksCount,
      reviewCount,
      ratingAverage,
    }
  }
`;
