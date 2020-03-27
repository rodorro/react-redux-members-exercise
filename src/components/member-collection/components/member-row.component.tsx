import * as React from 'react';
import {MemberEntity} from '../../../model/member';
import { Button } from '@material-ui/core';
import { useStyles } from '../member-collection.component.style';

interface Props  {
  member : MemberEntity;
  onMemberEdit: (id: number) => void;
}

export const MemberRowComponent = (props: Props) => {
  
  const classes = useStyles({});

  const { member, onMemberEdit } = props;

  const handleClick = () => {
    onMemberEdit(member.id);
  }

   return (
     <tr>
       <td>
         <img src={props.member.avatar_url} className="avatar" style={{maxWidth: '200px'}}/>
       </td>
       <td>
         <span>{props.member.id}</span>
       </td>
       <td>
         <span>{props.member.login}</span>
       </td>
       <td>
       <Button variant="contained" size="small" color="primary" 
            className={classes.margin} onClick={handleClick}>
            Edit
        </Button>         
       </td>
     </tr>
   );
}
