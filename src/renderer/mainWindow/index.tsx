import * as React from 'react';
import * as ReactDom from 'react-dom';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import { App } from './app';

injectTapEventPlugin();

ReactDom.render(<App/>, document.getElementById('app'));
