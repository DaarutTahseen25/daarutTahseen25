import React from "react";
import { usePageTitle } from "../../hooks/usePageTitle";
import DashTitle from "../../Components/DashTitle";

const Payments = () => {
  usePageTitle("Payments");
  return (
    <section className="">
      <div className="max-w-7xl  mb-8 md:mb-12">
        <DashTitle
          title="Payments"
          subtitle="View earnings, track payouts, and manage your payment details"
        />
      </div>
    </section>
  );
};

export default Payments;
