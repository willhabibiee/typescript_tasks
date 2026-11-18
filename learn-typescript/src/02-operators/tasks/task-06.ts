/**
 * An internet café charges customers Rp8,000 per hour. 
 * Customers are billed for every started hour. If the total playing time exceeds 5 hours, they receive a 15% discount.
 * Today, a customer used a computer for:
 * 7 hours and 35 minutes
 * 
 * 
 * You need to determine:
 * - Total playing time in minutes
 * - Remaining minutes after full hours
 * - Total billed hours
 * - Total payment before discount
 * - Discount amount
 * - Final payment
 */

const hourlyRate: number = 8000;
const playedHours: number = 7;
const playedMinutes: number = 35;

// 1. Total durasi dalam menit & sisa menit
const totalMinutes: number = (playedHours * 60) + playedMinutes;
const remainingMinutes: number = totalMinutes % 60;

// 2. Pembulatan jam ke atas (setiap jam yang dimulai dihitung 1 jam penuh)
const billedHours: number = Math.ceil(totalMinutes / 60);

// 3. Perhitungan harga & diskon (15% jika main > 5 jam)
const totalBeforeDiscount: number = billedHours * hourlyRate;
const isDiscounted: boolean = billedHours > 5;
const discountAmount: number = isDiscounted ? totalBeforeDiscount * 0.15 : 0;
const finalPayment: number = totalBeforeDiscount - discountAmount;

console.log("Total Menit Bermain:", totalMinutes);
console.log("Sisa Menit:", remainingMinutes);
console.log("Total Jam Dihitung:", billedHours);
console.log("Total Sebelum Diskon:", totalBeforeDiscount);
console.log("Jumlah Diskon:", discountAmount);
console.log("Total Bayar Akhir:", finalPayment);