import * as React from 'react';

interface AudioProps {
  className?: string;
  src: string;
  onDataChange?(data: number[]): void;
}

export class Audio extends React.Component<AudioProps, {}> {
  private audioElement: React.RefObject<HTMLAudioElement>;
  private audioContext: AudioContext;
  private analyser: AnalyserNode;

  constructor(props: AudioProps) {
    super(props);
    this.audioElement = React.createRef<HTMLAudioElement>();
    this.audioContext = new AudioContext();
    this.analyser = this.audioContext.createAnalyser();
  }

  componentDidMount() {
    const audio = this.audioElement.current;
    audio.play();
    this.connectAnalyser();
    this.readAudioData();
  }

  private connectAnalyser() {
    const { analyser, audioContext } = this;
    const audio = this.audioElement.current;
    const audioSrc = audioContext.createMediaElementSource(audio);
    audioSrc.connect(analyser);
    audioSrc.connect(audioContext.destination);
    this.readAudioData();
  }

  private readAudioData = () => {
    requestAnimationFrame(this.readAudioData);
    const dataArr = new Uint8Array(this.analyser.frequencyBinCount);
    this.analyser.getByteFrequencyData(dataArr);
    if (dataArr && this.props.onDataChange) {
      const convertedArr = Array.prototype.slice.call(dataArr);
      this.props.onDataChange(convertedArr);
    }
  };

  render() {
    return (
      <audio
        className={this.props.className}
        src={this.props.src}
        ref={this.audioElement}
        controls
      />
    );
  }
}
