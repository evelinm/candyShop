import { Fragment } from 'react';
import Link from 'next/link';

const Homepage = () => {
    return (
        <Fragment>
            <h1> Candy Shop</h1>
            <ul>
                <li>
                    <Link href="/cart">
                    Cart
                    </Link>
                </li>
            </ul>
        </Fragment>
    )
}
export default Homepage;