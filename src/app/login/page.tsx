'use client'

import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Mail, Lock, Eye, EyeOff, X } from 'lucide-react'
import Link from 'next/link'

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
})

const Page = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 font-sans">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-lg relative">
        <button className="absolute right-6 top-6 text-gray-400 hover:text-gray-600">
          <X className="w-5 h-5" />
        </button>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
          <p className="text-gray-500 text-lg">Sign in to continue booking and managing your events.</p>
        </div>

        <Formik
          initialValues={{ email: '', password: '', rememberMe: false }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log('Login values:', values)
          }}
        >
          {({ errors, touched }) => (
            <Form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Email</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <Mail className="w-5 h-5" />
                  </span>
                  <Field
                    name="email"
                    type="email"
                    placeholder="example@email.com"
                    className={`w-full pl-12 pr-4 py-4 rounded-xl border focus:outline-none focus:ring-2 transition-all text-base ${errors.email && touched.email
                        ? 'border-red-500 focus:ring-red-100'
                        : 'border-gray-200 focus:ring-red-50/50 focus:border-[#FF4D4D]'
                      }`}
                  />
                </div>
                <ErrorMessage name="email" component="div" className="text-red-500 text-xs font-medium" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Password</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <Lock className="w-5 h-5" />
                  </span>
                  <Field
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    className={`w-full pl-12 pr-12 py-4 rounded-xl border focus:outline-none focus:ring-2 transition-all text-base ${errors.password && touched.password
                        ? 'border-red-500 focus:ring-red-100'
                        : 'border-gray-200 focus:ring-red-50/50 focus:border-[#FF4D4D]'
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
                  <div className="relative flex items-center">
                    <Field
                      type="checkbox"
                      name="rememberMe"
                      className="w-5 h-5 rounded border-gray-300 text-[#FF4D4D] focus:ring-[#FF4D4D] cursor-pointer"
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">
                    Remember me
                  </span>
                </label>
                <Link
                  href="/forgot-password"
                  className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Forgot Password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full bg-[#FF4D4D] hover:bg-[#F04444] text-white font-bold py-4 rounded-xl shadow-lg shadow-red-100 transition-all active:scale-[0.99] text-lg mt-2"
              >
                Log in
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
                  className="w-full flex items-center justify-center space-x-3 px-4 py-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all font-semibold text-gray-700"
                >
                  <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/smartlock/google.svg" className="w-6 h-6" alt="Google" />
                  <span>Continue with Google</span>
                </button>
                <button
                  type="button"
                  className="w-full flex items-center justify-center space-x-3 px-4 py-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all font-semibold text-gray-700"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-black" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2.002-.156-3.75 1.09-4.503 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701z" />
                  </svg>
                  <span>Continue with Apple</span>
                </button>
              </div>
            </Form>
          )}
        </Formik>

        <div className="mt-10 text-center">
          <p className="text-gray-600 font-medium">
            Don’t have an account?{' '}
            <Link href="/signup" className="text-[#FF4D4D] font-bold hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Page