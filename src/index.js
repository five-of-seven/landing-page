import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import registerServiceWorker from './registerServiceWorker';
import myTheme from './ui/theme/index';
import { MuiThemeProvider } from '@material-ui/core/styles';

ReactDOM.render(<MuiThemeProvider theme={myTheme}><App /> </MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
