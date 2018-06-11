import Konva from 'konva';
import {
  getRandom
} from './helpers';

class Developer {
  constructor(options) {
    this._stage = options.stage;
    this._layer = options.layer;
    this._initEntity();
    this._initAnim();
    this.start();
    this.speed = 5;
    this.dx = this.speed;
    this.dy = this.speed;
    return this.entity;
  }
  start() {
    this.anim.start();
  }
  stop() {
    this.anim.stop();
  }
  _initEntity() {
    this.entity = new Konva.Circle({
      x: getRandom(0, this._stage.getWidth() - 60),
      y: getRandom(0, this._stage.getHeight() - 60),
      radius: 30,
      fill: 'red',
      stroke: 'black',
      strokeWidth: 4
    });
  }
  _initAnim() {
    this.anim = new Konva.Animation(() => {
      // X direction
      if (this.entity.getAttr('x') >= this._stage.getWidth() - this.entity.getAttr('radius')) {
        this.dx = -this.dx;
      }
      if (this.entity.getAttr('x') <= this.entity.getAttr('radius')) {
        this.dx = -this.dx;
      }
      // Y direction
      if (this.entity.getAttr('y') >= this._stage.getHeight() - this.entity.getAttr('radius')) {
        this.dy = -this.dy;
      }
      if (this.entity.getAttr('y') <= this.entity.getAttr('radius')) {
        this.dy = -this.dy;
      }
      this.entity.setAttr('x', this.entity.getAttr('x') + this.dx);
      this.entity.setAttr('y', this.entity.getAttr('y') + this.dy);
    }, this._layer);
  }
}

export default Developer;