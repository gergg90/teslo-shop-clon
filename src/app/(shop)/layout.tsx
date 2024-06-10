import { Footer, SideBar, TopMenu } from "@/components";

const ShopLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="min-h-screen ">
      <TopMenu />
      <SideBar />

      <div className="px-0 sm:px-10">{children}</div>
      <Footer />
    </main>
  );
};

export default ShopLayout;
