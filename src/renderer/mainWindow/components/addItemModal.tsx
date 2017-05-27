import * as React from 'react';
import {
  Dialog,
  RaisedButton,
  TextField,
} from 'material-ui';

interface AddItemModalPropsType {
  open: boolean;
}

const AddItemMpdal = (props: AddItemModalPropsType) => {
  const actions = [
    (
      <RaisedButton
        label="Cancel"
        style={{ margin: 12 }}
      />
    ),
    (
      <RaisedButton
        label="Add"
        primary={true}
        style={{ margin: 12 }}
      />
    ),
  ];
  return (
    <Dialog
      title="Add TODO item"
      modal={true}
      actions={actions}
      open={props.open}
    >
      <TextField floatingLabelText="Label"/><br/>
    </Dialog>
  );
};

export { AddItemMpdal };
