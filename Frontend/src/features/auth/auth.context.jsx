import { createContext, useState } from "react";


// 🔹 Create Context
// This creates a GLOBAL storage for authentication data
// Any component can access this without props drilling
export const AuthContext = createContext();


//  Provider Component
// This component will wrap your whole app
// So all child components can access auth data
export const AuthProivder = ({ children }) => {

    // user state
    // Stores logged-in user info
    // null → user not logged in
    // object → user logged in
    const [user, setUser] = useState(null);

    // loading state
    // Used while calling API (login, register, getMe)
    // Helps to show spinner / disable button
    const [loading, setLoading] = useState(false);


    return (

        // Provider gives access to all these values globally
        <AuthContext.Provider
            value={{
                user,        // current logged-in user data
                setUser,     // function to update user               // used after login / get-m
                loading,     // true/false for showing loader
                setLoading   // function to update loading state
            }}
        >

            {/* children means: render the whole app here */}
            {children}

        </AuthContext.Provider>
    );
};