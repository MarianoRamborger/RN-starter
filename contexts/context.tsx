import {createContext, useContext, useReducer } from 'react'

const Ctx = createContext({})

export const CtxProvider: React.FC<any> = ({children}) => { 

    const initialState = {
        test: 'Starter Up!'
    }

    const reducer = (state : object , action: any) => {
        switch(action.type) {
        
            case 'setTest': {
                return {
                    ...state,
                    test: action.value
                }
            }

            default: {
                return {
                    ...state
                }
            }
        }
    }

    return(
        <Ctx.Provider value={(useReducer(reducer,initialState))}>
            {children}
        </Ctx.Provider>
    )

}

export const useCtxValue = () => useContext(Ctx)