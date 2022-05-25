export class UserInfo {
  constructor(profileNameSelector, profilePositionSelector) {
    this._profileName = document.querySelector(profileNameSelector);
    this._profilePosition = document.querySelector( profilePositionSelector);
  };

  getUserInfo() {
    const userInfo = {
      profileNameInput: this._profileName.textContent,
      profileInfoInput: this._profilePosition.textContent
    }
    return userInfo
  };

  setUserInfo(name, position) {
    this._profileName.textContent = name;
    this._profilePosition.textContent = position;
  };
};
