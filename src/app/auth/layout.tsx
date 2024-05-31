const AuthLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return <main className="bg-slate-700 min-h-screen">{children}</main>;
};

export default AuthLayout;
