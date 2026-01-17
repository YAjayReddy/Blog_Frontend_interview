import Footer from "./Footer";

const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className="mx-auto mt-5 max-w-5xl px-4">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default PageContainer;
