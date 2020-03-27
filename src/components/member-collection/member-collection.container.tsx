import { connect } from 'react-redux';
import { memberRequest, updateFilter } from '../../actions/member.request';
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
