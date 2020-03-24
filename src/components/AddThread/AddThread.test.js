import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import AddThread from './AddThread'

describe('AddThread component', () => {

  it('renders AddThread without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>
                      <AddThread />
                    </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI for AddThread as expected', () => {
    const tree = renderer
      .create(<BrowserRouter>
                <AddThread />
              </BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });

  it('renders AddThread by default', () => {
    const wrapper = shallow(<AddThread  />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });

})