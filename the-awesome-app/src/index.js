import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MuiApp from './MuiApp';
import reportWebVitals from './reportWebVitals';
import {store} from './state/redux/store';
import {Provider} from 'react-redux';
import AppThemeProviderWithReducer from './state/context/AppThemeProviderWithReducer';
import './axios/interceptors';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <React.StrictMode>
        {/* <AppThemeContext.Provider value={theme}> */}
        {/* <AppThemeProvider> */}
        <AppThemeProviderWithReducer>
            <Provider store={store}>
                {/* <AppErrorBoundry> */}
                    {/* <App /> */}
                    <MuiApp/>
                {/* </AppErrorBoundry> */}
            </Provider>
        </AppThemeProviderWithReducer>
        {/* </AppThemeProvider> */}
        {/* </AppThemeContext.Provider> */}
     </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
