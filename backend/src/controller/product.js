const Product = require('../models/product');
const express = require("express");
const multer = require('multer'); /* Package for file uploading */
const shortid = require('shortid');
const slug = require('slugify');
const { default: slugify } = require('slugify');

exports.createProduct = (req,res) => {

    const {
        name, price, description, category, quantity, createdBy
    } = req.body;
    let productPictures = [];
    if(req.files.length > 0){
        productPictures = req.files.map(file => {
            return { img: file.filename }
        });
    }
    
    //res.status(200).json({ file: req.files, body:req.body});
    const product = new Product({
        name: name,
        slug: slugify(name),
        price,
        quantity,
        description,
        productPictures,
        category,
        createdBy: req.user._id
    });


    product.save(((error,product) => {
        if(error) return res.status(400).json({ error });
        if(product){
            res.status(201).json({ product  });
        }
    }));
}

exports.getProducts = (req,res) => {
    Product.find({}).exec((error, products) => {
        if (error) return res.status(400).json({ error });
        if (products) {
          res.status(200).json({products});
        }
      });
}

exports.getProductById = (req,res) => {
    const { product_id } = req.params
    Product.findById(product_id , (error,product) => {
        if(error) return res.status(400).json({ error })
        if(product){
            res.status(200).json({product})
        }
    })
}

exports.getProductByName = (req,res) => {
    const { product_name } = req.params
    Product.find({name : {$regex : product_name , $options : "i"}}).exec((error,product) => {
        if(error) return res.status(400).json({ error })
        if(product.length>0){
            res.status(200).json({product})
        }
        else{
            res.status(200).json({ msg : "Product not found"})
        }
    })
}