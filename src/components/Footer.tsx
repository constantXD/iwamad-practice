type FooterProps = {
  year: number;
  author: string;
};

export const Footer = ({ year, author }: FooterProps) => {
  return (
    <footer className="py-4 text-center text-xs text-slate-400">
      <p>
        &copy; {year} {author}. All rights reserved.
      </p>
    </footer>
  );
};
