import NextImage from 'next/image';

const Home: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <NextImage src="/logo1.png" width={300} height={300} alt="Cat Lab" />
    </div>
  );
};

export default Home;
