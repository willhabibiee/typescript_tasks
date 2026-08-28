/**
 * An online marketplace wants to calculate the customer's final payment and reward points after checkout.
 * The customer purchases the following items:
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Monitor Stand       | 420000 |        1 |
 * 
 * Customer Information:
 * | Information       | Value                            |
 * | ----------------- | -------------------------------- |
 * | Voucher Value     | 100000                           |
 * | Premium Member    | Yes                              |
 * | Reward Point Rate | 1 point for every Rp50,000 spent |
 * 
 * Business Rules:
 * - Premium members receive 10% discount.
 * - Voucher is deducted after the membership discount.
 * - Reward points are calculated from the final payment before tax.
 * - VAT is 11%.
 * - Free shipping is available if:
 * - Premium member OR
 * - Final payment before tax exceeds Rp1,500,000.
 * 
 * The checkout system must calculate:
 * - Product subtotal
 * - Membership discount
 * - Voucher deduction
 * - Payment before tax
 * - VAT
 * - Final payment
 * - Reward points
 * - Free shipping eligibility

 */

const priceKeyboard: number = 850000;
const qtyKeyboard: number = 1;

const priceMouse: number = 275000;
const qtyMouse: number = 2;

const priceStand: number = 420000;
const qtyStand: number = 1;

const voucherValue: number = 100000;
const isPremiumMember: boolean = true;
const vatRate: number = 0.11;

// 1. Subtotal
const productSubtotal: number = (priceKeyboard * qtyKeyboard) + (priceMouse * qtyMouse) + (priceStand * qtyStand);

// 2. Diskon & Voucher
const membershipDiscount: number = isPremiumMember ? productSubtotal * 0.10 : 0;
const subtotalAfterDiscount: number = productSubtotal - membershipDiscount;
const paymentBeforeTax: number = subtotalAfterDiscount - voucherValue;

// 3. Pajak & Total Akhir
const vatAmount: number = paymentBeforeTax * vatRate;
const finalPayment: number = paymentBeforeTax + vatAmount;

// 4. Poin & Gratis Ongkir
const rewardPoints: number = Math.floor(paymentBeforeTax / 50000);
const isFreeShipping: boolean = isPremiumMember || paymentBeforeTax > 1500000;

console.log("Subtotal Produk:", productSubtotal);
console.log("Diskon Member:", membershipDiscount);
console.log("Potongan Voucher:", voucherValue);
console.log("Total Sebelum Pajak:", paymentBeforeTax);
console.log("PPN (11%):", vatAmount);
console.log("Total Bayar Akhir:", finalPayment);
console.log("Poin Reward:", rewardPoints);
console.log("Gratis Ongkir:", isFreeShipping);