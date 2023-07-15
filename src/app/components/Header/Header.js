import HalfSection from "../UI/HalfSection";
import SiteLogo from "../Brand/SiteLogo";
import HeaderMenu from "../UI/HeaderMenu";

const Header = () => {
    return (
        <header
            className="flex px-4 py-6"
        >
            <HalfSection>
                <SiteLogo/>
            </HalfSection>
            <HalfSection>
                <HeaderMenu/>
            </HalfSection>
        </header>
    )
}

export default Header