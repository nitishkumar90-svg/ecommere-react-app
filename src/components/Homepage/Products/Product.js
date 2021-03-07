import React from 'react'

const Product = ({img}) => {

    return (
    <article className="product">
        <header>
            <img src={img} alt="Product Image" />
            <h3 className="pad-top-4">Blue Jacket<span className="float-right"><i className="far fa-heart"></i></span></h3>
            <data className="pad-top-4" value="39"><del>$50.00</del> <ins>$39.00</ins></data>
            <p className="pad-top-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci dolorem voluptates blanditiis
            repellat
totam aut repellendus maiores laudantium, facilis pariat <a className="extra-content" href="#">see
more...</a></p>

            <dl className="pad-top-4">
                <dt className="font-bold"><img title="Flone Assured" src="./img/verified.png" className="verified-image" alt="" /></dt>
            </dl>

            <dl className="pad-top-4">
                <dt className="font-bold">Rating</dt>
                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i
                    className="fas fa-star"></i><i className="fas fa-star-half-alt"></i>
            </dl>

        </header>
        <form>
            <fieldset>
                <legend className="pad-top-4 font-bold">Colours</legend>
                <ul className="color-variant-fields pad-top-4">
                    <li><input type="radio" checked name="colour" id="Red" value="Red" /> <label for="Red">Red</label></li>
                    <li><input type="radio" name="colour" id="White" value="White" /> <label for="White">White</label></li>
                    <li><input type="radio" name="colour" id="Blue" value="Blue" /> <label for="Blue">Blue</label></li>
                </ul>
            </fieldset>
            <fieldset>
                <legend className="pad-top-4 font-bold">Select Size</legend>
                <ul className="size-fields pad-top-4">
                    <li><input type="radio" checked name="size" id="Size_S_1" value="S" /> <label for="Size_S_1">S</label></li>
                    <li><input type="radio" name="size" id="Size_XL_1" value="XL" /> <label for="Size_XL_1">XL</label></li>
                    <li><input type="radio" name="size" id="Size_XXL_1" value="XXL" /> <label for="Size_XXL_1">XXL</label></li>
                </ul>
            </fieldset>
        </form>
        <footer className="product-footer">
            <button className="cart-button" type="button"><i className="fas fa-cart-plus"></i> Add to Cart</button>
        </footer>
    </article>
    )
}

export default Product