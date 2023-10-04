'use strict';

const e = React.createElement;
const audioClips = [
  {
    id: 'Q',
    text: 'Heater 1',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
  },
  {
    id: 'W',
    text: 'Heater 2',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
  },
  {
    id: 'E',
    text: 'Heater 3',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
  },
  {
    id: 'A',
    text: 'Heater 4',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
  },
  {
    id: 'S',
    text: 'Clap',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
  },
  {
    id: 'D',
    text: 'Open-HH',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
  },
  {
    id: 'Z',
    text: "Kick-n'-Hat",
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
  },
  {
    id: 'X',
    text: 'Kick',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
  },
  {
    id: 'C',
    text: 'Closed-HH',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
  },
];

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    let element = (
      <div>
        <div id='display'></div>
        <div class='container'>
          <div class='row'>
            <button class='drum-pad'>
              <audio
                src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
                class='clip'
                id='Q'
              ></audio>
              Q
            </button>
            <button class='drum-pad'>
              <audio
                src='hhttps://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
                class='clip'
                id='W'
              ></audio>
              W
            </button>
            <button class='drum-pad'>
              <audio
                src='https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
                class='clip'
                id='E'
              ></audio>
              E
            </button>
          </div>
          <div class='row'>
            <button class='drum-pad'>
              <audio
                src='https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
                class='clip'
                id='A'
              ></audio>
              A
            </button>
            <button class='drum-pad'>
              <audio
                src='https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
                class='clip'
                id='S'
              ></audio>
              S
            </button>
            <button class='drum-pad'>
              <audio
                src='https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
                class='clip'
                id='D'
              ></audio>
              D
            </button>
          </div>
          <div class='row'>
            <button class='drum-pad'>
              <audio
                src='https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
                class='clip'
                id='Z'
              ></audio>
              Z
            </button>
            <button class='drum-pad'>
              <audio
                src='https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
                class='clip'
                id='X'
              ></audio>
              X
            </button>
            <button class='drum-pad'>
              <audio
                src='https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
                class='clip'
                id='C'
              ></audio>
              C
            </button>
          </div>
        </div>
      </div>
    );
    return element;
  }
}

const domContainer = document.querySelector('#drum-machine');
const root = ReactDOM.createRoot(domContainer);
root.render(e(DrumMachine));
