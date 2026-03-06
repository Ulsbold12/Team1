import { useState } from "react";
import FinanceForm from "./_components/FinanceForm";

export default function FinancePage() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        + Нэмэх
      </button>

      {open && <FinanceForm onClose={() => setOpen(false)} />}
    </div>
  );
}