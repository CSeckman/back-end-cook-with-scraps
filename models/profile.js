import mongoose from 'mongoose'

const recipeSchema = new mongoose.Schema({
  label: String, 
  ingredientLines: Array,
  image: String, 
  url: String,
},{
    timestamps: true,
})

const profileSchema = new mongoose.Schema({
  email: {type: String, required: true, lowercase: true, unique: true},
  name: String,
  recipes: [recipeSchema]
},{
    timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export {Profile}
