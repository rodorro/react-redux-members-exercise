import { connect } from 'react-redux';
import { memberRequest } from '../../actions/member.request';
import { MemberCollectionComponent } from './member-collection.component';
import { State } from '../../reducers';

const mapStateToProps = (state  :State) => {
  return{
      members: state.memberReducer
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadMembers: () => {return dispatch(memberRequest())}
  };
}

export const MemberCollectionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberCollectionComponent);
