import * as React from 'react';
import * as ReactDom from 'react-dom';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { App } from './components/app';

injectTapEventPlugin();

const state: State = {
  openAddModal: false,
  filter: 'All',
  tasks: [
    { key: 0, isComplete: false, task: 'task1' },
    { key: 1, isComplete: true, task: 'task2' },
    { key: 2, isComplete: false, task: 'task3!!!!!!' },
    { key: 10, isComplete: true, task: 'task' },
    { key: 11, isComplete: true, task: 'task' },
    { key: 12, isComplete: true, task: 'task' },
    { key: 13, isComplete: true, task: 'task' },
    { key: 14, isComplete: true, task: 'task' },
    { key: 15, isComplete: true, task: 'task' },
    { key: 16, isComplete: true, task: 'task' },
    { key: 17, isComplete: true, task: 'task' },
    { key: 18, isComplete: true, task: 'task' },
    { key: 19, isComplete: true, task: 'task' },
  ],
};

ReactDom.render(
  <MuiThemeProvider>
    <App state={state}/>
  </MuiThemeProvider>,
  document.getElementById('app'),
);
