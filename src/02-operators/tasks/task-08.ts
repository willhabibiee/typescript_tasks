/**
 * A smart home monitors electricity usage every day.
 * Today's information:
 * | Information               | Value |
 * | ------------------------- | ----- |
 * | Previous Meter            | 25640 |
 * | Current Meter             | 25892 |
 * | Electricity Price per kWh | 1650  |
 * | Solar Panel Installed     | Yes   |
 * | Energy Saving Mode        | No    |
 * 
 * Business Rules
 * - Electricity usage is calculated from the meter difference.
 * - Houses with solar panels receive a 20% discount.
 * - Houses receive an additional 5% discount if Energy Saving Mode is enabled.
 * - A house qualifies for the Green Energy Program only if:
 *      - Solar panel is installed
 *      - Energy consumption is below 300 kWh
 *      - Energy Saving Mode is enabled
 * 
 * The system must calculate:
 * - Total energy consumption
 * - Electricity bill
 * - Final bill
 * - Green Energy Program eligibility
 */

const previousMeter: number = 25640;
const currentMeter: number = 25892;
const pricePerKwh: number = 1650;
const isSolarPanelInstalled: boolean = true;
const isEnergySavingMode: boolean = false;

// 1. Total penggunaan energi
const totalUsage: number = currentMeter - previousMeter;

// 2. Biaya listrik sebelum diskon
const initialBill: number = totalUsage * pricePerKwh;

// 3. Hitung persentase diskon
let discountPercent: number = 0;
if (isSolarPanelInstalled) discountPercent += 0.20;
if (isEnergySavingMode) discountPercent += 0.05;

// 4. Tagihan akhir & Kelayakan Green Energy Program
const discountAmount: number = initialBill * discountPercent;
const finalBill: number = initialBill - discountAmount;

const isGreenEnergyEligible: boolean = isSolarPanelInstalled && totalUsage < 300 && isEnergySavingMode;

console.log("Total Penggunaan (kWh):", totalUsage);
console.log("Tagihan Awal:", initialBill);
console.log("Tagihan Akhir:", finalBill);
console.log("Lolos Green Energy Program:", isGreenEnergyEligible);