import {observable} from 'mobx';

export default class Queue {
  @observable data;
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.size = 0;
    this.data = [];
  }
  
  add(measurement) {
    let removedItem = undefined;
    if(this.size >= this.maxSize) {
      let temp = this.data[0];
      removedItem = temp && temp.y ? temp.y+'' : undefined;
      this.data.shift();
    }
    
    this.data.push(measurement);
    
    if (removedItem === undefined && this.size < this.maxSize) {
      this.size++;
    }
    
    return removedItem;
  }
}