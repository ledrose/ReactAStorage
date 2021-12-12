import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';

import Main from './Main';
import Login from './Login';

import AdminWelcome from './AdminWelcome';
import AdminContentBase from './AdminContentBase'
import AdminFiles from './AdminFiles';
import AdminUsers from './AdminUsers';
import AdminEvents from './AdminEvents';
import AdminLogs from './AdminLogs';
import AdminRoles from './AdminRoles';

import SearchArea from './SearchArea';

export let token=null;
export const changeToken = (newToken)=>{token=newToken};
export const mainLink = "https://bfs-astorage.somee.com/api/v1.0";

var dataFiles = [
  {id: 1, name: 'aaaa', whoAdd: 'alili'},
  {id: 2, name: 'aaaa', whoAdd: 'alili'},
  {id: 3, name: 'aaaa', whoAdd: 'alili'},
  {id: 4, name: 'aa6ryuu', whoAdd: 'alili'},
  {id: 5, name: 'aaaa', whoAdd: 'alili'},
  {id: 6, name: 'aaaa', whoAdd: 'alili'},
  {id: 7, name: 'aaaa', whoAdd: 'alili'},
  {id: 8, name: 'aaaa', whoAdd: 'alili'},
  {id: 9, name: 'aaaa', whoAdd: 'alili'},
  {id: 10, name: 'aaaa', whoAdd: 'alili'},
  {id: 11, name: 'aaaa', whoAdd: 'alili'},
  {id: 12, name: 'aaaa', whoAdd: 'alili'}
];
var dataUsers = [
  {idUser: 1, nameUser: 'aaaa', roleUser: 'alili'},
  {idUser: 2, nameUser: 'aaaa', roleUser: 'alili'},
  {idUser: 3, nameUser: 'aaaa', roleUser: 'alili'},
  {idUser: 4, nameUser: 'aa6ryuu', roleUser: 'alili'},
  {idUser: 5, nameUser: 'aaaa', roleUser: 'alili'},
  {idUser: 6, nameUser: 'aaaa', roleUser: 'alili'},
  {idUser: 7, nameUser: 'aaaa', roleUser: 'alili'},
  {idUser: 8, nameUser: 'aaaa', roleUser: 'alili'},
  {idUser: 9, nameUser: 'aaaa', roleUser: 'alili'},
  {idUser: 10, nameUser: 'aaaa', roleUser: 'alili'},
  {idUser: 11, nameUser: 'aaaa', roleUser: 'alili'},
  {idUser: 12, nameUser: 'aaaa', roleUser: 'alili'}
];
var dataEvents = [
  {idUser: 1, nameUser: 'aaaa', roleUser: 'alili'},
  {idUser: 2, nameUser: 'aaaa', roleUser: 'alili'},
  {idUser: 3, nameUser: 'aaaa', roleUser: 'alili'},
  {idUser: 4, nameUser: 'aa6ryuu', roleUser: 'alili'},
  {idUser: 5, nameUser: 'aaaa', roleUser: 'alili'},
  {idUser: 6, nameUser: 'aaaa', roleUser: 'alili'},
  {idUser: 7, nameUser: 'aaaa', roleUser: 'alili'},
  {idUser: 8, nameUser: 'aaaa', roleUser: 'alili'},
  {idUser: 9, nameUser: 'aaaa', roleUser: 'alili'},
  {idUser: 10, nameUser: 'aaaa', roleUser: 'alili'},
  {idUser: 11, nameUser: 'aaaa', roleUser: 'alili'},
  {idUser: 12, nameUser: 'aaaa', roleUser: 'alili'}
];
var dataLogs = [
  {idUser: 1, nameUser: 'aaaa', roleUser: 'alili'},
  {idUser: 2, nameUser: 'aaaa', roleUser: 'alili'},
  {idUser: 3, nameUser: 'aaaa', roleUser: 'alili'},
  {idUser: 4, nameUser: 'aa6ryuu', roleUser: 'alili'},
  {idUser: 5, nameUser: 'aaaa', roleUser: 'alili'},
  {idUser: 6, nameUser: 'aaaa', roleUser: 'alili'},
  {idUser: 7, nameUser: 'aaaa', roleUser: 'alili'},
  {idUser: 8, nameUser: 'aaaa', roleUser: 'alili'},
  {idUser: 9, nameUser: 'aaaa', roleUser: 'alili'},
  {idUser: 10, nameUser: 'aaaa', roleUser: 'alili'},
  {idUser: 11, nameUser: 'aaaa', roleUser: 'alili'},
  {idUser: 12, nameUser: 'aaaa', roleUser: 'alili'}
];
var dataRoles = [
  {idUser: 1, nameUser: 'aaaa', roleUser: 'alili'},
  {idUser: 2, nameUser: 'aaaa', roleUser: 'alili'},
  {idUser: 3, nameUser: 'aaaa', roleUser: 'alili'},
  {idUser: 4, nameUser: 'aa6ryuu', roleUser: 'alili'},
  {idUser: 5, nameUser: 'aaaa', roleUser: 'alili'},
  {idUser: 6, nameUser: 'aaaa', roleUser: 'alili'},
  {idUser: 7, nameUser: 'aaaa', roleUser: 'alili'},
  {idUser: 8, nameUser: 'aaaa', roleUser: 'alili'},
  {idUser: 9, nameUser: 'aaaa', roleUser: 'alili'},
  {idUser: 10, nameUser: 'aaaa', roleUser: 'alili'},
  {idUser: 11, nameUser: 'aaaa', roleUser: 'alili'},
  {idUser: 12, nameUser: 'aaaa', roleUser: 'alili'}
];


function App() {
  return (
          <>
          <Router>
            <Routes>
              <Route path="/"  element={<Main />}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/admin" element={<AdminWelcome/>}>
                  <Route path="welcome" element={<AdminContentBase/>}/>
                  <Route path="files" element={<AdminFiles data={dataFiles}/>}/>
                  <Route path="users" element={<AdminUsers data={dataUsers}/>}/>
                  <Route path="events" element={<AdminEvents data={dataEvents}/>}/>
                  <Route path="logs" element={<AdminLogs data={dataLogs}/>}/>
                  <Route path="roles" element={<AdminRoles data={dataRoles}/>}/>
              </Route>
              <Route path="/search" element={<SearchArea/>} />
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