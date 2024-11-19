// import { CounterComponent } from './components/counterComponent/CounterComponent'
// import { FormComponent } from './components/formComponent/FormComponent'
// import { MiPrimerComponente } from './components/miPrimerComponente/MiPrimerComponente'
// import { UseEffectComponent } from './components/useEffectComponent/UseEffectComponent'

import { AppProduct } from './components/AppProduct/AppProduct'

export const App = () => {
  //   const [enableCounter, setEnableCounter] = useState<boolean>(false)
  //   const textButton = enableCounter ? 'Ocultar' : 'Mostrar'

  return (
    <>
      {/* <MiPrimerComponente text='Aguante Boca' color='blue' fontSize={32} />
      {/* {enableCounter && <CounterComponent />}
      <button
        onClick={() => {
          setEnableCounter(!enableCounter)
        }}
      >
        {textButton} counter
      </button> 
      <CounterComponent />
      <UseEffectComponent />
      <FormComponent /> */}
      <AppProduct />
    </>
  )
}
