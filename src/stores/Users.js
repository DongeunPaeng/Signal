import {observable, action} from 'mobx';
import AsyncStorage from '@react-native-async-storage/async-storage';

class User {
  @observable token = '';
  @observable name = '';
  @observable phone = '';

  @action
  setUser(token, name, phone) {
    this.token = token;
    this.name = name;
    this.phone = phone;
    const user = {token, name, phone};
    try {
      AsyncStorage.setItem('user', JSON.stringify(user));
    } catch (err) {
      console.log(err);
    }
  }
}

export default new User();
