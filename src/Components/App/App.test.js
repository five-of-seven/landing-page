import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new EnzymeAdapter() })

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
})

test('should have a one parent div', () => {
  const wrapper = shallow(<App />)
  console.log(wrapper.debug())
})
