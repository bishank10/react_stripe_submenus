import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isSubMenuOpen, setIsModalOpen] = useState(true);

    const openSidebar = () => {
        setIsSidebarOpen(true)
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }

    const openSubmenu = () => {
        setIsSubmenuOpen(true)
    }

    const closeSubmenu = () => {
        setIsSubmenuOpen(false)
    }

    return <AppContext.provide value={{
        isSubMenuOpen,
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        openSubmenu,
        closeSubmenu
    }}>
        {children}
    </AppContext.provide>
}

export const useGlobalContext=()=>{
    useContext(AppContext)
}
