import * as React from 'react';

import { VizTypes } from 'js/data/types';

import * as styles from './viz_selector.css';

interface VizSelectorProps {
  selectedViz?: VizTypes;
  vizTypes: VizTypes[];
  onVizSelection?(vizType: VizTypes): void;
}

export const VizSelector: React.SFC<VizSelectorProps> = props => {
  return (
    <div className={styles.container}>
      {props.vizTypes.map(vizType => (
        <VizOption
          key={vizType}
          vizType={vizType}
          disabled={props.selectedViz === vizType}
          onClick={props.onVizSelection}
        />
      ))}
    </div>
  );
};

interface VizOptionProps {
  vizType: VizTypes;
  disabled?: boolean;
  onClick?(vizType: VizTypes): void;
}

const VizOption: React.SFC<VizOptionProps> = props => (
  <button
    className={styles.option}
    onClick={() => props.onClick(props.vizType)}
    disabled={props.disabled}
  >
    {props.vizType}
  </button>
);
