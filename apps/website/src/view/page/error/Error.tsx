import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const Error = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/')
  }, [])

  return <div>Something went wrong</div>
}
