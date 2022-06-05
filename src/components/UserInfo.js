import { profileName, profilePosition, profileAvatar } from '../utils/constants.js';

export class UserInfo {
  // constructor(profileNameSelector, profilePositionSelector) {
  //   this._profileName = document.querySelector(profileNameSelector);
  //   this._profilePosition = document.querySelector( profilePositionSelector);
  // };

  getUserInfo() {
    const userInfo = {
      profileNameInput: profileName.textContent,
      profileInfoInput: profilePosition.textContent
    }
    return userInfo
  };

  setUserInfo(name, position) {
    profileName.textContent = name;
    profilePosition.textContent = position;
  };

  setUserAvatar(link) {
    profileAvatar.src = link
  };
};
