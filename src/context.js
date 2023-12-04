import React, { useContext, useState } from "react";

const AppContext = React.createContext();
const ContextApi=({children})=>{
    const [submenu,setSubmenu] = useState(false)
    const [index,setIndex] = useState();
    const [location,setLocation] = useState({});
    const openSubmenu=()=>{
        setSubmenu(true);
    }
    const closeSubmenu=()=>{
        setSubmenu(false);
    }
    return(
        <AppContext.Provider value={{submenu,openSubmenu,closeSubmenu,index,setIndex,location,setLocation}}>{children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, ContextApi };