type LocaleProps = {
    src: string;
    alt: string;
    title: string;
    description: string;
    bullet: string[];
    colors: string[];
}

export const Locale = ({ src, alt, title, description, bullet, colors } : LocaleProps) => {

  return (
    <div>
        <img src={src} alt={alt} className="rounded-xl w-full"/>
        <h1 className="pt-5 font-bold text-3xl">{title}</h1>
        <span className="text-sm">{description}</span>
        <h3 className="text-sm font-bold pt-6">Bom para:</h3>
            <ul className="text-sm font-bold list-disc list-inside pb-12">
                {bullet.map((item, index) => (
                    <li key={index} style={{ color: colors[index] }}>{item}</li>
                ))}
            </ul>
    </div>
  )
}
