import React, { useReducer } from 'react'

export type ActivePage = 'about' | 'contact'

interface State {
  isDrawerOpen: boolean
}

const initialState: State = {
  isDrawerOpen: false,
}

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'TOGGLE_DRAWER':
      return {
        ...state,
        isDrawerOpen: !state.isDrawerOpen,
      }
    default:
      return state
  }
}

export const HeaderContext = React.createContext({})

export const HeaderProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <HeaderContext.Provider value={{ state, dispatch }}>
      {children}
    </HeaderContext.Provider>
  )
}
