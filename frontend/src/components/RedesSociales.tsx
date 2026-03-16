import { socialMedia } from "../config/config"

const RedesSociales = () => {
    return (
        <ul className="flex bg-red-500 w-min gap-4">
            {socialMedia.map(item => {
                const Icon = item.icon
                return (
                    <li key={item.label}><a className="relative flex flex-col items-center" target="_blank" href={item.href}>{<Icon size={40} />}
                    </a></li>
                )
            })}
        </ul>
    )
}

export default RedesSociales