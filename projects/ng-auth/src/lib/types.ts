export interface IAuthSettings {
  authority: string;
  client_id: string;
  redirect_uri: string;
  post_logout_redirect_uri: string;
  response_type: string;
  scope: string;
  filterProtocolClaims: boolean;
  loadUserInfo: boolean;
  silent_redirect_uri: string;
}

export class DefaultAuthSettings implements IAuthSettings {
  constructor() { }

  authority = '';
  client_id = '';
  redirect_uri = '';
  post_logout_redirect_uri = '';
  response_type = '';
  scope = '';
  filterProtocolClaims = true;
  loadUserInfo = false;
  silent_redirect_uri = '';
}
