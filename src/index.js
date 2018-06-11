import './style.css';
import Konva from 'konva';
import Developer from './developer';

const stage = new Konva.Stage({
  container: 'container',
  width: 800,
  height: 400
});

const layer = new Konva.Layer();
const devOptions = {
  stage: stage,
  layer: layer
};

const developer = new Developer(devOptions);
layer.add(developer);
stage.add(layer);