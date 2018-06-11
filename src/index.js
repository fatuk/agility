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
const developer1 = new Developer(devOptions);
const developer2 = new Developer(devOptions);

layer.add(developer1);
layer.add(developer2);
stage.add(layer);