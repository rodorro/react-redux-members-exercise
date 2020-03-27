import { actionsEnums } from '../common/actionsEnums';
import { MemberEntity } from '../model/member';
import { memberAPI } from '../api/member.api';

export const memberEditRequestCompleted = (member: MemberEntity) => {
  return {
    type: actionsEnums.MEMBER_EDIT_COMPLETED,
    payload: member
  }
}

export const memberEditRequest = (id: string) => (dispatcher) => {
  const promise = memberAPI.getMember(id);

  promise.then(
    (data) => dispatcher(memberEditRequestCompleted(data))
  );

  return promise;
}
