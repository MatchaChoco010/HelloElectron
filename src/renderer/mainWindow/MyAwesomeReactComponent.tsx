import * as React from 'react';
import { RaisedButton } from 'material-ui';

const MyAwesomeReactComponent = (props: {name: string}) => (
  <RaisedButton label={props.name} />
);

export { MyAwesomeReactComponent };
