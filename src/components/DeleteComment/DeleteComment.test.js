import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { BrowserRouter } from 'react-router-dom'
import DeleteComment from './DeleteComment'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

const testComment = [
  {
    id: 1,
    content: 'test 1',
    user_id: 1,
    thread_id: 1,
    modified: '2020-02-22T21:28:32.615Z'
  },
]

describe('DeleteComment component', () => {

  it('renders DeleteComment without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>
                      <DeleteComment comment={testComment}/>
                    </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI for DeleteComment as expected', () => {
    const tree = renderer
      .create(<BrowserRouter>
                <DeleteComment comment={testComment} />
              </BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });

  it('renders DeleteComment by default', () => {
    const wrapper = shallow(<DeleteComment comment={testComment} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });

})