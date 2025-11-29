import useDirection from "../hooks/useDirection";

function Layout({ children }: { children: React.ReactNode }) {
  useDirection("fa");

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-bg">
      {children}
    </div>
  );
}

export default Layout;
