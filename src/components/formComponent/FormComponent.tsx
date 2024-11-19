import { useForm } from '../../hooks/useForm'

export const FormComponent = () => {
  const { values, handleChange, resetForm } = useForm({
    email: '',
    name: '',
    age: 0,
  })

  const { email, name, age } = values

  const handleSubmitForm = () => {
    console.log(values)
  }

  const handleResetForm = () => {
    resetForm()
  }

  return (
    <div>
      <div>
        <h2>Formulario</h2>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input
          type='email'
          name='email'
          placeholder='example@example.com'
          value={email}
          onChange={handleChange}
        />
        <input
          type='text'
          name='name'
          placeholder='Nombre'
          value={name}
          onChange={handleChange}
        />
        <input
          type='number'
          name='age'
          placeholder='Edad'
          value={age}
          onChange={handleChange}
        />
      </div>
      <div>
        <button onClick={handleSubmitForm}>Enviar</button>
        <button onClick={handleResetForm}>Resetear</button>
      </div>
    </div>
  )
}
