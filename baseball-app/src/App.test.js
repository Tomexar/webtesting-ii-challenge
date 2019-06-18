import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';


import App from './App';
import Dashboard from './components/Dashboard';
import Display from './components/Display';


describe('<App/>', () => {
  it('Renders without crashing', () => {
    render(<App/>);
  });

  it('should render strikes', () => {
    const { getByText } = render(<App/>)

    getByText('Strikes: 0')
  })

  it('should render balls', () => {
    const { getByText } = render(<App/>)

    getByText('Balls: 0')
  })

  it('should render strike button', () => {
    const { getByText } = render(<App/>)

    getByText(/strike/)
  })

  it('should render strike button', () => {
    const { getAllByText } = render(<App/>)

    getAllByText(/ball/i)
  })

  it('balls and strikes reset to 0 when there is 3 strikes', () => {
    const {getByText} = render(
      <App count={{
        balls: 3,
        strikes: 2
      }}>
        <Display/>
        <Dashboard/>
      </App>
    );

    const button = getByText(/strike/);
    fireEvent.click(button);

    getByText(/balls: 0/i);
    getByText(/strikes: 0/i);
  });

  it('balls and strikes reset to 0 when there is a hit', () => {
    const {getByText} = render(
      <App count={{
        balls: 5,
        strikes: 1
      }}>
        <Display/>
        <Dashboard/>
      </App>
    );

    const button = getByText(/hit/);
    fireEvent.click(button);

    getByText(/balls: 0/i);
    getByText(/strikes: 0/i);
  });

  it('foul should increase the strikes to 1', () => {
    const {getByText} = render(
      <App count={{
        balls: 1,
        strikes: 0
      }}>
        <Display/>
        <Dashboard/>
      </App>
    );

    const button = getByText(/foul/);
    fireEvent.click(button);

    getByText(/balls: 1/i);
    getByText(/strikes: 1/i);
  });

  it('foul should increase the strikes to 2', () => {
    const {getByText} = render(
      <App count={{
        balls: 1,
        strikes: 1
      }}>
        <Display/>
        <Dashboard/>
      </App>
    );

    const button = getByText(/foul/);
    fireEvent.click(button);

    getByText(/balls: 1/i);
    getByText(/strikes: 2/i);
  });

  it('foul should not increase the strikes to 3', () => {
    const {getByText} = render(
      <App count={{
        balls: 1,
        strikes: 2
      }}>
        <Display/>
        <Dashboard/>
      </App>
    );

    const button = getByText(/foul/);
    fireEvent.click(button);

    getByText(/balls: 1/i);
    getByText(/strikes: 2/i);
  });
})