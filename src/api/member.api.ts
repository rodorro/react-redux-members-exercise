import {MemberEntity, createDefaultMemberEntity } from '../model/member';

class MemberAPI {

  // Just return a copy of the mock data
  getAllMembers(organizationName : string) : Promise<MemberEntity[]> {
    const gitHubMembersUrl : string = `https://api.github.com/orgs/${organizationName}/members`;

    return fetch(gitHubMembersUrl)
    .then((response) => this.checkStatus(response))
    .then((response) => this.parseJSON(response))
    .then((data) => this.resolveMembers(data))
  }

  getMember = (id: string): Promise<MemberEntity> => {
    const gitHubMemberUrl: string = `https://api.github.com/user/${id}`;

    return fetch(gitHubMemberUrl)
        .then(response => this.checkStatus(response))
        .then(response => this.parseJSON(response))
        .then(data => this.resolveMember(data))
  }      

  private checkStatus(response : Response) : Promise<Response> {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    } else {
      let error = new Error(response.statusText);
      throw error;
    }
  }

  private parseJSON(response : Response) : any {
    return response.json();
  }

  private resolveMembers (data : any) : Promise<MemberEntity[]> {

    const members = data.map((gitHubMember) => {
      var member : MemberEntity = createDefaultMemberEntity();

      member.id = gitHubMember.id;
      member.login = gitHubMember.login;
      member.avatar_url = gitHubMember.avatar_url;

      return member;
    });


    return Promise.resolve(members);
  }

  private resolveMember = (gitHubMember: MemberEntity): MemberEntity => {
    var member: MemberEntity = createDefaultMemberEntity();
  
    member.id = gitHubMember.id;
    member.login = gitHubMember.login;
    member.avatar_url = gitHubMember.avatar_url;
  
    return member;
  };
}

export const memberAPI = new MemberAPI();
