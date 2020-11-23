function Header () {
    return (
        <div className="header">
            <div className="top-header">
                <img className="ironhack-logo" src='/images/ironhack-logo.svg' alt="ironhack_logo"/>
                <img className="menu-top" src='/images/menu-top.svg' alt="menu-top"/>
            </div>
            <div className="text-header">
                <h1 className="h1-header">Say hello to ReactJS</h1>
                <p className="p-header">You will learn how to use the most popular frontend library and become a super Ninja developer.</p>
            </div>
            
        </div>
    )
}

export default Header;