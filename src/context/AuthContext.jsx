import { createContext, useState, useEffect, useContext } from "react";
import { account } from "../appwrite/config";
import { ID } from "appwrite";

const AuthContext = createContext()

export const AuthProvider = ({children}) => {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    useEffect(() => {
        init()
    }, [])

    const init = async () => {
        const response = await checkUserStatus()
        setUser(response)
        setLoading(false)
    }

    const checkUserStatus = async () => {
        try {
            const userData = await account.get()
            return userData
        } catch (error) {
            console.error(error)
            
            return null
        }
    }

    const loginUser = async (email, password) => {
        setLoading(true)
        try {
            await account.createEmailPasswordSession(email, password)
            const response = await checkUserStatus()
            setUser(response);
            
        } catch (error) {
            console.error(error)
            alert(error.message)
        }
        setLoading(false)
    }

    const logoutUser = async () => {
        await account.deleteSession("current")
        setUser(null)
    }

    const registerUser = async (userInfo) => {
        setLoading(true)
       try{          
            let response = await account.create(ID.unique(), userInfo.email, userInfo.password1, userInfo.name);  
            await account.createEmailPasswordSession(userInfo.email, userInfo.password1)
            let accountDetails = await account.get();
            setUser(accountDetails)
            navigate('/')
        }catch(error){
            console.error(error)
        }
           setLoading(false)
     }


    const contextData ={
        user,
        loginUser,
        logoutUser,
        registerUser
    }

    return (
        <AuthContext.Provider value={contextData}>
            {loading ? <p>Loading...</p> : children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {return useContext(AuthContext)}
export default AuthContext