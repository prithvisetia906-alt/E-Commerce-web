import { describe,expect,it } from "vitest"; import { calculateTotal,verifyRazorpaySignature } from "./commerce";
describe("commerce calculations",()=>{it("calculates a server-side total",()=>expect(calculateTotal([{unitPrice:14999,quantity:2}],0,2700,1000).total).toBe(31698)); it("verifies Razorpay signatures",()=>{expect(verifyRazorpaySignature("order_1","pay_1","bad","secret")).toBe(false)});});

