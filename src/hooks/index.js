import React from "react";

import PropTypes from "prop-types"

import { UserProvider } from "./UserContext";

import { CardProvider } from "./CardContext";


const AppProvider = ({children} ) => (


<UserProvider>
    <CardProvider>
    {children}
    </CardProvider>
    </UserProvider>


)
AppProvider.propTypes ={
    children: PropTypes.node
 }

export default AppProvider