import { combineReducers} from 'redux';
import { memberReducer, memberState } from './member.reducer';
import { filterReducer, organizationState } from './member.filter.reducer';

export interface State {  
  memberReducer : memberState;
  filterReducer : organizationState;
};

export const reducers = combineReducers<State>({
  memberReducer,
  filterReducer
});
