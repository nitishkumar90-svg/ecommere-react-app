import React from 'react'

const Header = () => {
    const imageLogo = require('../../img/logo.png').default
    return (
        <header class="page-header pad-top-4">
            <article class="container">
                <article class="grid grid-2">
                    <a href="index.html" class="logo text-left"><img src={imageLogo} alt="Flont." /></a>
                    <article class="text-right icons">
                        <ul class="your-products flex text-right">
                            <li class="hidden-on-mobile-view show-on-webview"><a class="font-bold" id="shop-submenu" href="#">Shop<i
                                class="fas fa-chevron-down shop-arrow"></i></a>
                                <ul class="hidden submenu shop-submenu-options" id="shop-submenu-options">
                                    <li><a href="#">Top Wear</a></li>
                                    <li><a href="#">Bottom Wear</a></li>
                                </ul>
                            </li>
                            <li class="hidden-on-mobile-view show-on-webview"><a class="font-bold" href="#">About</a></li>
                            <li class="hidden-on-mobile-view show-on-webview"><a class="font-bold" href="#">Contact</a></li>
                            <li class="hidden-on-mobile-view show-on-webview"><input class="search-text" type="text"
                                placeholder="Search..." /><i class="fas fa-search search-icon" ></i></li>
                            <li><a class="pad-left-10" href="#"><i class="fa-icon far fa-heart"></i></a></li>
                            <li><a href="#"><i class="fa-icon fas fa-shopping-basket"></i></a></li>
                            <li class="hide-on-webview show-on-tablet"><a id="nav-icon" href="#"><i class="fa-icon fas fa-bars"></i></a></li>
                        </ul>
                        <nav aria-label="Primary" id="nav-options" class="navigation hidden">
                            <ul class="menu">
                                <li><input class="search-text" type="text" placeholder="Search..." /><i
                                    class="fas fa-search search-icon"></i></li>
                                <li><a class="font-bold" href="#">Shop<i class="fas fa-chevron-down shop-arrow"></i></a>
                                    <ul class="submenu">
                                        <li><a href="#">Top Wear</a></li>
                                        <li><a href="#">Bottom Wear</a></li>
                                    </ul>
                                </li>
                                <li><a class="font-bold" href="#">About</a></li>
                                <li><a class="font-bold" href="#">Contact</a></li>
                            </ul>
                        </nav>
                    </article>
                </article>
            </article>
        </header>
    )
}

export default Header