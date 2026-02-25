import { useContext } from "react";
import { AuthContext } from "../auth.context";

// 🔹 API functions
// These call your backend (login, register, get-me)
import { login, register, getMe } from "../services/auth.api";


// 🔹 Custom Hook
// This is a reusable auth logic
export const useAuth = () => {

    // 🔹 Access global auth data from context
    const context = useContext(AuthContext);

    // 🔹 Destructure values from context
    const { user, setUser, loading, setLoading } = context;


    // ================= LOGIN =================
    const handleLogin = async (username, password) => {

        // start loader
        setLoading(true);

        // call backend login API
        const response = await login(username, password);

        // store logged-in user globally
        setUser(response.user);

        // stop loader
        setLoading(false);
    };


    // ================= REGISTER =================
    const handleRegister = async (username, email, password) => {

        setLoading(true);

        // call backend register API
        const response = await register(username, email, password);

        // store new user globally
        setUser(response.user);

        setLoading(false);
    };


    // 🔹 Return values so any component can use them
    return {
        user,             // current logged-in user
        loading,          // loading state
        handleLogin,      // login function
        handleRegister    // register function
    };
};