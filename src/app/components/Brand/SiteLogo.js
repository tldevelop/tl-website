import Link from "next/link"

const SiteLogo = () => {
    return (
        <Link
            href="/"
            className="flex cursor-default"
        >
            <img
                src="/assets/tl-logo.png"
                className="w-12 cursor-pointer"
            />
        </Link>
    )
}

export default SiteLogo