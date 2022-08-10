import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Header from './components/Header';
import ProtectedRoute from './components/ProtectedRoute';
import AppErrorBoundry from './error-boundary/AppErrorBoundry';
import {appRoutes} from './routes/routes'

function App(){
  return(
    <Router>
      <div>
        <Header/>
        <AppErrorBoundry>
          <main className="col-12">
              <Routes>
                {/* <Route path="/home" element={<Hello message="Hello World" color="slateblue"/>} />
                <Route path="/products" element={<ListProducts/>} />
                <Route path="/counter" element={<Counter initCount={7}/>} />
                <Route path="/search" element={<Search/>} />
                <Route path="/login" element={<Login/>} /> */}

                {appRoutes.map((item, index) => {

                  const Component = item.component;

                  if(item.secure){
                    return (
                      <Route key={item.path} path={item.path} 
                            element={<ProtectedRoute>{item.component}</ProtectedRoute>} />
                    )
                  }
                  else{
                    return (
                      <Route key={item.path} path={item.path} element={item.component} />
                    )
                  }
                  

                })}

              </Routes>
          </main>
        </AppErrorBoundry>
      </div>
    </Router>
  );
}

export default App;