export function SlideReducer (state, action) {
  const current = state.current
  const slides = state.slides
  switch(action.type) {
    case 'PREV_SLIDE': {
      return {
        ...state,
        current: current === 0 ? slides.length - 1 : current - 1
      }
    }

    case 'NEXT_SLIDE': {
      return {
        ...state,
        current: current === slides.length - 1 ? 0 : current + 1
      }
    }

    case 'SIDE_SLIDE': {
      const id = state.slides.findIndex(slide => slide.id === action.id)
      return {
        ...state,
        current: id
      }
    }
  }
}
