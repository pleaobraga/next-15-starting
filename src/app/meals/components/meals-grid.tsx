import MealItem from './meal-item'

type Props = {
  meals: {
    id: string
    title: string
    slug: string
    image: string
    summary: string
    creator: string
  }[]
}

export default function MealsGrid({ meals }: Props) {
  return (
    <ul className="w-[90%] h-[90%] grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-20 my-8 mx-auto list-none p-0">
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  )
}
