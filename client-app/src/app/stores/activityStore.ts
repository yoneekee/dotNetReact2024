import { action, makeObservable, observable } from "mobx";

export default class ActivityStore {
  title = "hello from MobX!";

  constructor() {
    makeObservable(this, {
      title: observable,
      setTitle: action.bound,
    });
  }

  setTitle = () => {
    this.title = this.title + "!";
  };
}
