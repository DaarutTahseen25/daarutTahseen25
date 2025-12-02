import React from "react";
import DashTitle from "../../Components/DashTitle";
import { usePageTitle } from "../../hooks/usePageTitle";

const PayFees = () => {
  usePageTitle("Payments");
  return (
    <section className="">
      <div className="max-w-7xl  mb-8 md:mb-12">
        <DashTitle
          title="Pay Fees"
          subtitle="View outstanding balances and complete your tuition or other payments"
        />
      </div>
    </section>
  );
};

export default PayFees;
