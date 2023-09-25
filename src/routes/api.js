const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");
const AdminController = require("../controllers/adminController");
const SubAdminController = require("../controllers/subAdminController");
const PostController = require("../controllers/postController");
const CustomerController = require("../controllers/customerController");
const CategoryController = require("../controllers/categoryController");
const OrderController = require("../controllers/orderController");
const ProductController = require("../controllers/productController");
const OrderItemController = require("../controllers/order_itemController");
const PaymentController = require("../controllers/paymentController");
const ShipmentController = require("../controllers/shipmentController");
const CartController = require("../controllers/cartController");
const WishlistController = require("../controllers/wishlistController");

//user routes
router.get("/create-user", UserController.create);
router.get("/read-user", UserController.read);
router.get("/update-user/:id", UserController.update);
router.get("/delete-user/:id", UserController.delete);

//admin routes
router.get("/create-admin", AdminController.create);
router.get("/read-admin", AdminController.read);
router.get("/update-admin/:id", AdminController.update);
router.get("/delete-admin/:id", AdminController.delete);

//subAdmin routes
router.get("/create-sub-admin", SubAdminController.create);
router.get("/read-sub-admin", SubAdminController.read);
router.get("/update-sub-admin/:id", SubAdminController.update);
router.get("/delete-sub-admin/:id", SubAdminController.delete);

//post routes
router.get("/create-post", PostController.create);
router.get("/read-post", PostController.read);
router.get("/update-post/:id", PostController.update);
router.get("/delete-post/:id", PostController.delete);

//customer routes
router.get("/create-customer", CustomerController.create);
router.get("/read-customer", CustomerController.read);
router.get("/update-customer/:id", CustomerController.update);
router.get("/delete-customer/:id", CustomerController.delete);

//category routes
router.get("/create-category", CategoryController.create);
router.get("/read-category", CategoryController.read);
router.get("/update-category/:id", CategoryController.update);
router.get("/delete-category/:id", CategoryController.delete);

//order routes
router.get("/create-order", OrderController.create);
router.get("/read-order", OrderController.read);
router.get("/update-order/:id", OrderController.update);
router.get("/delete-order/:id", OrderController.delete);

//product routes
router.get("/create-product", ProductController.create);
router.get("/read-product", ProductController.read);
router.get("/update-product/:id", ProductController.update);
router.get("/delete-product/:id", ProductController.delete);

//order-item routes
router.get("/create-order-item", OrderItemController.create);
router.get("/read-order-item", OrderItemController.read);
router.get("/update-order-item/:id", OrderItemController.update);
router.get("/delete-order-item/:id", OrderItemController.delete);

//payment routes
router.get("/create-payment", PaymentController.create);
router.get("/read-payment", PaymentController.read);
router.get("/update-payment/:id", PaymentController.update);
router.get("/delete-payment/:id", PaymentController.delete);

//shipment routes
router.get("/create-shipment", ShipmentController.create);
router.get("/read-shipment", ShipmentController.read);
router.get("/update-shipment/:id", ShipmentController.update);
router.get("/delete-shipment/:id", ShipmentController.delete);

//cart routes
router.get("/create-cart", CartController.create);
router.get("/read-cart", CartController.read);
router.get("/update-cart/:id", CartController.update);
router.get("/delete-cart/:id", CartController.delete);

//wishlist routes
router.get("/create-wishlist", WishlistController.create);
router.get("/read-wishlist", WishlistController.read);
router.get("/update-wishlist/:id", WishlistController.update);
router.get("/delete-wishlist/:id", WishlistController.delete);

module.exports = router;
