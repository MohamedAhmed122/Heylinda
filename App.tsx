import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';

import {store, persistor} from './src/redux/store';
// import AppNavigation from './src/navigation';
import {getTodayDay} from 'utils/date';
import RegisterScreen from 'screens/RegisterScreen';

const App: React.FC = () => {
  console.log(getTodayDay());
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        {/* <AppNavigation /> */}
        <RegisterScreen />
      </PersistGate>
    </Provider>
  );
};

export default App;
