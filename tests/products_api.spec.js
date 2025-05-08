import { test, expect } from '@playwright/test';
import { ProductAPI } from '../utils/apiClient';
import { assertObjectMatch } from '../utils/assertions';
import productData from '../data/testData.json';

test.describe('Product API tests', () => {
  let api;
  let createdProductId;

  test.beforeEach(async ({ request }) => {
    api = new ProductAPI(request);
  });

  test('Create a new product', async () => {
    const response = await api.createProduct(productData.newProduct);
    expect(response.status()).toBe(201);
    const responseN = await response.json();
    createdProductId = responseN.id;
    assertObjectMatch(responseN, productData.newProduct);
    console.log(responseN)
  });

  test('Update product details', async () => {
    const updatedData = { ...productData.newProduct, ...productData.updateProduct };
    const response = await api.updateProduct(createdProductId, updatedData);
    expect(response.status()).toBe(200);

    const updated = await response.json();
    assertObjectMatch(updated, updatedData);
  });

  test('Get all products', async () => {
    const response = await api.getAllProducts();
    expect(response.status()).toBe(200);
  
    const products = await response.json();
    expect(Array.isArray(products)).toBe(true);
    expect(products.length).toBeGreaterThan(0); // At least one product
    console.log(products)
  });

  test('Get product by ID', async () => {
    const idToCheck = "1"; // Use an existing ID
    const response = await api.getProductById(idToCheck);
    expect(response.status()).toBe(200);
  
    const product = await response.json();
    expect(product.id).toBe(idToCheck);
    expect(product).toHaveProperty('title'); // Optional field checks
    console.log(product)
  });
  
  test('Delete the product', async () => {
    const response = await api.deleteProduct(createdProductId);
    expect(response.status()).toBe(200);
  });
});
