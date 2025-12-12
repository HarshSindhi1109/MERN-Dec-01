// import Button from './Button';
// import Card from './Card';
// import rolex from './assets/rolex.jpg';
// import Football from './Football';
// import Goal from './Goal';
// import Garage from './Garage';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Layout from './pages/Layout';
import NoPage from './pages/NoPage';

function App() {
  return (
    <>
      {/* <h2>Hello World!</h2>

      <Button btn="Download" bgcolor="blue" />
      <br />

      <Button btn="Upload" bgcolor="green" />
      <br />

      <Button btn="Click Me" bgcolor="red" />
      <br />

      <Card
        image={rolex}
        title="Rolex Watch"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, nam?"
        link="https://www.google.com"
      />
      <br />

      <Football />
      <br />

      <Goal isGoal={true} />

      <Garage /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="blogs" element={<Blog />}></Route>
            <Route path="*" element={<NoPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
