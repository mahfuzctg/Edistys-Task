import { useEffect, useState } from "react";

const Countdown = () => {
  const [years, setYears] = useState(0);
  const [institutions, setInstitutions] = useState(0);
  const [customers, setCustomers] = useState(0);

  useEffect(() => {
    const yearInterval = setInterval(() => {
      if (years < 20) setYears((prev) => prev + 1);
    }, 100);

    const institutionsInterval = setInterval(() => {
      if (institutions < 40) setInstitutions((prev) => prev + 1);
    }, 150);

    const customersInterval = setInterval(() => {
      if (customers < 200) setCustomers((prev) => prev + 1);
    }, 50);

    if (years >= 20 && institutions >= 40 && customers >= 200) {
      clearInterval(yearInterval);
      clearInterval(institutionsInterval);
      clearInterval(customersInterval);
    }

    return () => {
      clearInterval(yearInterval);
      clearInterval(institutionsInterval);
      clearInterval(customersInterval);
    };
  }, [years, institutions, customers]);

  return (
    <div className="countdown-container text-center py-20">
      <h2 className="text-lg font-semibold mb-6 text-[#1674E1]">
        TRUSTED BY THE BEST
      </h2>

      {/* ✅ Responsive Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-4xl mx-auto">
        {/* ✅ Years of Experience */}
        <div className="stat-item text-4xl font-bold">
          <p className="text-8xl text-[#1674E1]">
            {">"}
            {years}
          </p>
          <p className="text-lg">Years of Experience</p>
        </div>

        {/* ✅ Financial Institutions */}
        <div className="stat-item text-4xl font-bold">
          <p className="text-8xl text-[#1674E1]">{institutions}+</p>
          <p className="text-lg">Financial Institutions</p>
        </div>

        {/* ✅ Customers */}
        <div className="stat-item text-4xl font-bold">
          <p className="text-8xl text-[#1674E1]">{customers}m</p>
          <p className="text-lg">Customers Each</p>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
