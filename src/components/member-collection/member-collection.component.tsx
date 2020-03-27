import * as React from 'react';
import {MemberTableComponent} from './components/member-table.component';
import {MemberEntity} from '../../model/member';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useStyles } from './member-collection.component.style';

interface Props {
  members: Array<MemberEntity>;
  loadMembers: (organization: string) => any;
  organization: string;
  updateFilter: (organzation: string) => void;
}

export const MemberCollectionComponent = (props : Props) => {

  const classes = useStyles({});
  
  const { members, loadMembers, organization, updateFilter } = props;

  const updateOrganization = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateFilter(event.target.value);
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

      <MemberTableComponent members={members}/>
  </div>
  );
}
