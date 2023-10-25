import { BrowserRouter} from 'react-router-dom'
import MainRoutes from './routes/MainRoutes';
import Layout from './components/layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <MainRoutes />
      </Layout> 
    </BrowserRouter>
  );
}

export default App;
