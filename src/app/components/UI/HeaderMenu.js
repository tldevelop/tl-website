import NAVIGATIONS from "@/app/lib/navigations";
import MenuLink from "../Nav/MenuLink";

const headerMenu = NAVIGATIONS.header

const HeaderMenu = () => {
    return (
        <nav
            className="flex w-full justify-end"
        >
            {
                headerMenu.map(el => (
                    <MenuLink
                        key={el.id}
                        text={el.text}
                        path={el.path}
                    />
                ))
            }
        </nav>
    )
}

export default HeaderMenu