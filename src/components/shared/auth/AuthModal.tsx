'use client'

import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Mail, Lock, Eye, EyeOff, X, User as UserIcon } from 'lucide-react'
import { useAuthModal, AuthView } from '@/context/AuthContext'
import useAuthData from '@/lib/api/hooks/useAuthData'

// --- Validation Schemas ---

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
})

const signupSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phone: Yup.string().required('Phone number is required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  agreeTerms: Yup.boolean().oneOf([true], 'You must agree to the terms and conditions'),
})

const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required'),
})

const resetPasswordSchema = Yup.object().shape({
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('New Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
})

// --- Sub-components (Views) ---

const LoginView = () => {
  const { setView, closeModal } = useAuthModal()
  const [showPassword, setShowPassword] = useState(false)
  const { login } = useAuthData.useLogin()

  return (
    <>
      <div className="mb-4">
        <h1 className="text-[20px] font-bold text-[#000000] mb-2">Welcome Back</h1>
        <p className="text-[#686262] text-[16px] font-medium">Sign in to continue booking and managing your events.</p>
      </div>

      <Formik
        initialValues={{ email: '', password: '', rememberMe: false }}
        validationSchema={loginSchema}
        onSubmit={async (values) => {
          console.log('Login values:', values)
          const result = await login(values)
          if (result) closeModal()
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className="space-y-6">
            <div className="space-y-2">
              <label className="text-[14px] font-medium text-[#000000] mb-4 block">Email</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#000000]">
                  <Mail className="w-5 h-5" />
                </span>
                <Field
                  name="email"
                  type="email"
                  placeholder="example@email.com"
                  className={`w-full pl-12 pr-4 py-4 rounded-md border focus:outline-none focus:ring-2 transition-all text-base ${errors.email && touched.email
                    ? 'border-[#FF3A44] focus:ring-red-100'
                    : 'border-gray-200 focus:ring-red-50/50 focus:border-[#FF3A44]'
                    }`}
                />
              </div>
              <ErrorMessage name="email" component="div" className="text-red-500 text-xs font-medium" />
            </div>

            <div className="space-y-2">
              <label className="text-[14px] font-medium text-[#000000] mb-4 block">Password</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#000000]">
                  <Lock className="w-5 h-5" />
                </span>
                <Field
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className={`w-full pl-12 pr-12 py-4 rounded-md border focus:outline-none focus:ring-2 transition-all text-base ${errors.password && touched.password
                    ? 'border-[#FF3A44] focus:ring-red-100'
                    : 'border-gray-200 focus:ring-red-50/50 focus:border-[#FF3A44]'
                    }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              <ErrorMessage name="password" component="div" className="text-red-500 text-xs font-medium" />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2 cursor-pointer group">
                <Field
                  type="checkbox"
                  name="rememberMe"
                  className="w-5 h-5 rounded border-gray-300 text-[#FF3A44] cursor-pointer"
                />
                <span className="text-[12px] font-medium text-[#000000]">Remember me</span>
              </label>
              <button
                type="button"
                onClick={() => setView('forgot-password')}
                className="text-[12px] font-medium text-[#686262] hover:text-[#FF3A44] transition-colors"
              >
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#FF3A44] text-white font-medium text-[16px] py-4 rounded-md mt-2 disabled:bg-gray-400"
            >
              {isSubmitting ? 'Logging in...' : 'Log in'}
            </button>

            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-100"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-4 text-gray-400 font-bold tracking-widest">OR</span>
              </div>
            </div>

            <div className="space-y-4">
              <button
                type="button"
                className="w-full flex items-center justify-center space-x-3 px-4 py-4 border border-[#F0EFEF] rounded-md font-medium text-[14px] text-[#534D4B]"
              >
                <img src="/icons/login/logoGoogle.svg" className="w-6 h-6" alt="Google" />
                <span>Continue with Google</span>
              </button>
            </div>
          </Form>
        )}
      </Formik>



      <div className="mt-10 border-t border-[#F7F7F7] text-center">
        <p className="text-[#534D4B] text-[14px] font-semibold mt-3">
          Don&apos;t have an account?{' '}
          <button
            onClick={() => setView('signup')}
            className="text-[#FF3A44] font-semibold text-[14px] hover:underline"
          >
            Sign Up
          </button>
        </p>
      </div>
    </>
  )
}

const SignupView = () => {
  const { setView } = useAuthModal()
  const [showPassword, setShowPassword] = useState(false)
  const { register } = useAuthData.useRegister()

  return (
    <>
      <div className="mb-8">
        <h1 className="text-[20px] font-bold text-[#000000] mb-2">Create Your Account</h1>
        <p className="text-[#686262] text-[16px] font-medium">Join to book services, equipment, or event space.</p>
      </div>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          password: '',
          agreeTerms: false
        }}
        validationSchema={signupSchema}
        onSubmit={async (values) => {
          console.log('Signup values:', values)
          // Simplified logic: push to OTP
          setView('verify-otp')
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[14px] font-medium text-[#000000] mb-2 block">First Name</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#000000]">
                    <img src="/assets/userProfileIcon.svg" alt="User" className="w-5 h-5" />
                  </span>
                  <Field
                    name="firstName"
                    type="text"
                    placeholder="e.g. John"
                    className={`w-full pl-12 pr-4 py-4 rounded-md border focus:outline-none focus:ring-2 transition-all text-base ${errors.firstName && touched.firstName
                      ? 'border-[#FF3A44] focus:ring-red-100'
                      : 'border-gray-200 focus:ring-red-50/50 focus:border-[#FF3A44]'
                      }`}
                  />
                </div>
                <ErrorMessage name="firstName" component="div" className="text-[#FF3A44] text-xs font-medium" />
              </div>
              <div className="space-y-2">
                <label className="text-[14px] font-medium text-[#000000] mb-2 block">Last Name</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#000000]">
                    <img src="/assets/userProfileIcon.svg" alt="User" className="w-5 h-5" />
                  </span>
                  <Field
                    name="lastName"
                    type="text"
                    placeholder="e.g. Smith"
                    className={`w-full pl-12 pr-4 py-4 rounded-md border focus:outline-none focus:ring-2 transition-all text-base ${errors.lastName && touched.lastName
                      ? 'border-[#FF3A44] focus:ring-red-100'
                      : 'border-gray-200 focus:ring-red-50/50 focus:border-[#FF3A44]'
                      }`}
                  />
                </div>
                <ErrorMessage name="lastName" component="div" className="text-[#FF3A44] text-xs font-medium" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[14px] font-medium text-[#000000] mb-2 block">Email</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#000000]">
                    <Mail className="w-5 h-5" />
                  </span>
                  <Field
                    name="email"
                    type="email"
                    placeholder="example@email.com"
                    className={`w-full pl-12 pr-4 py-4 rounded-md border focus:outline-none focus:ring-2 transition-all text-base ${errors.email && touched.email
                      ? 'border-[#FF3A44] focus:ring-red-100'
                      : 'border-gray-200 focus:ring-red-50/50 focus:border-[#FF3A44]'
                      }`}
                  />
                </div>
                <ErrorMessage name="email" component="div" className="text-[#FF3A44] text-xs font-medium" />
              </div>

              <div className="space-y-2">
                <label className="text-[14px] font-medium text-[#000000] mb-2 block">Phone Number</label>
                <div className="relative flex items-center">
                  <div className="absolute left-4 flex items-center gap-2 text-[#686262]">
                    <img src="/assets/uk.svg" alt="UK" className="w-6 h-6 object-cover rounded-full" />
                    <span className="text-sm font-semibold text-[#000000]">+44</span>
                  </div>
                  <Field
                    name="phone"
                    type="text"
                    placeholder="XXX XXXXX"
                    className={`w-full pl-24 pr-4 py-4 rounded-md border focus:outline-none focus:ring-2 transition-all text-base ${errors.phone && touched.phone
                      ? 'border-[#FF3A44] focus:ring-red-100'
                      : 'border-gray-200 focus:ring-red-50/50 focus:border-[#FF3A44]'
                      }`}
                  />
                </div>
                <ErrorMessage name="phone" component="div" className="text-[#FF3A44] text-xs font-medium" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[14px] font-medium text-[#000000] mb-2 block">Password</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#000000]">
                  <Lock className="w-5 h-5" />
                </span>
                <Field
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className={`w-full pl-12 pr-12 py-4 rounded-md border focus:outline-none focus:ring-2 transition-all text-base ${errors.password && touched.password
                    ? 'border-[#FF3A44] focus:ring-red-100'
                    : 'border-gray-200 focus:ring-red-50/50 focus:border-[#FF3A44]'
                    }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              <ErrorMessage name="password" component="div" className="text-[#FF3A44] text-xs font-medium" />
            </div>

            <div className="flex items-start space-x-2 pt-2">
              <Field
                type="checkbox"
                name="agreeTerms"
                id="agreeTerms"
                className="w-4 h-4 rounded border-gray-300 text-[#FF3A44] cursor-pointer accent-[#FF3A44]"
              />
              <label htmlFor="agreeTerms" className="text-[12px] font-semibold text-[#000000] cursor-pointer leading-tight">
                I agree to the <span className="text-[#009FFD] font-bold hover:underline">Terms of Service</span> & <span className="text-[#009FFD] font-bold hover:underline">Privacy Policy</span>
              </label>
            </div>
            <ErrorMessage name="agreeTerms" component="div" className="text-[#FF3A44] text-xs font-medium" />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#FF3A44] border text-white font-medium text-[16px] py-4 rounded-md mt-4 disabled:bg-gray-400 transition-colors cursor-pointer"
            >
              {isSubmitting ? 'Creating...' : 'Create Account'}
            </button>

            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#F0EFEF]"></div>
              </div>
              <div className="relative flex justify-center text-[12px] uppercase">
                <span className="bg-white px-4 text-gray-400 font-bold tracking-widest">OR</span>
              </div>
            </div>

            <div className="space-y-4">
              <button
                type="button"
                className="w-full flex items-center justify-center space-x-3 px-4 py-4 border border-[#F0EFEF] rounded-md font-medium text-[14px] text-[#534D4B]"
              >
                <img src="/icons/login/logoGoogle.svg" className="w-6 h-6" alt="Google" />
                <span>Continue with Google</span>
              </button>

            </div>
          </Form>
        )}
      </Formik>

      <div className="mt-10 border-t border-[#F7F7F7] text-center">
        <p className="text-[#534D4B] text-[14px] font-semibold mt-3">
          Already have an account?{' '}
          <button
            onClick={() => setView('login')}
            className="text-[#FF3A44] font-semibold text-[14px] hover:underline"
          >
            Log in
          </button>
        </p>
      </div>
    </>
  )
}

const ForgotPasswordView = () => {
  const { setView } = useAuthModal()

  return (
    <>
      <div className="mb-8">
        <h1 className="text-[20px] font-bold text-[#000000] mb-2">Forgot Your Password?</h1>
        <p className="text-[#686262] text-[16px] font-medium">Enter your registered email to reset your password.</p>
      </div>

      <Formik
        initialValues={{ email: '' }}
        validationSchema={forgotPasswordSchema}
        onSubmit={(values) => {
          console.log('Reset email sent home:', values.email)
          setView('verify-otp')
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className="space-y-6">
            <div className="space-y-2">
              <label className="text-[14px] font-medium text-[#000000] mb-4 block">Email</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#000000]">
                  <Mail className="w-5 h-5" />
                </span>
                <Field
                  name="email"
                  type="email"
                  placeholder="example@email.com"
                  className={`w-full pl-12 pr-4 py-4 rounded-md border focus:outline-none focus:ring-2 transition-all text-base ${errors.email && touched.email
                    ? 'border-[#FF3A44] focus:ring-red-100'
                    : 'border-gray-200 focus:ring-red-50/50 focus:border-[#FF3A44]'
                    }`}
                />
              </div>
              <ErrorMessage name="email" component="div" className="text-red-500 text-xs font-medium" />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#FF3A44] text-white font-medium text-[16px] py-4 rounded-md mt-2 disabled:bg-gray-400"
            >
              {isSubmitting ? 'Sending...' : 'Continue'}
            </button>
          </Form>
        )}
      </Formik>

      <div className="mt-10 text-center">
        <div className="w-full border-t border-gray-100 mb-8" />
        <p className="text-[#534D4B] text-[14px] font-semibold">
          Remember Password?{' '}
          <button
            onClick={() => setView('login')}
            className="text-[#FF3A44] font-semibold text-[14px] hover:underline"
          >
            Log in
          </button>
        </p>
      </div>
    </>
  )
}

const VerifyOtpView = () => {
  const { setView } = useAuthModal()
  const [otp, setOtp] = React.useState(['', '', '', '', '', ''])
  const inputRefs = React.useRef<(HTMLInputElement | null)[]>([])

  const handleChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return false
    const newOtp = [...otp.map((d, idx) => (idx === index ? element.value : d))]
    setOtp(newOtp)
    if (element.value !== '' && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handleVerify = () => {
    console.log('OTP verified:', otp.join(''))
    // Simplified logic: go to reset password
    setView('reset-password')
  }

  return (
    <>
      <div className="mb-8">
        <h1 className="text-[20px] font-bold text-[#000000] mb-2">Verify Your Email</h1>
        <p className="text-[#686262] text-[16px] font-medium">We&apos;ve sent a verification code to your Email.</p>
      </div>

      <div className="space-y-8">
        <div className="space-y-4">
          <label className="text-[14px] font-medium text-[#686262]">Verification Code</label>
          <div className="flex justify-between gap-2">
            {otp.map((data, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                ref={(el) => { inputRefs.current[index] = el; }}
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className={`w-full h-14 border rounded-xl text-center text-xl font-bold focus:outline-none transition-all ${data
                  ? 'border-[#FF3A44] bg-white'
                  : 'border-gray-200 focus:border-[#FF3A44]'
                  }`}
              />
            ))}
          </div>
          <p className="text-[14px] font-medium text-[#686262]">
            Didn&apos;t receive Code?{' '}
            <button className="text-[#FF3A44] font-bold hover:underline">
              Resend
            </button>
          </p>
        </div>

        <button
          type="button"
          onClick={handleVerify}
          className="w-full bg-[#FF3A44] text-white font-medium py-4 rounded-md  text-[16px]"
        >
          Verify
        </button>
      </div>
    </>
  )
}

const ResetPasswordView = () => {
  const { setView } = useAuthModal()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <>
      <div className="mb-8">
        <h1 className="text-[20px] font-bold text-[#000000] mb-2">Reset Your Password</h1>
        <p className="text-[#686262] text-[16px] font-medium">Reset your password to regain access to your account.</p>
      </div>

      <Formik
        initialValues={{ password: '', confirmPassword: '' }}
        validationSchema={resetPasswordSchema}
        onSubmit={(values) => {
          console.log('Password reset successful:', values)
          setView('login')
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className="space-y-6">
            <div className="space-y-2">
              <label className="text-[14px] font-medium text-[#000000] mb-4 block">New Password</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#000000]">
                  <Lock className="w-5 h-5" />
                </span>
                <Field
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className={`w-full pl-12 pr-12 py-4 rounded-md border focus:outline-none focus:ring-2 transition-all text-base ${errors.password && touched.password
                    ? 'border-[#FF3A44] focus:ring-red-100'
                    : 'border-gray-200 focus:ring-red-50/50 focus:border-[#FF3A44]'
                    }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              <ErrorMessage name="password" component="div" className="text-red-500 text-xs font-medium" />
            </div>

            <div className="space-y-2">
              <label className="text-[14px] font-medium text-[#000000] mb-4 block">Confirm New Password</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#000000]">
                  <Lock className="w-5 h-5" />
                </span>
                <Field
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className={`w-full pl-12 pr-12 py-4 rounded-md border focus:outline-none focus:ring-2 transition-all text-base ${errors.confirmPassword && touched.confirmPassword
                    ? 'border-[#FF3A44] focus:ring-red-100'
                    : 'border-gray-200 focus:ring-red-50/50 focus:border-[#FF3A44]'
                    }`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-xs font-medium" />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#FF3A44] text-white font-medium text-[16px] py-4 rounded-md  disabled:bg-gray-400"
            >
              {isSubmitting ? 'Resetting...' : 'Go to Login'}
            </button>
          </Form>
        )}
      </Formik>
    </>
  )
}

// --- Main Modal Component ---

const AuthModal = () => {
  const { isOpen, closeModal, view } = useAuthModal()

  if (!isOpen) return null

  const renderView = () => {
    switch (view) {
      case 'login':
        return <LoginView />
      case 'signup':
        return <SignupView />
      case 'forgot-password':
        return <ForgotPasswordView />
      case 'verify-otp':
        return <VerifyOtpView />
      case 'reset-password':
        return <ResetPasswordView />
      default:
        return <LoginView />
    }
  }

  return (
    <div
      className="fixed inset-0 z-200 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      onClick={closeModal}
    >
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      <div
        className="bg-white rounded-xl p-12 w-full max-w-[600px] relative max-h-[700px] overflow-y-auto hide-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
          className="absolute right-6 top-6 text-[#686262] hover:text-black transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {renderView()}
      </div>
    </div>
  )
}

export default AuthModal
