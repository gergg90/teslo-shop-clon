import TopMenu from "@/components/ui/top-menu/TopMenu";

const ShopLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="min-h-screen ">
      <TopMenu />

      {children}
    </main>
  );
};

export default ShopLayout;
