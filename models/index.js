// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");
const { castArray } = require("lodash");

// Products belongsTo Category
Product.belongsTo(Category,{ foreignKey : "category_id", onDelete : 'cascade'})
// Categories have many Products
Category.hasMany(Product, {foreignKey : 'category_id'})
// Product belongsToMany (can be referenced by) Tag (through ProductTag table using the product_id foreign key)
Product.belongsToMany(Tag, {through : ProductTag, foreignKey : 'product_id'})
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {through : ProductTag, foreignKey : 'tag_id'})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
