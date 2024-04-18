import { redirect } from 'next/navigation';

const Home: React.FC = () => { 
    // return (<>Home</>)
    redirect('/abv-dilution')
};

export default Home;