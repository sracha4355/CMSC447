import React from "react"

const AcctContext = React.createContext({
    loggedIn: false,
    setLoggedIn: () => {},
    user: "",
    setUser: () => {},
    userID: 0,
    setID: () => {}
})

export default AcctContext