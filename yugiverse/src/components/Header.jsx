import "./css/Header.css";
import Navigation from "./Navigation";

function Header() {
    return (
        <header id="main-header">
            <div id="header-title">
                <h1>Yu-Gi-Verse</h1>
            </div>
            <Navigation />
        </header>
    );
}

export default Header;
