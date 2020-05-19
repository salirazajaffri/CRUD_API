const Product= require('../models/product.model');

//this function will perform the insert operation

exports.product_create=function(req,res){
    let product=new Product({
        name: req.body.name,
        price: req.body.price
    });

    product.save(function(err){
        if(err){
            return next(err);
        }
        res.redirect('/products/list');
    })
};
//this function will load the insert form

exports.product_formcreate=function(req,res){
    res.render('createform',{page:'New Product', menuId:'createform'})
};

//this function will list all the products in my collection
exports.product_list=function(req , res){
   Product.find(function(err,product){
       res.render('list',{page:'Show All Products', menuId:'list', product:product})
   });  
};

//this function will perform delete operation
exports.product_delete=function(req , res){
    Product.findByIdAndRemove(req.params.id,function(err){
        if(err){
            return next(err)
        }
        res.redirect('/products/list');
    })

};

//this function will load the update form
exports.product_updateform=function(req , res){
    Product.findById(req.params.id,function(err,product){
        if(err) return next(err);
        res.render('updateform',{page:'Update Form',menuId:'updateform',product:product});
    })

};

//this will perform the update operation
exports.product_update=function(req , res){
Product.findByIdAndUpdate(req.params.id,{$set:req.body},function(err,product){
    if(err) return next (err);
    res.redirect('/products/list');
})
};