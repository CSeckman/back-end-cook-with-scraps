import axios from 'axios'
import { Profile } from '../models/profile.js'

function searchRecipes(req, res) {
  console.log(req.params.query, "ctrl")
  let query = req.params.query.split(', ').join('%2C%20')
  console.log(query, "joined")
  axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${process.env.CLIENT_ID}&app_key=${process.env.API_KEY}`)
  .then(apiResponse => res.json(apiResponse.data))
}

function saveRecipe(req, res) {
  console.log(req.params.profileId, req.body, "params body ctrl")
  Profile.findById(req.params.profileId)
  .then (profile => {
    profile.recipes.push(req.body)
    profile.save()
    .then(profileWithRecipe => {
      res.json(profileWithRecipe)
    })
  })
}

export { 
  searchRecipes,
  saveRecipe
}
