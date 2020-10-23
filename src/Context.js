import React from 'react';

export default React.createContext({
    currentTheme: null,
    currentUser: null,
    handleTheme: () => {},
    setCurrentUser: () => {}
});