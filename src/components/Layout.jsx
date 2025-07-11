import Header from "./header";

const Layout = ({ children }) => {
  return (
    <div className="bg-gradient-to-br from-background to-muted">
      <Header />
      <main className="min-h-screen container mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="border-t backdrop-blur py-10 supports-[backdrop-filter]:bg-background/60 ">
        <div className=" container mx-auto text-center text-gray-400 px-4">
          <p>
            Powered by ⚡
            <span className="font-semibold text-yellow-500">
              Md. Borhan Rabbani
            </span>{" "}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
