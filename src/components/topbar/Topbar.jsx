import "./topbar.scss"
import MailIcon from '@mui/icons-material/Mail';

const Topbar = () => {

    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">
                        webandwaves.</a>
                    <div className="itemContainer">
                        <MailIcon className="icon" />
                        <span>pascal-winner@web.de</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar