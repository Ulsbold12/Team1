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
import { AISection } from "./_components/AISection";
import { Dashboard } from "./_components/Dashboard";
import FileUpload from "./_components/FileUpload";
import { GraphicSection } from "./_components/GraphicSection";
import { HeadSection } from "./_components/HeadSection";

/**
 * Renders the Finance page by composing the page header, dashboard, AI section, graphic section, and file upload.
 *
 * @returns The page's JSX element containing HeadSection, Dashboard, AISection, GraphicSection, and FileUpload components
 */
export default function Finance() {
  return (
    <div className="flex-1 overflow-y-auto p-8 space-y-8 bg-muted/30 text-foreground">
      <HeadSection />
      <FileUpload />
      <Dashboard />
      <AISection />
      <GraphicSection />
      

    </div>
  );
}
