/**
 * An online store is processing a customer's shopping cart.
 * The customer purchased:
 * 
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Mouse Pad           | 120000 |        1 |
 * 
 * Business Rules:
 * - Customers receive 10% discount if the total purchase exceeds Rp1,000,000.
 * - Only Premium members receive free shipping.
 * - Every purchased product increases the total item counter.
 * 
 * Additional Information: Current customer is Premium member.
 * 
 * Task:
 *  - Calculate subtotal.
 *  - Count the total purchased items using an increment operator.
 *  - Determine whether a discount should be applied.
 *  - Calculate the final payment.

 */

const priceKeyboard: number = 850000;
const qtyKeyboard: number = 1;

const priceMouse: number = 275000;
const qtyMouse: number = 2;

const priceMousePad: number = 120000;
const qtyMousePad: number = 1;

const isPremiumMember: boolean = true;

// 1. Subtotal
const subtotal: number = (priceKeyboard * qtyKeyboard) + (priceMouse * qtyMouse) + (priceMousePad * qtyMousePad);

// 2. Count total items using increment operator
let totalItems: number = 0;
totalItems += qtyKeyboard;
totalItems += qtyMouse;
totalItems += qtyMousePad;

// 3. Discount logic (10% if subtotal > 1,000,000)
const isDiscountApplied: boolean = subtotal > 1000000;
const discountAmount: number = isDiscountApplied ? subtotal * 0.1 : 0;

// 4. Final payment
const finalPayment: number = subtotal - discountAmount;

console.log("Subtotal:", subtotal);
console.log("Total Items:", totalItems);
console.log("Dapat Diskon:", isDiscountApplied);
console.log("Diskon (Rp):", discountAmount);
console.log("Is Premium Member:", isPremiumMember);
console.log("Total Bayar Akhir:", finalPayment);