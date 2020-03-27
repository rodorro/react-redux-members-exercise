import { combineReducers} from 'redux';
import { memberReducer, memberState } from './member.reducer';
import { filterReducer, organizationState } from './member-filter.reducer';
import { memberEditReducer, memberEditState } from './member-edit.reducer';

export interface State {  
  memberReducer : memberState;
  filterReducer : organizationState;
  memberEditReducer: memberEditState;
};

export const reducers = combineReducers<State>({
  memberReducer,
  filterReducer,
  memberEditReducer
});
