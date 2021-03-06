import * as React from 'react';
import {MemberTableComponent} from './components/member-table.component';
import {MemberEntity} from '../../model/member';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useStyles } from './member-collection.component.style';
import { linkRoutes } from "../../core/router";
import { useHistory } from "react-router-dom";

interface Props {
  members: Array<MemberEntity>;
  loadMembers: (organization: string) => Promise<MemberEntity[]>;
  organization: string;
  updateFilter: (organzation: string) => void;
  member: MemberEntity;
  loadMember: (id: string) => Promise<MemberEntity>;
}

export const MemberCollectionComponent = (props : Props) => {

  const classes = useStyles({});

  const history = useHistory();
  
  const { members, loadMembers, organization, updateFilter, member, loadMember } = props;

  const updateOrganization = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateFilter(event.target.value);
  };

  const handleMemberEdit = (id: number) => {
    const route = linkRoutes.memberEdit(id);
    history.push(route);
  };

  return (
  <div className={classes.container}>
      <div className={classes.title}>
        <h2> Members Page</h2>
      </div>
      <div className={classes.input}>
        <TextField id="standard-basic" label="Members" value={organization} 
          onChange={updateOrganization}/>
        <div className={classes.button}>
          <Button variant="contained" size="small" color="primary" 
            className={classes.margin} onClick={()=>loadMembers(organization)}>
            Load
          </Button>
        </div>
      </div>

      <MemberTableComponent members={members} onMemberEdit={handleMemberEdit}/>
  </div>
  );
}
