import { DrumPad } from './components/drumPad';
import { LoopPad } from './components/loopPad';
import { Display } from './components/display';
import './custom.scss';

function App() {
  return (
    <div className='position-relative'>
      <div className='position-fixed top-50 start-50 translate-middle'>
          <div className='d-flex justify-content-center align-items-center bg-wood-dark bg-gradient border border-1 border-fabric-grill rounded py-2 px-4 shadow-lg'>
              <div 
              id='drum-machine' 
              className='container row'>
              <DrumPad className="col-4" />
              <Display className="col-4 pt-3"/>
              <LoopPad className="col-4 pt-3" />
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
