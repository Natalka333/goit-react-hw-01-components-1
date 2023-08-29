import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import user from './user.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const card = (
//   <div className="profile">
//     <div className="description">
//       <img src={user.avatar} alt="User avatar" className="avatar" />
//       <p className="name">{user.username}</p>
//       <p className="tag">{user.tag}</p>
//       <p className="location">{user.location}</p>
//     </div>

//     <ul className="stats">
//       <li>
//         <span className="label">Followers</span>
//         <span className="quantity">1000</span>
//       </li>
//       <li>
//         <span className="label">Views</span>
//         <span className="quantity">2000</span>
//       </li>
//       <li>
//         <span className="label">Likes</span>
//         <span className="quantity">3000</span>
//       </li>
//     </ul>
//   </div>
// );

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// const element = React.createElement('div', { a: 1, b: 3 }, 'Hi its me');
// console.log(element);
// ReactDOM.createRoot(document.getElementById('root')).render(element);

// const p = <p clas="hero">Hellow</p>;
// const div = <div name="hero-name">{p}</div>;
// console.log('div', div);
// ReactDOM.createRoot(document.getElementById('root')).render(card);
