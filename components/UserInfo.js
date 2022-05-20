import { profileName, profilePosition } from "../utils/constants.js";

export class UserInfo {

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
};
