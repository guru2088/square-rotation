import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react-native';
import { mount } from "enzyme";

import App from './App';

import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


describe('APP', () => {
 it('should be defined', () => {
   expect(App).toBeDefined();
 });
 it('should render correctly', () => {
   const tree = shallow(
     <App name='app test' />
   );
   expect(tree).toMatchSnapshot();
 });
});
