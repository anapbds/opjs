import { Router } from 'express';
import { createCategories } from './app/useCases/categories/createCategory';
import { listCategories } from './app/useCases/categories/listCategories';

export const router = Router();

// List categories
router.get('/categories', listCategories);

// Create Category
router.post('/categories', createCategories);

// List Products
router.get('/products', (req, res) => {
  res.send('OK');
});

// Create Product
router.post('/products', (req, res) => {
  res.send('OK');
});

// Get products by category
router.get('/categories/:categoryID/products', (req, res) => {
  res.send('OK');
});

// List Orders
router.get('/orders', (req, res) => {
  res.send('OK');
});

// Create Order
router.post('/orders', (req, res) => {
  res.send('OK');
});

// Change order status
router.patch('/orders/:orderID', (req, res) => { //patch = alteração parcial
  res.send('OK');
});

// Delete/cancel order
router.delete('/orders/:orderID', (req, res) => {
  res.send('OK');
});
