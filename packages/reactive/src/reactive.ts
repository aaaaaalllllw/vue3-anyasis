import { isObject } from "@vue/shared";

const mutableHandlers = {
  get(target, key, receiver) {
    return Reflect.get(target, key, receiver);
  },
  set(target, key, value, receiver) {
    return Reflect.set(target, key, value, receiver);
  },
};
export function reactive(target) {
  //不对非对象类型
  if (!isObject(target)) {
    return target;
  }

  //代理，通过代理对象操作属性，会在源对象上进行获取
  const proxy = new Proxy(target, mutableHandlers);
  return proxy;
}
