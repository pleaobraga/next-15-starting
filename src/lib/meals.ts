import fs from 'node:fs'
import sql from 'better-sqlite3'
import slugify from 'slugify'
import xss from 'xss'
import { Meal } from '@/app/meals/types'

const db = sql('meals.db')

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return db.prepare('SELECT * FROM meals').all()
}

export async function getMeal(slug: string) {
  return db.prepare('SELECT * FROM meals where slug = ?').get(slug)
}

export async function saveMeal(meal: Meal) {
  const newMeal = { ...meal }

  newMeal.slug = slugify(meal.title, { lower: true })
  newMeal.instructions = xss(meal.instructions)

  if (meal.image instanceof File) {
    const extension = meal.image.name.split('.').pop()
    const fileName = `${newMeal.slug}.${extension}`

    const stream = fs.createWriteStream(`public/images/${fileName}`)
    const bufferedImage = await meal.image.arrayBuffer()

    stream.write(Buffer.from(bufferedImage), (error) => {
      if (error) {
        throw new Error('Saving image failed!')
      }
    })

    newMeal.image = `/images/${fileName}`

    db.prepare(
      `
      INSERT INTO meals
        (title, instructions, image, summary, creator, creator_email, slug)
      VALUES (
        @title,
        @instructions,
        @image,
        @summary,
        @creator,
        @creator_email,
        @slug
      )
      `
    ).run(newMeal)
  }
}
