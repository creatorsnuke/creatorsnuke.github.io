import React, { createContext, useReducer } from 'react'
import { SlideReducer } from '@Reducer/SlideReducer'
import { initialState } from '@Context/SlideContext/initialState'

export const SlideContext = createContext(initialState)

export const SlideContextProvider = props => {
  const [state, dispatch] = useReducer(SlideReducer, initialState)
  
  const prevSlide = () => {
    dispatch({
      type: 'PREV_SLIDE',
    })
  }

  const nextSlide = () => {
    dispatch({
      type: 'NEXT_SLIDE'
    })
  }

  const sideSlide = id => {
    dispatch({
      type: 'SIDE_SLIDE',
      id: id
    })
  }

  return (
    <SlideContext.Provider
      value={{
        slides: state.slides,
        current: state.current,
        prevSlide,
        nextSlide,
        sideSlide
      }}
    >
      {props.children}
    </SlideContext.Provider>
  )
}
