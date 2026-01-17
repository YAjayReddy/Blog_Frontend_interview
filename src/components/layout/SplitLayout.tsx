import { ReactNode } from "react";

const SplitLayout = ({
  sidebar,
  content,
}: {
  sidebar: ReactNode;
  content: ReactNode;
}) => {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[320px_1fr]">
        {/* Left */}
        <aside className="space-y-4">
          {sidebar}
        </aside>

        {/* Right */}
        <section className="min-w-0">
          {content}
        </section>
      </div>
    </main>
  );
};

export default SplitLayout;
