import * as React from 'react';
import { FloatingActionButton } from 'material-ui';
import { ContentAdd } from 'material-ui/svg-icons';


const style: React.CSSProperties = {
  position: 'fixed',
  bottom: 0,
  right: 0,
  margin: 20,
  zIndex: 10,
};

const AddButton = () => (
  <FloatingActionButton style={style}>
    <ContentAdd/>
  </FloatingActionButton>
);

export { AddButton };
