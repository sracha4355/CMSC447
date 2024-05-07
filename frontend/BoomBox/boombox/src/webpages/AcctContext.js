import React from "react"

const AcctContext = React.createContext({
    loggedIn: false,
    setLoggedIn: () => {},
    user: "",
    setUser: () => {}
})

export default AcctContext