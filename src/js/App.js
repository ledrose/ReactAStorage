import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';

import Main from './Main';
import Login from './Login';
import AdminWelcome from './AdminWelcome';
import AdminContentBase from './AdminContentBase'
import AdminFiles from './AdminFiles';

var data = [
  {id: 1, name: 'aaaa', whenAdd: '27/11/2021', whoAdd: 'alili'},
  {id: 2, name: 'aaaa', whenAdd: '27/11/2021', whoAdd: 'alili'},
  {id: 3, name: 'aaaa', whenAdd: '27/11/2021', whoAdd: 'alili'},
  {id: 4, name: 'aaaa', whenAdd: '27/11/2021', whoAdd: 'alili'},
  {id: 5, name: 'aaaa', whenAdd: '27/11/2021', whoAdd: 'alili'},
  {id: 6, name: 'aaaa', whenAdd: '27/11/2021', whoAdd: 'alili'},
  {id: 7, name: 'aaaa', whenAdd: '27/11/2021', whoAdd: 'alili'},
  {id: 8, name: 'aaaa', whenAdd: '27/11/2021', whoAdd: 'alili'},
  {id: 9, name: 'aaaa', whenAdd: '27/11/2021', whoAdd: 'alili'},
  {id: 10, name: 'aaaa', whenAdd: '27/11/2021', whoAdd: 'alili'},
  {id: 11, name: 'aaaa', whenAdd: '27/11/2021', whoAdd: 'alili'},
  {id: 12, name: 'aaaa', whenAdd: '27/11/2021', whoAdd: 'alili'}
];


function App() {
  
  return (
          <>
          <Router>
            <Routes>
              <Route path="/"  element={<Main />}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/admin" element={<AdminWelcome/>}>
                <Routes>
                  <Route path="welcome" element={<AdminContentBase/>}/>
                  <Route path="files" element={<AdminFiles data={data}/>}/>
                </Routes>
              </Route>
            </Routes>
          </Router>
        </>
  )
}

export default App;

/* 

const dispatch = useDispatch();

  useEffect(() => {
    const getNews = async () => {
      const {data} = await axios({
        method: `get`,
        url: `http://swapi.dev/api/vehicles`
      })

      dispatch(setStarships(data.results))
    }
    getNews();
  }, [])

 <Routes>
                <Route path="/"  element={<Navbar />}>
                    <Main />
                </Route>
                <Route path="/login" element={<Navbar />}>
                  <Login/>
                </Route>
                <Route path="/admin" element={<AdminWelcome />}>
                </Route>
              </Routes>

<Route path="files" element={<Phone />} />
                    <Route path="log" element={<Tablet />} /> */