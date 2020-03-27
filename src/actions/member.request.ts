import { actionsEnums } from '../common/actionsEnums';
import { MemberEntity } from '../model/member';
import { memberAPI } from '../api/member.api';

export const memberRequestCompleted = (members: MemberEntity[]) => {
  return {
    type: actionsEnums.MEMBER_REQUEST_COMPLETED,
    payload: members
  }
}

export const memberRequest = (organization: string) => (dispatcher) => {
  const promise = memberAPI.getAllMembers(organization);

  promise.then(
    (data) => dispatcher(memberRequestCompleted(data))
  );

  return promise;
}

export const updateFilter = (organization: string) => {
  return {
    type: actionsEnums.UPDATE_FILTER,
    payload: organization
  }
}
