import * as React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { MuiTheme } from 'material-ui/styles';
import { WindowBar } from './windowBar';
import { AddItemMpdal } from './addItemModal';
import { AddButton } from './addButton';
import { TodoList } from './todoList';

interface AppPropsType {
  state: State;
}
const App = muiThemeable()(
  (props: AppPropsType & {muiTheme?: MuiTheme}) => (
    <div>
      <WindowBar
        filter={props.state.filter}
        palette={props.muiTheme!.palette!}
      />
      <TodoList tasks={props.state.tasks}/>
      <AddItemMpdal open={props.state.openAddModal}/>
      <AddButton/>
    </div>
  ),
);

export { App };
