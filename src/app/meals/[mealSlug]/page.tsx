export default function MealDetail({
  params,
}: {
  params: {
    mealSlug: string
  }
}) {
  return <div>Meal {params.mealSlug} Details</div>
}
