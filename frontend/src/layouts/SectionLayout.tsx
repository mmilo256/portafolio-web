interface Props {
    children: React.ReactNode,
    title: string,
    subtitle?: string
}

const SectionLayout = ({ children, title, subtitle }: Props) => {
    return (
        <section className="mt-12">
            <h2 className="pt-4 text-center mb-2 text-3xl md:text-4xl">{title}</h2>
            {subtitle && <p className="text-center pb-8">{subtitle}</p>}
            {children}
        </section>
    )
}

export default SectionLayout