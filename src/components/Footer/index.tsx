import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer>
            <div>
                <div>
                    <h2>DS³</h2>
                    <Link
                    href="https://www.google.com/maps/place/Joan+Foley+Hall,+1265+Military+Trail,+Scarborough,+ON+M1C+1A4/@43.7825084,-79.1853174,17z/data=!3m1!4b1!4m6!3m5!1s0x89d4da6f64d59895:0x5f56f6c0bd00e08!8m2!3d43.7825084!4d-79.1853174!16s%2Fg%2F1tfdff_t?entry=ttu"
                    target='_blank'
                    >
                    <p>1265 Military Trail</p>
                    <p>Toronto, ON</p>
                    <p>M1C 1A4</p>
                    </Link>
                    <div>

                    </div>
                </div>
                <div>
                    <p>Copyright © DS3 2023. All Rights Reserved</p>
                </div>
            </div>
            <div>

            </div>
        </footer>
    )
}

export default Footer