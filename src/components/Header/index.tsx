import { cva } from "class-variance-authority";
 
const buttonVariants = cva(["w-10"], {
  variants: {
    intent: {
      primary: "h-10 bg-red-400",
    },
  },
  defaultVariants: {
    intent: "primary",
  },
});

export const Header = () => {
  return (
    <div className="flex w-screen justify-between">
      <img
        src="https://vitejs.dev/logo.svg"
        alt="Vite Logo"
        className="size-20 cursor-pointer p-8"
      />
      <h1 className="bg-amber-600 text-3xl font-bold text-amber-500">
        Hello world!
      </h1>
      <button
        className={buttonVariants}
        onClick={() => console.log("clicked")}>ボタン</button>
    </div>
  );
};
