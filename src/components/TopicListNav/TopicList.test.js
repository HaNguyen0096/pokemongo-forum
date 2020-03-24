import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { BrowserRouter } from 'react-router-dom'
import TopicListNav from './TopicListNav'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

const testTopic = [
  {
    id: 1,
    topic_name: 'General',
    topic_content: 'General discussion about Pokemon Go!.'
  },
]

describe('TopicList component', () => {

  it('renders TopicList without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>
                      <TopicListNav topic={testTopic}/>
                    </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI for TopicList as expected', () => {
    const tree = renderer
      .create(<BrowserRouter>
                <TopicListNav topic={testTopic} />
              </BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });

  it('renders TopicList by default', () => {
    const wrapper = shallow(<TopicListNav topic={testTopic} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });

})