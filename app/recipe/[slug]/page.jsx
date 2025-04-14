import RecipeDetailPage from '../../../components/RecipeDetails'
import { recipes } from '../../../data/recipes'

export async function generateStaticParams() {
  return recipes.map((recipe) => ({
    slug: recipe.slug,
  }))
}

export default function RecipePage() {
  return <RecipeDetailPage />
} 