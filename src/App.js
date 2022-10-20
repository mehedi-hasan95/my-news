import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './components/layouts/route';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
