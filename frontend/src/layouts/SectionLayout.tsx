import Container from "../components/Container";

interface Props {
  children: React.ReactNode;
  id: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
}

const SectionLayout = ({
  children,
  id,
  title,
  subtitle,
  dark = false,
}: Props) => {
  return (
    <section
      id={id}
      className={`pt-30 pb-10 ${dark && "bg-slate-700 text-white"}`}
    >
      <Container>
        <h2 className="mb-2 font-bold text-center text-4xl md:text-4xl">
          {title}
        </h2>
        {subtitle && <p className="text-center mb-10">{subtitle}</p>}
      </Container>
      {children}
    </section>
  );
};

export default SectionLayout;
