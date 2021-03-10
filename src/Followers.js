import React from 'react';

const App = props => {
  if(!props.followers)
  return(
    <p>Loading Followers</p>
  );

  return(
    <div className = "followers">
        {props.followers.map(follower => (
          <div className = "follower">
            <img src={follower.avatar_url}/>
            <h5>{follower.login}</h5>
          </div>
        ))}
    </div>
);
}

export default App;
