import { reactive } from "vue";

interface State {}

class Store {
  // 被保护的状态
  protected state: State;

  constructor(initialState: State) {
    this.state = reactive(initialState);
  }

  public getState(): State {
    return this.state;
  }
}

const store = new Store({ 1: { id: 1, title: "今天" } });
store.getState();



export const userStore =  () => store;