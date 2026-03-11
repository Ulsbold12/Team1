import { AISection } from "./_components/AISection";
import { Dashboard } from "./_components/Dashboard";
import FileUpload from "./_components/FileUpload";
import { GraphicSection } from "./_components/GraphicSection";
import { HeadSection } from "./_components/HeadSection";

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
