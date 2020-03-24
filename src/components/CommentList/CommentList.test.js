import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { BrowserRouter } from 'react-router-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import CommentList from './CommentList'

const testComment = [
  {
    id: 1,
    content: 'test 1',
    user_id: 1,
    thread_id: 1,
    modified: '2020-02-22T21:28:32.615Z'
  },
]



describe('CommentList Component', () => {

  it('renders CommentList without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>
                      <CommentList comment={testComment}/>
                    </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // it('renders the UI for CommentList as expected', () => {
  //   const tree = renderer
  //     .create(<BrowserRouter>
  //               <CommentList comment={testComment} />
  //             </BrowserRouter>)
  //     .toJSON();
  //   expect(tree).toMatchSnapshot();  
  // });

  // it('renders CommentList by default', () => {
  //   const wrapper = shallow(<CommentList comment={testComment} />)
  //   expect(toJson(wrapper)).toMatchSnapshot()
  // });

})


