"use client"
import "../sidemenu/sidemenu.css"


const SideMenu = () => {
    //TODO: hamburger button should be position absolute and turn into the exit button when the menu is open
    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        document.querySelector("body").style.marginRight = "250px";
        // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.querySelector("body").style.marginRight = "0";
        // document.body.style.backgroundColor = "white";
    }

    return (
        <div className="foobar">
            <span className="open-nav" onClick={openNav}>&#9776; open</span>
            <div id="mySidenav" className="sidenav">
                <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
                <a href="#">OpenSea</a>
                <a href="#">Discord</a>
                <a href="#">Twitter</a>
                <a href="#">Lessons</a>
                <a href="#">Disclaimer</a>
            </div>
        </div>
    )
}

export default SideMenu;