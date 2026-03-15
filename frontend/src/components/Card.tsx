import Button from "./Button";

interface Props {
  img: string;
  title: string;
  description: string;
}

const Card = ({ img, title, description }: Props) => {
  return (
    <article className="text-[#333] bg-white p-4 rounded-lg shadow shadow-slate-600">
      <img
        src={img}
        className="block h-50 w-full object-cover object-top border-2 border-slate-300 rounded-lg"
        alt=""
      />
      <div className="pt-6">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="h-28">{description}</p>
        <div className="space-x-4">
          <Button>GitHub</Button>
          <Button variant="secondary">Vista previa</Button>
        </div>
      </div>
    </article>
  );
};

export default Card;
