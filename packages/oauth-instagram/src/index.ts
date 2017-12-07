import * as rp from 'request-promise';

class AccountsOAuthInstagram {
  public async authenticate(params) {
    let data = await rp(`https://api.instagram.com/v1/users/self/?access_token=${params.access_token}`);
    data = JSON.parse(data).data;
    return {
      id: data.id,
      username: data.username,
      profilePicture: data.profile_picture,
      accessToken: params.access_token,
    };
  }
}

export default AccountsOAuthInstagram;