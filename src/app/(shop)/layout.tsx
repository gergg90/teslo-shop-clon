import React from "react";

const ShopLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="min-h-screen bg-red-500">
      <h1>ShopLayout</h1>
      {children}
    </main>
  );
};

export default ShopLayout;
