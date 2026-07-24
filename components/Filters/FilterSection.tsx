type Props = {
  title: string;
  children: React.ReactNode;
};

export default function FilterSection({ title, children }: Props) {
  return (
    <section>
      <h3>{title}</h3>
      {children}
    </section>
  );
}
