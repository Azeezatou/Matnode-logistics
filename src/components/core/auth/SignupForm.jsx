import { Loading, Notify } from 'notiflix'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../contexts/AuthContext'
import { authRequests } from '../../../libs/requests/auth.request'
import Button from '../../ui/Button'
import Input from '../../ui/Input'

const SignUpForm = () => {
  const navigate = useNavigate()
  const authContext = useAuth()

  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const submitHandler = async (e) => {
    e.preventDefault()

    console.log(emailRef.current.value, passwordRef.current.value)

    Loading.circle()
    const res = await authRequests.register({
      name: 'Admin',
      email: emailRef.current.value,
      password: passwordRef.current.value,
      passwordconf: passwordRef.current.value,
    })

    if (!res.success) {
      Loading.remove()
      return Notify.failure(res.message)
    }

    authContext.login(res.data.user, res.data.token)

    Loading.remove()
    console.log(res)

    await navigate('/dashboard')
  }

  return (
    <div className='flex flex-col gap-[32px] w-full md:w-[640px] bg-white p-[48px] md:items-center'>
      <div className='md:text-center'>
        <p className='text-[24px] md:text-[44px] text-[#1B1603] font-Oswald font-bold'>
          Sign up
        </p>
      </div>

      <form
        onSubmit={submitHandler}
        className='flex flex-col gap-[32px] w-full md:items-center'
      >
        <Input
          label='Email'
          type='email'
          placeholder='Email Address'
          outline
          inputRef={emailRef}
          className={'w-full'}
        />

        <Input
          label='Password'
          type='password'
          placeholder='Password'
          outline
          inputRef={passwordRef}
          className={'w-full'}
        />

        <Button className={'w-full md:w-fit'}>Sign up</Button>
      </form>
    </div>
  )
}

export default SignUpForm
