import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('Testing <App />', () => {
  it('should render <App />', () => {
    render(<App />);
  });
});
