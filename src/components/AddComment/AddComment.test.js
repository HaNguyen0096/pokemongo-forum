import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import AddComment from './AddComment'

describe('AddComment component', () => {

  it('renders AddComment without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>
                      <AddComment />
                    </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI for AddComment as expected', () => {
    const tree = renderer
      .create(<BrowserRouter>
                <AddComment />
              </BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });

  it('renders AddComment by default', () => {
    const wrapper = shallow(<AddComment  />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });

})