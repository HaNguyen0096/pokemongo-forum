import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { BrowserRouter } from 'react-router-dom'
import DeleteThread from './DeleteThread'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

const testThread = [
  {
    id: 1,
    thread_title: 'events',
    thread_content: 'When is Valentine event start?',
    user_id: 1,
    topic_id: 1,
    modified: '2020-02-22T21:28:32.615Z'
  }
]

describe('DeleteThread component', () => {

  it('renders DeleteThread without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>
                      <DeleteThread thread={testThread}/>
                    </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI for DeleteThread as expected', () => {
    const tree = renderer
      .create(<BrowserRouter>
                <DeleteThread thread={testThread} />
              </BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });

  it('renders DeleteThread by default', () => {
    const wrapper = shallow(<DeleteThread thread={testThread} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });

})