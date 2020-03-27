import * as React from 'react';
import {MemberTableComponent} from './components/member-table.component';
import {MemberEntity} from '../../model/member';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

interface Props {
  members: Array<MemberEntity>;
  loadMembers: (organization: string) => any;
}

export const MemberCollectionComponent = (props : Props) => {

  const { members, loadMembers } = props;

  const [ organization, setOrganization ] = React.useState<string>('lemoncode');

  const updateOrganization = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOrganization(event.target.value);
  };

  return (
  <div>
      <div>
        <TextField id="standard-basic" label="Members" value={organization} 
          onChange={updateOrganization}/>
        <div >
          <Button variant="contained" size="small" color="primary" 
            onClick={()=>loadMembers(organization)}>
            Load
          </Button>
        </div>
      </div>

      <MemberTableComponent members={members}/>
  </div>
  );
}
