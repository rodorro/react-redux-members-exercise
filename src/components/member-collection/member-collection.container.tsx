import { connect } from 'react-redux';
import { memberRequest } from '../../actions/member.request';
import { updateFilter } from '../../actions/update.filter';
import { memberEditRequest } from '../../actions/member-edit.request';
import { MemberCollectionComponent } from './member-collection.component';
import { State } from '../../reducers';

const mapStateToProps = (state: State) => {
  return {
      members: state.memberReducer,
      organization: state.filterReducer
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadMembers: (organization: string) => {
      return dispatch(memberRequest(organization))
    },
    updateFilter: (organization: string) => {
      return dispatch(updateFilter(organization));
    }
  };
}

export const MemberCollectionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberCollectionComponent);
