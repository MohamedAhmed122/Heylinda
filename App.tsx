import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import Toast from 'react-native-toast-message';
import toastConfig from 'utils/toastConfig';
import {store, persistor} from './src/redux/store';
import AppNavigation from './src/navigation';
import {getTodayDay} from 'utils/date';

const App: React.FC = () => {
  console.log(getTodayDay());
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppNavigation />
        <Toast ref={ref => Toast.setRef(ref)} config={toastConfig} />
      </PersistGate>
    </Provider>
  );
};

export default App;
