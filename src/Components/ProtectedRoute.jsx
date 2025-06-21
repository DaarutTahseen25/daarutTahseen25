import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useAuth } from "../contexts/AuthContext"

// to protect the application from being seen by a user that is not logged in
export default function ProtectedRoute({ children }) {
    const { isAuthenticated } = useAuth()
    const navigate = useNavigate()

    useEffect(function () {
        if(!isAuthenticated) navigate("/login")
    }, [isAuthenticated, navigate])
  return isAuthenticated ? children : null
}