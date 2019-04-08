import * as React from 'react';

interface AudioProps {
  src: string;
}

export class Audio extends React.Component<AudioProps, {}> {
  render() {
    return <audio controls src={this.props.src} preload="auto" />;
  }
}
