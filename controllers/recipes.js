import axios from 'axios'

function searchRecipes(req, res) {
  console.log(req.params.query, "ctrl")
  let query = req.params.query.split(', ').join('%2C%20')
  console.log(query, "joined")
  axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${process.env.CLIENT_ID}&app_key=${process.env.API_KEY}`)
  .then(apiResponse => res.json(apiResponse.data))
}

export { searchRecipes }
