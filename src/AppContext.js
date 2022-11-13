import { createContext } from "react";

let AppContext = createContext({
    user: {},
    setUser: ()=>{}
});

export default AppContext;