import paper from "@/assets/images/KJP/paper.webp";
import excel from "@/assets/images/KJP/excel.webp";
import businessFlow from "@/assets/images/KJP/flow.webp";
import odoo from "@/assets/images/KJP/odoo.webp";
import mekari from "@/assets/images/KJP/mekari.webp";
import accurate from "@/assets/images/KJP/accurate.webp";

export const kjpOperationsTables = {
  businessFindings: {
    headers: ["Operational", "Finance / Administration"],
    columns: "repeat(2, minmax(0, 1fr))",
    rows: [
      ["Customer and transaction records were fragmented across entities", "Supplier invoices and payment requests were managed separately"],
      ["Dates and formulas depended on manual Excel input", "Outstanding payments required manual tracking"],
      ["Partial supplier fulfilment had to be remembered manually", "Reporting required reconciling information from multiple sources"],
      ["Inventory movement lacked a reliable single source of truth", "Records were vulnerable to missing or late updates"],
      ["Changes in customer demand could leave excess stock requiring manual adjustment", "Entity-level visibility was inconsistent"],
    ],
  },
  requirements: {
    headers: ["Problem", "System requirement"],
    columns: "minmax(0, 1fr) minmax(0, 1.5fr)",
    rows: [
      ["Manual dates and inconsistent formulas", "Automatic timestamps and system-generated calculations"],
      ["Customer records mixed across entities", "Company-aware customer and transaction records"],
      ["Supplier delivers less than ordered", "Partial receipt with clear pending/cancelled balance"],
      ["Excess purchasing tracked manually", "Real-time inventory and stock movement"],
      ["Information spread across files", "Centralized source of truth"],
      ["Hard to trace transaction status", "End-to-end transaction history and audit trail"],
      ["Three entities difficult to monitor together", "Entity-level reporting with group visibility"],
      ["Repetitive data entry", "Integrated sales, purchasing, inventory and finance flow"],
    ],
  },
  evaluation: {
    headers: ["Criteria", "Odoo", "Mekari Jurnal", "Accurate"],
    columns: "minmax(0, 2fr) repeat(3, minmax(0, 1fr))",
    rows: [
      ["Ease of adoption", "1", "3", "2"],
      ["Implementation simplicity", "1", "3", "3"],
      ["Pricing fit", "2", "2", "3"],
      ["Training & onboarding", "2", "2", "3"],
      ["Local support & stakeholder trust", "2", "2", "3"],
      ["Scalability & flexibility", "3", "2", "2"],
      ["Total", "11/18", "14/18", "16/18"],
    ],
  },
};

export const kjpOperationsImages = {
  paper,
  excel,
  businessFlow,
  odoo,
  mekari,
  accurate,
};
