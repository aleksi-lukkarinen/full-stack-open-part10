import AsyncStorage from "@react-native-async-storage/async-storage";



const ID_ACCESS_TOKEN = "access-token";

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
    this.accessTokenId =
        `${this.namespace}:${ID_ACCESS_TOKEN}`;
  }

  async getAccessToken() {
    const token =
      await AsyncStorage.getItem(
        this.accessTokenId);

    return token;
  }

  async setAccessToken(accessToken) {
    await AsyncStorage.setItem(
      this.accessTokenId, accessToken);
  }

  async removeAccessToken() {
    await AsyncStorage.removeItem(
      this.accessTokenId);
  }
}

export default AuthStorage;
