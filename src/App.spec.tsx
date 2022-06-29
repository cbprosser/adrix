import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { App as ImportedApp } from './App';

const App = () => (
  <BrowserRouter>
    <ImportedApp />
  </BrowserRouter>
);

describe('App Suite', () => {
  it('Should match the snapshot', () => {
    const view = render(<App />);

    expect(view.asFragment()).toMatchSnapshot();
  });
});
