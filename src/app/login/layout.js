export const metadata = {
  title: "User Login | ProductZone",
  description: "Sign in to your ProductZone account",
};

export default function LoginLayout({ children }) {
  return (
    <div className="bg-white dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen overflow-hidden">
      {children}
    </div>
  );
}
