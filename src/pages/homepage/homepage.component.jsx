import React from "react";
import './homepage.style.scss';
import Directory from '../../components/directory/directory.component'

const HomePage = () => {
    return(
        <div className="homepage">
      <h1>Welcome to my homepage</h1>
      <Directory/>
    </div>
    )
}

export default HomePage;