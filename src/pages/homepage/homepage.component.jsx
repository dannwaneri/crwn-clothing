import React from "react";
import { HomePageContainer } from "./homepage.style";
import Directory from '../../components/directory/directory.component'

const HomePage = () => {
    return(
      <HomePageContainer>
      <h1>Welcome to my homepage</h1>
      <Directory/>
    </HomePageContainer>
    )
}

export default HomePage;
