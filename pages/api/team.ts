import { NextApiRequest, NextApiResponse } from "next";

interface TeamMember {
    name: string;
    position: string;
    src: string;
    alt: string;
}
  
type TeamGroups = 'Executives';
  
const team: Record<TeamGroups, TeamMember[]> = {
    Executives: [
      {
        name: 'Aditya Kulkarni',
        position: 'President',
        src: '../assets/Team/Executives/Aditya Kulkarni.jpg',
        alt: 'Aditya Kulkarni',
      },
      {
        name: 'Tianne Pane',
        position: 'Vice President of Operations',
        src: '../assets/Team/Executives/Tianne Pane.jpg',
        alt: 'Tianne Pane',
      },
      {
        name: 'Christine Van',
        position: 'Vice President of Operations ',
        src: '../assets/Team/Executives/Christine Van.png',
        alt: 'Christine Van',
      },
      {
        name: 'Anaqi Amir',
        position: 'Vice President of Academics',
        src: '../assets/Team/Executives/Anaqi Amir.jpg',
        alt: 'Anaqi Amir',
      },
      {
        name: 'Malhar Pandya',
        position: 'Vice President of Academics',
        src: '../assets/Team/Executives/Malhar Pandya.jpg',
        alt: 'Malhar Pandya',
      },
      {
        name: 'Hibah Mehvish',
        position: 'Vice President of Communications',
        src: '../assets/Team/Executives/Hibah Mehvish.jpg',
        alt: 'Hibah Mehvish',
      },
      {
        name: 'Thanaree Srirawewongsa (Jean)',
        position: 'Vice President of Campus Life',
        src: '../assets/Team/Executives/Thanaree Srirawewongsa (Jean).jpg',
        alt: 'Thanaree Srirawewongsa (Jean)',
      },
      {
        name: 'Khadeem Sankar',
        position: 'Vice President of Outreach ',
        src: '../assets/Team/Executives/Khadeem Sankar.jpg',
        alt: 'Khadeem Sankar',
      },
    ],
};


// teamHandler function checks if incoming request method is 'GET'.
// if so, it responds with the JSON representation of the team export array.
// if not, it responds with a 405 Method Not Allowed error.
export default function teamHandler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        // console.log("Request received.");
        res.status(200).json(team)
    } else {
        res.status(405).json({ message: 'Method Not Allowed' })
    }
}