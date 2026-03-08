import { AISection } from "./_components/AISection";
import { Dashboard } from "./_components/Dashboard";
import { GraphicSection } from "./_components/GraphicSection";
import { HeadSection } from "./_components/HeadSection";

export default function Finance() {
  return (
    <div>
      <HeadSection />
      <Dashboard />
      <AISection />
      <GraphicSection />
      <FileUpload />

    </div>
  );
}
