const AuthLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return <main className="bg-teal-700 min-h-screen">{children}</main>;
};

export default AuthLayout;
