import React from "react";
import { render } from "@testing-library/react-native";
import { RepositoryListContainer } from "../../components/RepositoryList";
import { numberToKiloString } from "../../utils/presentation";



const TEST_REPOS = {
  totalCount: 8,
  pageInfo: {
    hasNextPage: true,
    endCursor:
      'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
    startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
  },
  edges: [
    {
      node: {
        id: 'jaredpalmer.formik',
        fullName: 'jaredpalmer/formik',
        description: 'Build forms in React, without the tears',
        language: 'TypeScript',
        forksCount: 1619,
        stargazersCount: 21856,
        ratingAverage: 88,
        reviewCount: 1111,
        ownerAvatarUrl:
          'https://avatars2.githubusercontent.com/u/4060187?v=4',
      },
      cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
    },
    {
      node: {
        id: 'async-library.react-async',
        fullName: 'async-library/react-async',
        description: 'Flexible promise-based React data loader',
        language: 'JavaScript',
        forksCount: 69,
        stargazersCount: 1760,
        ratingAverage: 72,
        reviewCount: 2222,
        ownerAvatarUrl:
          'https://avatars1.githubusercontent.com/u/54310907?v=4',
      },
      cursor:
        'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
    },
  ],
};


const PROP_TEST_ID = "testID";
const TEST_ID_NAME = "GitRepoName";
const TEST_ID_DESCR = "GitRepoDescription";
const TEST_ID_LANG = "GitRepoLanguage";
const TEST_ID_STARS = "GitRepoStatStarsValue";
const TEST_ID_FORKS = "GitRepoStatForksValue";
const TEST_ID_REVS = "GitRepoStatReviewsValue";
const TEST_ID_RATING = "GitRepoStatRatingValue";

describe("RepositoryList", () => {
  describe("RepositoryListContainer", () => {
    /*
      This test ensures that the correct data is displayed
      by the correct kind of component based on TestIDs.
      It ignores the actual order of the data in case it changes.

      On the other hand, the test does not ensure that the
      data of one repo is presented as a single repository,
      as the values can be anywhere in the repository list.

      It is expected that
        * the repository data fields have unique values
        * the numberToKiloString() function works correctly.
    */
    it("renders repository information correctly", () => {
      const component =
        <RepositoryListContainer
          repositories={TEST_REPOS} />;

      const { getByText } = render(component);

      const expectValueToBeInControlWithTestId = (value, testId) => {
        let testValue = numberToKiloString(value);
        const component = getByText(testValue);
        expect(component).not.toBeNull();
        expect(component).toHaveProp(PROP_TEST_ID, testId);
      };

      for (let i=0; i<TEST_REPOS.edges.length; i++) {
        const node = TEST_REPOS.edges[i].node;

        const valueTestIdPairs = [
          [node.fullName,         TEST_ID_NAME],
          [node.description,      TEST_ID_DESCR],
          [node.language,         TEST_ID_LANG],
          [node.stargazersCount,  TEST_ID_STARS],
          [node.forksCount,       TEST_ID_FORKS],
          [node.reviewCount,      TEST_ID_REVS],
          [node.ratingAverage,    TEST_ID_RATING],
        ];

        valueTestIdPairs.forEach(([value, testId]) => {
          expectValueToBeInControlWithTestId(value, testId);
        });
      }
    });
  });
});










