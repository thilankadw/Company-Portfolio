import FeatureCard from './Components/FeatureCard'
import SpecializeCard from './Components/SpecializeCard';

const Home: React.FC = () => {
  return (

    <>
      <div>
        <div className='flex flex-col gap-[50px] justify-center items-center p-[5px] pt-[50px] pb-[80px]'>

          <div className='text-[40px] sm:text-[60px] font-[500]'>Our Features</div>

          <div className='flex flex-wrap flex-col sm:flex-row gap-[50px] justify-center items-center'>
            <FeatureCard />
            <FeatureCard />
            <FeatureCard />
          </div>

        </div>
        <div className='flex flex-col gap-[50px] justify-center items-center p-[5px] pt-[50px] pb-[80px]'>

          <div className='text-[40px] sm:text-[60px] font-[500]'>We Specialize in</div>

          <div className='flex flex-wrap flex-col sm:flex-row gap-[50px] justify-center items-center'>
            <SpecializeCard title="Web Design & Development"/>
            <SpecializeCard title="Mobile Application Development"/>
            <SpecializeCard title="E-Commerce Development"/>
            <SpecializeCard title="Game Development"/>
          </div>

        </div>
      </div>
    </>
    

  );
}

export default Home;