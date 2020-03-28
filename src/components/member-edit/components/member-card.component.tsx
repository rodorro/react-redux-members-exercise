import * as React from 'react';
import {MemberEntity} from '../../../model/member';
import { Card, CardHeader, Avatar, CardContent, CardMedia, IconButton } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import { useStyles } from '../member-edit.component.style';
import { routes } from '../../../core/router/routes';
import { useHistory } from "react-router-dom";

interface Props  {
  member : MemberEntity;
}

export const MemberCardComponent = (props: Props) => {

    const history = useHistory();
    const classes = useStyles({});

    const { member } = props;

    const onClose = () => {
        history.push(routes.membersCollection);
    }

    return (
        <>
            {member.avatar_url? (
            <Card>
                <CardHeader
                    avatar={<Avatar aria-label="member"></Avatar>}
                    action={
                        <IconButton onClick={onClose}>
                            <CloseIcon />
                        </IconButton>
                    }
                    title={member.id}
                    // subheader={member.company}
                />
                <CardContent>
                    <div className={classes.content}>
                    <CardMedia
                        className={classes.media}
                        image={member.avatar_url}
                        title={String(member.id)}
                    />
                    </div>
                </CardContent>         
            </Card>
            ) : (
                <div>Cargando</div>
            )}
        </>
   );
}
