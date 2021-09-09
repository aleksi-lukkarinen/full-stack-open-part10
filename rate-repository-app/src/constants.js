export const PATH_ROOT = "/";
export const PATH_SIGN_IN = PATH_ROOT + "signIn";
export const PATH_SIGN_UP = PATH_ROOT + "signUp";
export const PATH_REPO_DETAILS = PATH_ROOT + "repoDetails";
export const PATH_REPO_DETAILS_PARAM = PATH_REPO_DETAILS + "/:repoId";
export const PATH_CREATE_REVIEW = PATH_ROOT + "createReview";

export const USERNAME_MIN_LENGTH = 1;
export const USERNAME_MAX_LENGTH = 30;
export const PASSWORD_MIN_LENGTH = 5;
export const PASSWORD_MAX_LENGTH = 50;


export const SORT_ORDER_CREATION = "CREATED_AT";
export const SORT_ORDER_RATING = "RATING_AVERAGE";

export const SORT_DIRECTION_ASCENDING = "ASC";
export const SORT_DIRECTION_DESCENDING = "DESC";

export const REPO_LIST_SORTING_OPTIONS = [
  {
    buttonLabel: "",
    buttonIcon: "clock-outline",
    menuLabel: "Latest first",
    order: SORT_ORDER_CREATION,
    direction: SORT_DIRECTION_DESCENDING,
  },
  {
    buttonLabel: "▼",
    buttonIcon: "star",
    menuLabel: "Highest-rated first",
    order: SORT_ORDER_RATING,
    direction: SORT_DIRECTION_DESCENDING,
  },
  {
    buttonLabel: "▲",
    buttonIcon: "star",
    menuLabel: "Lowest-rated first",
    order: SORT_ORDER_RATING,
    direction: SORT_DIRECTION_ASCENDING,
  },
];
