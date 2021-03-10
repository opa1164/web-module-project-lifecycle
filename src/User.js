import React from 'react';

const App = props => {
  return(
    <div classname = "User">
        <div className = "Info">
          <h2>{props.user.name}</h2>
          <h3>{props.user.login}</h3>
          <p>{props.user.email}</p>
        </div>
        <img src={props.user.avatar_url}/>
        <p>{props.user.bio}</p>
        <p>{props.user.followers} Followers</p>
    </div>
);
}

export default App;
