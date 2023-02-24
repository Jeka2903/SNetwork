import React from 'react';
import './App.css';
import Dialogs from './Components/Dialogs/Dialpogs';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import News from './Components/News/News';


const App = (props) => {




  return (
    <BrowserRouter>
    <div className="app-wrapper">
        <Header />
        <Navbar />
        <Routes>
            <Route path="/" element={<Profile posts={props.posts} />} />
            <Route path="/dialogs/*" element={<Dialogs dialogs={props.dialogs} messages={props.messages} />} />
        </Routes>
    </div>
</BrowserRouter>
  );
}


// <Routes>
// <Route path='dialogs/*' element={<DialogsContainer />} />
// <Route path='profile/' element={<Profile />} />
// <Route path='feed/' element={<NewsFeed />} />
// <Route path='music/' element={<Music />} />
// <Route path='settings/' element={<Settings />} />
// <Route path='users/' element={<UsersContainer />} />
// </Routes>




export default App;
