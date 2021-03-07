import React from 'react'

const Footer = () => {
    return (
        <footer class="page-footer grey-background">
            <article class="container">
                <ul class="social flex">
                    <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                </ul>
                <nav aria-label="Legal">
                    <ul class="legal flex">
                        <li><a href="#">Terms of Use</a></li><span>&nbsp;|&nbsp;</span>
                        <li><a href="#">Privacy Policy</a></li><span>&nbsp;|&nbsp;</span>
                        <li><a href="#">Accessibility Policy</a></li>
                    </ul>
                </nav>
                <p class="copyright text-right"><strong>Flone.</strong> &copy; Copyright, 2021.</p>
            </article>
        </footer>
    )
}

export default Footer