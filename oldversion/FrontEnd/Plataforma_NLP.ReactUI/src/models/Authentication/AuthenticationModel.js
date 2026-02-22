import { User } from './User';

export class AuthenticationModel {
  constructor(
    isAuthenticated = false,
    login = (username, password) => {},
    loginWindows = (username, password) => {},
    logout = () => {},
    user = new User(),
  ) {
    this.user = user;
    this.isAuthenticated = isAuthenticated;
    this.login = login;
    this.loginWindows = loginWindows;
    this.logout = logout;
  }
}
