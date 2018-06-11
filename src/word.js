import Konva from 'konva';

class Word extends Konva.Text {
  constructor(config, layer, stage) {
    super();
    this._stage = stage;
    this._layer = layer;
    this.setAttr('x', 150);
    this.setAttr('y', 150);
    this.setAttr('fill', 'red');
    this.setAttr('text', config.text || 'Hello world');
    this.setAttr('fontSize', config.fontSize || 16);
    // this.setAttr('rotation', config.rotation || -90);
    this.speed = 5;
    this.dx = this.speed;
    this.dy = this.speed;
    this._initAnim();
    this.start();
  }

  start() {
    this.anim.start();
  }

  _initAnim() {
    this.anim = new Konva.Animation(() => {
      // X direction
      // this.setAttr('rotation', this.getAttr('rotation') + 3);
      if (this.getAttr('x') >= this._stage.getWidth() - this.getAttr('width')) {
        this.dx = -this.dx;
      }
      if (this.getAttr('x') <= 0) {
        this.dx = -this.dx;
      }
      // Y direction
      if (this.getAttr('y') >= this._stage.getHeight() - this.getAttr('height')) {
        this.dy = -this.dy;
      }
      if (this.getAttr('y') <= 0) {
        this.dy = -this.dy;
      }

      this.setAttr('x', this.getAttr('x') + this.dx);
      this.setAttr('y', this.getAttr('y') + this.dy);
    }, this._layer);
  }
}

export default Word;