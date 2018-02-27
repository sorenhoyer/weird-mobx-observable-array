import Queue from './Queue';
import {observable} from 'mobx';

export default class Sensor {
  @observable queue;

  constructor(n) {
    this.n = n;
    this.queue = new Queue(this.n);
  }
  add(measurement) {
    this.queue.add(measurement);
  }
  
  size() {
    return this.queue.size;
  }
}