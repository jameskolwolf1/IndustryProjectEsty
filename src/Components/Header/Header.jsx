import "./Header.scss";
import HomeIcon from "../../../public/homeLogo.svg";
import DealIcon from "../../../public/dealsLogo.svg";
import seasonalGiftLogo from "../../../public/material-symbols_featured-seasonal-and-gifts.svg";
import heartIcon from '../../../public/mdi_heart-outline.svg';
import cartLogo from "../../../public/mdi_cart-outline.svg"

function Header(){
    return(

        <header className="header">
            <div className="home_container">
                <img className="home_img" src={HomeIcon} />
                <h4 className="home_title">Home</h4>
            </div>
            <div className="deals_container">
                <img className="deals_img" src={DealIcon}/>
                <h4 className="deals_title">Deals</h4>
            </div>
            <div className="gifts_container">
                <img className="gifts_img" src={seasonalGiftLogo}/>
                <h4 className="gifts_title">Gifts</h4>
            </div>
            <div className="favorite_container">
                <img className="favorite_img" src={heartIcon}/>
                <h4 className="favorite_title">Favorites</h4>
            </div>
            <div className="cart_container">
                <img className="cart_img" src={cartLogo}/>
                <h4 className="cart_title">Cart</h4>
            </div>
        </header>

    );
}

export default Header;