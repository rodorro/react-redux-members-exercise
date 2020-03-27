import {actionsEnums} from '../common/actionsEnums';
import {MemberEntity, createDefaultMemberEntity} from '../model/member';

export type memberEditState = MemberEntity;

export const memberEditReducer =  (state : memberEditState = createDefaultMemberEntity(), action) => {
  switch (action.type) {
    case actionsEnums.MEMBER_EDIT:
      return handleMemberEditCompletedAction(state, action.payload);
  }

  return state;
};

const handleMemberEditCompletedAction = (state : memberEditState, member) => {
  return member;
}
