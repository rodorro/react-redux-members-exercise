import * as React from "react";
import { MemberEntity, createDefaultMemberEntity } from "../../model/member";
import { useStyles } from "./member-edit.component.style";
import { useParams } from "react-router-dom";
import { MemberCardComponent } from "./components/member-card.component";

interface Props {
    loadMember: (id: string) => Promise<MemberEntity>;
}

export const MemberEditComponent = (props: Props) => {
    
    const { loadMember } = props;
    const { id } = useParams();
    const [ member, setMember ] = React.useState<MemberEntity>(createDefaultMemberEntity());

    React.useEffect(() => {
        loadMember(id).then(member => setMember(member));
    }, []);

    return (
        <MemberCardComponent member={member} />
    );
};