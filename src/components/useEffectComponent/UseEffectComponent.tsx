import { useEffect, useState } from 'react'

export const UseEffectComponent = () => {
  const [state, setState] = useState(false)

  useEffect(() => {
    console.log('useEffectComponent')
  }, [])

  useEffect(() => {
    console.log(state)
  }, [state])

  return (
    <div>
      <p>{state ? 'Es true' : 'Es false'}</p>
      <button
        onClick={() => {
          setState(!state)
        }}
      >
        Cambiar state
      </button>
    </div>
  )
}
