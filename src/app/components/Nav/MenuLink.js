import Link from "next/link";

const MenuLink = (
    {
        text,
        path
    }
) => {
    return(
        <Link
            href={path}
            className="text-base text-white mr-8 last-of-type:mr-0"
        >
            {text}
        </Link>
    )
}

export default MenuLink