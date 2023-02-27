import Header from './Header';
import Notes from './Notes';
import Typetext from './Typetext';

function App() {
  return (
    <>
      <Header />
      <div class = "rowFlex">
        <div id = "flexChange"><Notes /></div>
        <div id = "typeIn"><Typetext /></div>
      </div>
    </>
  );
};

export default App;
