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
