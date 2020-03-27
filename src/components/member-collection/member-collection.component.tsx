import * as React from 'react';
import {MemberTableComponent} from './components/member-table.component';
import {MemberEntity} from '../../model/member'

interface Props {
  members: Array<MemberEntity>;
  loadMembers: () => any;
}

export const MemberCollectionComponent = (props : Props) => {
  return (
  <div>
      <MemberTableComponent members={props.members}/>
      <br/>
      <input type="submit"
              value="load"
              className="btn btn-default"
              onClick={() => props.loadMembers()}
      />
  </div>
  );
}
