
function searchRecipes(req, res) {
  console.log(req.params.query, "ctrl")
  let query = req.params.query.split(', ').join('%2C%20')
  console.log(query, "joined")
}

export { searchRecipes }
