const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    name: {
        type: String,
        required: true,
        trim: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    offer: {
        type: Number
    },                              //================= Number of products =====================/
    productPictures: [
        { img: { type: String } }
    ],
    reviews: [
        {
            userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },/* Foriegn Key */
            review: String
        }
    ],
    category: { type: mongoose.Schema.Types.ObjectId,ref: 'Category' },  /* Foriegn Key */ 
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },   /* Foriegn Key */
    updatedAt: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);