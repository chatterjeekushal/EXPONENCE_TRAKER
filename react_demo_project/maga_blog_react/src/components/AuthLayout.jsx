
import React, { useState, useEffect } from 'react'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({ children, authentication = true }) {

    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const authstatus = useSelector(state => state.auth.status)

    useEffect(() => {
        if (authentication) {
            if (authstatus && authstatus !== authentication) {
                navigate('/')
            } else if (!authentication && authstatus !== authentication) {
                navigate('/')
            }
        }
        setLoading(false)
    }, [authstatus, authentication, navigate])

    return (
        <div>
            {loading ? <div>Loading...</div> : children}
        </div>
    )
}


