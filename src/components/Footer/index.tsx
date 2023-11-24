import Link from 'next/link'
import {FaGithub, FaLinkedin, FaYoutube, FaDiscord, FaEnvelope, FaMedium, FaInstagram} from 'react-icons/fa'

export default function Footer () {

    const icons = [
        { icon: <FaDiscord style={{ fontSize: '2rem' }} />, link: 'https://discord.com/invite/xDpujjZ' },
        { icon: <FaEnvelope style={{ fontSize: '2rem' }} />, link: 'https://docs.google.com/forms/d/e/1FAIpQLSe2-hoS0EmTDOii6JXt3ljkfPo8nuz1EdHfSy71FQuTMJhnCw/viewform' },
        { icon: <FaGithub style={{ fontSize: '2rem' }} />, link: 'https://github.com/theDS3' },
        { icon: <FaInstagram style={{ fontSize: '2rem' }} />, link: 'https://www.instagram.com/ds3.utsc' },
        { icon: <FaLinkedin style={{ fontSize: '2rem' }} />, link: 'https://www.linkedin.com/company/the-data-science-statistics-society/?fbclid=IwAR0pK1obf403GMp6qXzIQm_1F9zFZjKrTMx8FlBBD3D-j5BM4vi6gQGUF2U' },
        { icon: <FaMedium style={{ fontSize: '2rem' }} />, link: 'https://medium.com/@thedatasciencecube' },
        { icon: <FaYoutube style={{ fontSize: '2rem' }} />, link: 'https://www.youtube.com/@ds3UTSC' },
    ];

    return (
        <footer className='flex justify-center max-w-full bg-[#181516]'>
            <div className='p-8'>
                <div className='grid grid-cols-1 sm:grid-cols-2'>
                    <div className='justify-self-start'>
                        <p className='text-white font-bold text-xl text-center sm:text-left'>STAY CONNECTED</p>
                        <p className='text-gray-400 pt-2 text-center sm:text-left'>Join the ML, Data Science, and Statistics Club at the University of Toronto Scarborough.</p>
                        <div className='flex space-x-2 pt-8 justify-center sm:justify-start pb-8'>
                            {icons.map((item, index: number) => (
                                <Link key={index} href={item.link} target='_blank'>
                                    <div className='text-gray-400 hover:text-amber-100/80 transition duration-300 cursor-pointer'>
                                        {item.icon}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className='sm:justify-self-end justify-self-center pb-8'>
                        <p className='text-white font-bold text-xl'>QUICK LINKS</p>
                        <div className='border-b-2 border-gray-400 w-25 mx-auto mb-4'></div>
                        <div className='flex flex-col space-y-2 items-center'>
                            <Link
                            href='#about'>
                                <p className='text-gray-400 hover:text-white transition duration-300 cursor-pointer'>About Us</p>
                            </Link>
                            <Link
                            href='#sponsors'>
                                <p className='text-gray-400 hover:text-white transition duration-300 cursor-pointer'>Sponsors</p>
                            </Link>
                            <Link
                            href='#team'>
                                <p className='text-gray-400 hover:text-white transition duration-300 cursor-pointer'>Our Team</p>
                            </Link>
                            <Link
                            href='#events'>
                                <p className='text-gray-400 hover:text-white transition duration-300 cursor-pointer'>Events</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="text-gray-400 border-t border-b border-gray-500/50 p-2 flex flex-col items-center lg:flex-row lg:items-center lg:justify-center">
                    <p className="lg:mr-2 text-center">
                        University of Toronto Scarborough <span className='hidden lg:inline'>•</span><br className="lg:hidden" /> 1265 Military Trail, Toronto, ON M1C 1A4 <span className='hidden lg:inline'>•</span>
                    </p>
                    <Link
                        href="https://www.google.com/maps/place/Joan+Foley+Hall,+1265+Military+Trail,+Scarborough,+ON+M1C+1A4/@43.7825084,-79.1853174,17z/data=!3m1!4b1!4m6!3m5!1s0x89d4da6f64d59895:0x5f56f6c0bd00e08!8m2!3d43.7825084!4d-79.1853174!16s%2Fg%2F1tfdff_t?entry=ttu"
                        target='_blank'
                    >
                        <p className="underline hover:text-white transition duration-300 cursor-pointer">MAP</p>
                    </Link>
                </div>
                <div className='text-gray-400 text-center pt-4'>
                    <p className='text-sm'>Copyright © DS³ 2023. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}