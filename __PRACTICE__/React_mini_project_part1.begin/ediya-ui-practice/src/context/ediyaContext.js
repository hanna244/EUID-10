import React from 'react'
import data from '~/api/ediya.json'

export const ediyaContext = { ...data }

export default React.createContext(ediyaContext)
