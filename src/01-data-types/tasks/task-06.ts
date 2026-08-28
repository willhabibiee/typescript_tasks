/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */

type Product = {
  productCode: string;
  productName: string;
  price: number;
  stock: number;
  weight: number;
  rating: number;
  isDiscount: boolean;
};

const product1: Product = {
  productCode: "P001",
  productName: "Wireless Mouse",
  price: 125000,
  stock: 150,
  weight: 90,
  rating: 4.5,
  isDiscount: true,
};

const product2: Product = {
  productCode: "P002",
  productName: "Mechanical Keyboard",
  price: 450000,
  stock: 80,
  weight: 950,
  rating: 4.8,
  isDiscount: false,
};

const product3: Product = {
  productCode: "P003",
  productName: "USB-C Cable",
  price: 35000,
  stock: 300,
  weight: 45,
  rating: 4.2,
  isDiscount: true,
};

console.log(product1);
console.log(product2);
console.log(product3);