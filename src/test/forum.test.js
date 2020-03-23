import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import App from '../components/App/App'
import { BrowserRouter } from 'react-router-dom'
import { TopicProvider } from '../contexts/TopicContext'
import { TopicListProvider } from '../contexts/TopicListContext'
import { ThreadProvider } from '../contexts/ThreadContext'
import Header from '../components/Header/Header'
import ThreadListMain from '../components/ThreadListMain/ThreadListMain'
import TopicListNav from '../components/TopicListNav/TopicListNav'
import AddThread from '../components/AddThread/AddThread'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

const testTopic = [
  {
    id: 1,
    topic_name: 'General',
    topic_content: 'General discussion about Pokemon Go!.'
  },
]

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

it('renders App without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter>
    <TopicListProvider>
      <TopicProvider>
        <ThreadProvider>
          <App />
        </ThreadProvider>
      </TopicProvider>
    </TopicListProvider>
  </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Header component', () => {

  it('renders Header without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>
                      <Header />
                    </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI for Header as expected', () => {
    const tree = renderer
      .create(<BrowserRouter>
                <Header />
              </BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });

  it('renders Header by default', () => {
    const wrapper = shallow(<Header />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
})

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

describe('ThreadList component', () => {

  it('renders ThreadList without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>
                      <ThreadListMain topic={testTopic} thread={testThread}/>
                    </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})

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

