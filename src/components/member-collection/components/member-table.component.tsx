import * as React from 'react';
import {MemberEntity} from '../../../model/member';
import {MemberRowComponent} from './member-row.component';
import { useStyles } from '../member-collection.component.style';

interface Props {
    members: MemberEntity[];
    onMemberEdit: (id: number) => void;
}

export const MemberTableComponent = (props: Props) => {

  const classes = useStyles({});

  const { members, onMemberEdit } = props;
  
  return (
      <div className={classes.divTable} >
        <table className={classes.table}>
          <thead>
            <tr>
              <th>
                Avatar
              </th>
              <th>
                Id
              </th>
              <th>
                Name
              </th>
              <th>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {
                members.map((member: MemberEntity) =>
                    <MemberRowComponent key={member.id} member={member} onMemberEdit={onMemberEdit}/>
                )
            }
          </tbody>
        </table>
      </div>
  );
}
