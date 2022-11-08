import "./topbar.scss"
import { Mail } from '@material-ui/icons';

const Topbar = () => {

    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">
                        webandwaves.</a>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>pascal-winner@web.de</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar