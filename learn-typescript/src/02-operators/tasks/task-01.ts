/**
 * The school cafeteria sells lunch packages to students. Today, Raka purchased 3 fried rice meals, each costing Rp18,000, and 2 bottles of mineral water, each costing Rp5,000. Because he is a member of the student council, he received a Rp10,000 discount.
 * The cashier wants to calculate:
 *  - Total price of fried rice
 *  - Total price of drinks
 *  - Total price before discount
 *  - Final amount to be paid
 *
 * Task:
 * 1. Use operators to calculate:
 *  - Total food price
 *  - Total drink price
 *  - Grand total
 *  - Final payment
 * 2. Display the calculation results.
 */

const qtyNasiGoreng: number = 3;
const hargaNasiGoreng: number = 18000;

const qtyAirMinum: number = 2;
const hargaAirMinum: number = 5000;

const diskon: number = 10000;

const totalFoodPrice: number = qtyNasiGoreng * hargaNasiGoreng;
const totalDrinkPrice: number = qtyAirMinum * hargaAirMinum;
const grandTotal: number = totalFoodPrice + totalDrinkPrice;
const finalPayment: number = grandTotal - diskon;

console.log("Total harga makanan:", totalFoodPrice);
console.log("Total harga minuman:", totalDrinkPrice);
console.log("Total sebelum diskon:", grandTotal);
console.log("Total bayar akhir:", finalPayment);