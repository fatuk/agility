import Konva from 'konva';
import {
  getRandom
} from './helpers';

class Developer extends Konva.Circle {
  constructor(options) {
    super();
    this._stage = options.stage;
    this._layer = options.layer;
    this.setAttr('x', getRandom(100, this._stage.getWidth() - 30));
    this.setAttr('y', getRandom(100, this._stage.getHeight() - 30));
    this.setAttr('radius', 30);
    this.setAttr('fill', 'red');
    this.setAttr('stroke', 'black');
    this.setAttr('strokeWidth', 4);
  
    this._initAnim();
    this.start();
    this.speed = 5;
    this.dx = this.speed;
    this.dy = this.speed;
  }
  start() {
    this.anim.start();
  }
  stop() {
    this.anim.stop();
  }
  _initAnim() {
    this.anim = new Konva.Animation(() => {
      // X direction
      if (this.getAttr('x') >= this._stage.getWidth() - this.getAttr('radius')) {
        this.dx = -this.dx;
      }
      if (this.getAttr('x') <= this.getAttr('radius')) {
        this.dx = -this.dx;
      }
      // Y direction
      if (this.getAttr('y') >= this._stage.getHeight() - this.getAttr('radius')) {
        this.dy = -this.dy;
      }
      if (this.getAttr('y') <= this.getAttr('radius')) {
        this.dy = -this.dy;
      }

      this.setAttr('x', this.getAttr('x') + this.dx);
      this.setAttr('y', this.getAttr('y') + this.dy);
    }, this._layer);
  }
}

export default Developer;