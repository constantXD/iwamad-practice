type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  return (
    <header className="py-4 text-center">
      <h1 className="text-2xl font-bold text-slate-800">{title}</h1>
    </header>
  );
};
