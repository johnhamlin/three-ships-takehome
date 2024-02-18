export const initialState = {
  minimumStarRating: 0,
  servicesRequired: [],
  sortByDistance: false,
};

interface ListState {
  minimumStarRating: number;
  servicesRequired: string[];
  sortByDistance: boolean;
}

type ListReducerAction =
  | { type: 'UPDATE_MINIMUM_STAR_RATING'; payload: number }
  | { type: 'ADD_SERVICE_REQUIRED'; payload: string }
  | { type: 'TOGGLE_SORT_BY_DISTANCE' };

export default function listReducer(
  state: ListState,
  action: ListReducerAction,
) {
  switch (action.type) {
    case 'UPDATE_MINIMUM_STAR_RATING':
      console.log('action.payload', action.payload);

      return {
        ...state,
        minimumStarRating: action.payload,
      };
    case 'ADD_SERVICE_REQUIRED':
      return {
        ...state,
        servicesRequired: [...state.servicesRequired, action.payload],
      };
    case 'TOGGLE_SORT_BY_DISTANCE':
      return {
        ...state,
        sortByDistance: !state.sortByDistance,
      };
    default:
      return state;
  }
}