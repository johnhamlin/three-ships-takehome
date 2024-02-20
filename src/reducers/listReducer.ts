interface ListState {
  minimumStarRating: number;
  servicesRequired: string[];
  sortByDistance: boolean;
}

type ListReducerAction =
  | { type: 'UPDATE_MINIMUM_STAR_RATING'; payload: number }
  | {
      type: 'ADD_SERVICE_REQUIRED';
      payload: SelectOptionType[];
    }
  | { type: 'TOGGLE_SORT_BY_DISTANCE'; payload: boolean };

export default function listReducer(
  state: ListState,
  action: ListReducerAction,
) {
  switch (action.type) {
    case 'UPDATE_MINIMUM_STAR_RATING':
      return {
        ...state,
        minimumStarRating: action.payload,
      };
    case 'ADD_SERVICE_REQUIRED':
      return {
        ...state,
        servicesRequired: action.payload.map((option) => option.value),
      };
    case 'TOGGLE_SORT_BY_DISTANCE':
      return {
        ...state,
        sortByDistance: action.payload,
      };
    default:
      return state;
  }
}
