import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CreatingAndNestingComponents from './pages/CreatingAndNestingComponents';
import WritingMarkupWithJSX from './pages/WritingMarkupWithJSX';
import AddingStyles from './pages/AddingStyles';
import DisplayingData from './pages/DisplayingData';
import ConditionalRendering from './pages/ConditionalRendering';
import RenderingLists from './pages/RenderingLists';
import RespondingToEvents from './pages/RespondingToEvents';
import UpdatingTheScreen from './pages/UpdatingTheScreen';
import SharingDataBetweenComponents from './pages/SharingDataBetweenComponents';
import Done from './pages/Done';

const App = () => {
  return (
    <div>
      <div>
        || <Link to="/">Home</Link> ||
        <br />|{' '}
        <Link to="/creating-and-nesting-components">
          Creating and Nesting Components
        </Link>{' '}
        | <Link to="/writing-markup-with-jsx">Writing Markup with JSX</Link> |{' '}
        <Link to="/adding-styles">Adding Styles</Link> |{' '}
        <Link to="/displaying-data">Displaying Data</Link> |{' '}
        <Link to="/conditional-rendering">Conditional Rendering</Link> |{' '}
        <Link to="/rendering-lists">Rendering Lists</Link> |{' '}
        <Link to="/responding-to-events">Responding to Events</Link> |{' '}
        <Link to="/updating-the-screen">Updating the Screen</Link> |{' '}
        <Link to="/sharing-data-between-components">
          Sharing Data between Components
        </Link>{' '}
        |
        <br />
        || <Link to="/done">Done</Link> ||
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/creating-and-nesting-components"
          element={<CreatingAndNestingComponents />}
        />
        <Route
          path="/writing-markup-with-jsx"
          element={<WritingMarkupWithJSX />}
        />
        <Route path="/adding-styles" element={<AddingStyles />} />
        <Route path="/displaying-data" element={<DisplayingData />} />
        <Route
          path="/conditional-rendering"
          element={<ConditionalRendering />}
        />
        <Route path="/rendering-lists" element={<RenderingLists />} />
        <Route path="/responding-to-events" element={<UpdatingTheScreen />} />
        <Route path="/updating-the-screen" element={<RespondingToEvents />} />
        <Route
          path="/sharing-data-between-components"
          element={<SharingDataBetweenComponents />}
        />
        <Route path="/done" element={<Done />} />
      </Routes>
    </div>
  );
};

export default App;
