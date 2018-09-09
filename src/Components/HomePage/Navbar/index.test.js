import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './index'

import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new EnzymeAdapter() })

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Navbar />, div)
  ReactDOM.unmountComponentAtNode(div)
})

test('should have a one parent div', () => {
  const wrapper = shallow(<Navbar />)
  console.log(wrapper.debug())
})