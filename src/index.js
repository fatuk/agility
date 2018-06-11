import './style.css';
import Konva from 'konva';
import Word from './word';

const stage = new Konva.Stage({
  container: 'container',
  width: 800,
  height: 400
});

const layer = new Konva.Layer();
const options = {
  text: 'Agility',
  fontSize: 20,
  rotation: 45
};

const word = new Word(options, layer, stage);
layer.add(word);
stage.add(layer);