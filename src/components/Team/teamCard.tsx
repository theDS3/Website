import React from 'react';
import Image from 'next/image';
import AdityaKulkarni from '../../public/Team/Executives/Aditya Kulkarni.jpg'
import AnaqiAmir from '../../public/Team/Executives/Anaqi Amir.jpg'
import ChristineVan from '../../public/Team/Executives/Christine Van.png'
import HibahMehvish from '../../public/Team/Executives/Hibah Mehvish.jpg'
import KhadeemSankar from '../../public/Team/Executives/Khadeem Sankar.jpg'
import MalharPandya from '../../public/Team/Executives/Malhar Pandya.jpg'
import Jean from "../../public/Team/Executives/Jean.jpg"
import TiannePane from '../../public/Team/Executives/Tianne Pane.jpg'

const profileImages: Record<string, any> = {
    "Aditya Kulkarni": AdityaKulkarni,
    "Anaqi Amir": AnaqiAmir,
    "Christine Van": ChristineVan,
    "Hibah Mehvish": HibahMehvish,
    "Khadeem Sankar": KhadeemSankar,
    "Malhar Pandya": MalharPandya,
    "Jean": Jean,
    "Tianne Pane": TiannePane,
}

interface TeamCardProps {
name: string;
position: string;
alt: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, position, alt }) => {
    return (
        <div className="text-center grid justify-center items-center">
            <div className='flex justify-center items-center'>
                <Image src={profileImages[alt]} alt={alt} width={250} height={250} className="rounded-full" />
            </div>
            <div className="py-5">
                <h3 className="text-xl font-bold text-red-400 capitalize relative mb-5">
                    {name}
                    <span className="before-after-line" />
                </h3>
                <p className="text-base capitalize text-white">
                    <span className="bullet" />
                    {position}
                </p>
            </div>
        </div>
    );
};

export default TeamCard;
