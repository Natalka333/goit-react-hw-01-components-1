import React from 'react';
import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
import './index.css';
import user from './components/dataAll.json/user.json';
// import friends from './components/dataAll.json/friends.json';
// import data from './components/dataAll.json/data.json';
// import transactions from './components/dataAll.json/transactions.json';

const card = (
  <div className="profile">
    <div className="description">
      <img src={user.avatar} alt="User avatar" className="avatar" />
      <p className="name">{user.username}</p>
      <p className="tag">{user.tag}</p>
      <p className="location">{user.location}</p>
    </div>

    <ul className="stats">
      <li>
        <span className="label">Followers</span>
        <span className="quantity">1000</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity">2000</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="quantity">3000</span>
      </li>
    </ul>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(card);
