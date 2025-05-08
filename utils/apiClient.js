import dotenv from 'dotenv';
import { expect } from '@playwright/test';
dotenv.config();

export class ProductAPI {
  constructor(request) {
    this.request = request;
    this.baseURL = process.env.BASE_URL;
  }

  async createProduct(data) {
    return await this.request.post(`${this.baseURL}`, {
      data,
    });
  }

  async updateProduct(id, data) {
    return await this.request.put(`${this.baseURL}/${id}`, {
      data,
    });
  }

  async deleteProduct(id) {
    return await this.request.delete(`${this.baseURL}/${id}`);
  }

  async getProductById(id) {
    return await this.request.get(`${this.baseURL}/${id}`);
  }

  async getAllProducts() {
    return await this.request.get(`${this.baseURL}`);
  }
}
