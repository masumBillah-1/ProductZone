export const metadata = {
  title: "Sign Up - ProductZone",
  description: "Create your ProductZone account",
};

export default function RegisterLayout({ children }) {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col transition-colors duration-300">
      {children}
    </div>
  );
}
