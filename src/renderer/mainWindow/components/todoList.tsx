import * as React from 'react';
import {
  List,
  ListItem,
  Divider,
  Checkbox,
  IconButton,
} from 'material-ui';
import {
  ActionDone,
  ToggleRadioButtonUnchecked,
  ActionDelete,
} from 'material-ui/svg-icons';

interface TodoItemPropsType {
  key: number;
  isComplete: boolean;
  task: string;
}
const TodoItem = (props: TodoItemPropsType) => {
  const checkbox = (
    <Checkbox
      checkedIcon={<ActionDone/>}
      uncheckedIcon={<ToggleRadioButtonUnchecked/>}
      checked={props.isComplete}
    />
  );
  const deleteButton = (
    <IconButton>
      <ActionDelete/>
    </IconButton>
  );
  return (
    <div style={{ width: '80%', margin: 'auto' }}>
      <ListItem
        primaryText={props.task}
        leftCheckbox={checkbox}
        rightIconButton={deleteButton}
      />
      <Divider/>
    </div>
  );
};

interface TodoListPropsType {
  tasks: TodoItemPropsType[];
}
const listStyle: React.CSSProperties = {
  height: 'calc(100vh - 80px)',
  overflowY: 'auto',
};
const TodoList = (props: TodoListPropsType) => {
  const items = props.tasks.map(task => <TodoItem {...task}/>);
  return (
    <List style={listStyle}>
      {items}
    </List>
  );
};

export { TodoList };
