import { createContext, useContext as reactUseContext, useReducer } from 'react'

import { ActivePage } from './routes'

type State = {
  isDrawerOpen: boolean
  activePage: ActivePage
}

const initialState: State = {
  isDrawerOpen: false,
  activePage: 'about',
}

type Action =
  | { type: 'toggleDrawer' }
  | { type: 'setActivePage'; payload: ActivePage }

type Dispatch = (action: Action) => void

type ContextProviderProps = { children: React.ReactNode }

export const StateContext =
  createContext<{ state: State; dispatch: Dispatch } | undefined>(undefined)

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'toggleDrawer': {
      return {
        ...state,
        isDrawerOpen: !state.isDrawerOpen,
      }
    }
    case 'setActivePage': {
      return {
        ...state,
        activePage: action.payload,
        isDrawerOpen: false,
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action}`)
    }
  }
}

function ContextProvider({ children }: ContextProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const value = { state, dispatch }

  return <StateContext.Provider value={value}>{children}</StateContext.Provider>
}

function useContext() {
  const context = reactUseContext(StateContext)

  if (context === undefined) {
    throw new Error('useContext must be used within a ContextProvider')
  }
  return context
}

export { ContextProvider, useContext }
