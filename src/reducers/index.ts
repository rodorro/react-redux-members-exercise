import { combineReducers} from 'redux';
import { memberReducer, memberState } from './member.reducer';

export interface State {  
  memberReducer : memberState;
};

export const reducers = combineReducers<State>({
  memberReducer,
});
