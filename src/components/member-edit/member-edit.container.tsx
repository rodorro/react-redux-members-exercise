import { MemberEditComponent } from "./member-edit.component";
import { State } from "../../reducers";
import { memberEditRequest } from "../../actions/member-edit.request";
import { connect } from "react-redux";

const mapStateToProps = (state: State) => {
    return {
        member: state.memberEditReducer
    };
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      loadMember: (id: string) => {
        return dispatch(memberEditRequest(id))
      },
    };
  }
  
  export const MemberEditContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(MemberEditComponent);