import Image from 'next/image'
import Link from 'next/link'

import { Sponsors } from '../sponsors-config'

export default function SponsorsCard({ name, logo, link }: Sponsors ) {
    return (
        <div
        style={{ boxShadow: '8px 8px 0px 0px #c190f0', width: '200px', height: 'auto' }}
        className="rounded-lg bg-white">
            <Link href={link} target='_blank'>
                <Image 
                    src={logo}
                    alt={name}
                    className='rounded-lg'
                />
            </Link>
        </div>
    )
  }
  