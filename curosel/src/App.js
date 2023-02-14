import './App.css';
import ImageSlider from './components/ImageSlider';
import { Sliderdata } from './components/Sliderdata';

function App() {
  return <ImageSlider slides={Sliderdata} />;
}

export default App;
