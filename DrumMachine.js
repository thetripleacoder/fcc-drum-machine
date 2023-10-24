const drumPadDataArr = [
  {
    btnId: 'Heater 1',
    btnTxt: 'Q',
    audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
  },
  {
    btnId: 'Heater 2',
    btnTxt: 'W',
    audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
  },
  {
    btnId: 'Heater 3',
    btnTxt: 'E',
    audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
  },
  {
    btnId: 'Heater 4',
    btnTxt: 'A',
    audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
  },
  {
    btnId: 'Clap',
    btnTxt: 'S',
    audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
  },
  {
    btnId: 'Open-HH',
    btnTxt: 'D',
    audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
  },
  {
    btnId: "Kick-n'-Hat",
    btnTxt: 'Z',
    audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
  },
  {
    btnId: 'Kick',
    btnTxt: 'X',
    audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
  },
  {
    btnId: 'Closed-HH',
    btnTxt: 'C',
    audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
  },
];

const DrumPad = (props) => {
  return (
    <button
      className='drum-pad'
      id={props.btnId}
      onClick={props.handleClick}
      onKeyPress={props.handleKeyPress}
    >
      {props.btnTxt}
      <audio src={props.audioSrc} className='clip' id={props.btnTxt}></audio>
    </button>
  );
};

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
  }

  // Change code below this line
  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  handleClick(data) {
    let audioEl = document.getElementById(data.btnTxt);
    audioEl.play();
    let displayEl = document.querySelector('#display');
    displayEl.innerHTML = data.btnId;
  }

  handleKeyPress(event) {
    console.log(event.key);
    let audioEl = document.getElementById(event.key.toUpperCase());
    audioEl.play();
    let displayEl = document.querySelector('#display');
    let audioTitle = drumPadDataArr.find(
      (data) => data.btnTxt === event.key.toUpperCase()
    ).btnId;
    displayEl.innerHTML = audioTitle;
  }

  render() {
    return (
      <div>
        <p id='display'>Audio Clip Title Here</p>
        {drumPadDataArr.map((data) => {
          return (
            <DrumPad
              key={data.btnTxt}
              btnId={data.btnId}
              btnTxt={data.btnTxt}
              audioSrc={data.audioSrc}
              handleClick={() => this.handleClick(data)}
            ></DrumPad>
          );
        })}
      </div>
    );
  }
}

// Change code below this line
ReactDOM.render(<DrumMachine />, document.getElementById('drum-machine'));
