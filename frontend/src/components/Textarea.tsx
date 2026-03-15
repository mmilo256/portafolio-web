interface Props {
  label: string;
  name: string;
}

const Textarea = ({ label, name }: Props) => {
  return (
    <label className="flex flex-col" htmlFor={name}>
      <p className="text-sm font-bold text-slate-600 mb-1">{label}</p>
      <textarea
        id={name}
        className="border border-slate-300 rounded text-lg p-2 resize-none h-36"
      />
      <p className="text-xs mb-1 opacity-0">
        Ha ocurrido un error con el campo que estas intentando alterar.
      </p>
    </label>
  );
};

export default Textarea;
