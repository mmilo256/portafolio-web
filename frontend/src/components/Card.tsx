import Button from "./Button"

interface Props {
    img: string,
    title: string,
    description: string
}

const Card = ({ img, title, description }: Props) => {
    return (
        <article className="shadow shadow-slate-500 rounded overflow-hidden">
            <img className="border-b border-slate-300 h-60 w-full object-cover object-top" src={img} alt={`captura ${title}`} />
            <div className="bg-white p-4">
                <h3 className="text-lg font-bold mb-1">{title}</h3>
                <p className="h-28">{description}</p>
                <div className="flex gap-4">
                    <Button size="md" variant="primary">GitHub</Button>
                    <Button size="md" variant="secondary">Vista previa</Button>
                </div>
            </div>
        </article>
    )
}

export default Card