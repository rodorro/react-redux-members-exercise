import { actionsEnums } from '../common/actionsEnums';

export const updateFilter = (organization: string) => {
  return {
    type: actionsEnums.UPDATE_FILTER,
    payload: organization
  }
}
