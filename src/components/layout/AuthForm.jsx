export default function AuthForm({ children }) {
  return (
    <div className="flex justify-center h-screen items-center">
      <div className="w-[400px] bg-primary rounded-[10px] font-rubik p-10">{children}</div>
    </div>
  );
}
