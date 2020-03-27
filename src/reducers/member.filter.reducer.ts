import {actionsEnums} from '../common/actionsEnums';

export type organizationState = string;

export const filterReducer =  (state : organizationState = 'lemoncode', action) => {
  switch (action.type) {
    case actionsEnums.UPDATE_FILTER:
      return handleUpdateFilterAction(state, action.payload);
  }

  return state;
};

const handleUpdateFilterAction = (state : organizationState, organization) => {
  return organization;
}
