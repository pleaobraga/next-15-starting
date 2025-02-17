'use server'

import { saveMeal } from '@/lib/meals'
import { Meal } from '../types'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

function isInvalidText(text: string) {
  return !text || text.trim() === ''
}

export async function shareMeal(
  previousState: { message: string },
  formData: FormData
) {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image') as File,
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  } as Meal

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email)
  ) {
    return {
      message: 'invalid input',
    }
  }

  await saveMeal(meal)
  revalidatePath('/meals')
  redirect('/meals')
}
