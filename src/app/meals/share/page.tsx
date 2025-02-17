'use client'

import ImagePicker from './components/ImagePicker'
import { shareMeal } from '../actions/share-meal'
import FormSubmitButton from './components/form-submit-button'
import { useActionState } from 'react'

export default function ShareMealPage() {
  const [state, formAction] = useActionState(shareMeal, { message: '' })

  return (
    <>
      <header className="gap-12 mx-auto mt-12 mb-20 w-[90%] max-w-[75rem] text-2xl">
        <h1 className="font-montserrat font-bold text-6xl">
          Share your{' '}
          <span className="bg-linear-to-r from-orange-400 to-yellow-200 bg-clip-text text-transparent">
            favorite meal
          </span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className="w-[90%] max-w-[75rem] mx-auto my-12 text-white">
        <form
          className="max-w-[50rem] flex flex-col gap-5"
          action={formAction}
        >
          <div className="flex gap-4">
            <p className="w-full">
              <label
                className="block mb-2 text-base font-montserrat uppercase font-bold text-gray-300"
                htmlFor="name"
              >
                Your name
              </label>
              <input
                className="block w-full px-4 py-2 rounded-sm text-xl border border-gray-500 font-montserrat bg-gray-950 "
                type="text"
                id="name"
                name="name"
                required
              />
            </p>
            <p>
              <label
                className="block mb-2 text-base font-montserrat uppercase font-bold text-gray-300"
                htmlFor="email"
              >
                Your email
              </label>
              <input
                className="block w-full px-4 py-2 rounded-sm text-xl border border-gray-500 font-montserrat bg-gray-950 "
                type="email"
                id="email"
                name="email"
                required
              />
            </p>
          </div>
          <p>
            <label
              className="block mb-2 text-base font-montserrat uppercase font-bold text-gray-300"
              htmlFor="title"
            >
              Title
            </label>
            <input
              className="block w-full px-4 py-2 rounded-sm text-xl border border-gray-500 font-montserrat bg-gray-950 "
              type="text"
              id="title"
              name="title"
              required
            />
          </p>
          <p>
            <label
              className="block mb-2 text-base font-montserrat uppercase font-bold text-gray-300"
              htmlFor="summary"
            >
              Short Summary
            </label>
            <input
              className="block w-full px-4 py-2 rounded-sm text-xl border border-gray-500 font-montserrat bg-gray-950 "
              type="text"
              id="summary"
              name="summary"
              required
            />
          </p>
          <p>
            <label
              className="block mb-2 text-base font-montserrat uppercase font-bold text-gray-300"
              htmlFor="instructions"
            >
              Instructions
            </label>
            <textarea
              className="block w-full px-4 py-2 rounded-sm text-xl border border-gray-500 font-montserrat bg-gray-950 "
              id="instructions"
              name="instructions"
              rows={10}
              required
            ></textarea>
          </p>
          <ImagePicker
            label="Image"
            name="image"
          />
          {state.message && <p>{state.message}</p>}
          <p className="text-right">
            <FormSubmitButton />
          </p>
        </form>
      </main>
    </>
  )
}
