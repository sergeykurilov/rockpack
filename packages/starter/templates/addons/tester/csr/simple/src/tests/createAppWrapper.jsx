// eslint-disable-next-line import/no-extraneous-dependencies
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import createStore from '../store';
import createMockServices from './mockServices';

// eslint-disable-next-line import/prefer-default-export
export const createAppWrapper = ({
  url = '/',
  store,
  initialState,
} = {}) => {
  const history = createMemoryHistory({
    initialEntries: [{
      pathname: url,
      key: 'test_key',
    }],
  });

  const mockedStore = store || createStore({
    initialState,
    history,
    services: createMockServices(),
  }).store;

  // eslint-disable-next-line react/display-name,react/prop-types
  return ({ children }) => (
    <Provider store={mockedStore}>
      <ConnectedRouter history={history}>
        {children}
      </ConnectedRouter>
    </Provider>
  );
};
