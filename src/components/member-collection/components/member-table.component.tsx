import * as React from 'react';
import {MemberEntity} from '../../../model/member';
import {MemberRowComponent} from './member-row.component';
import { useStyles } from '../member-collection.component.style';

interface Props {
    members: MemberEntity[];
}

export const MemberTableComponent = (props: Props) => {

  const classes = useStyles({});
  
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
            </tr>
          </thead>
          <tbody>
            {
                props.members.map((member: MemberEntity) =>
                    <MemberRowComponent key={member.id} member={member}/>
                )
            }
          </tbody>
        </table>
      </div>
  );
}
