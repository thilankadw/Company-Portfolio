
interface SpecializeCardProps {
    title: string;
    description: string;
}

const SpecializeCard: React.FC<SpecializeCardProps> = ({ title, description }) => {
  return (
    <>
        <div className="border-[#fff] border-[1.5px] flex flex-col justify-start items-start gap-[40px] p-[30px] rounded-[20px] sm:w-[675px] relative hover:bg-black transition duration-5000">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-[40px]">
                <div className="w-[100px] h-[100px] rounded-full border-[#303030] border-[7px] bg-black"></div>
                <div className="text-[25px] sm:text-[30px] text-center">{title}</div>
            </div>
            <div className="w-full text-justify text-[13px] sm:text-[15px] font-[200]">It’s not a surprise that we do web application development too, when we say we are the best IT service provider you could ask for. Just let us know what you want and it will be yours.</div>
        </div>
    </>
  );
}

export default SpecializeCard;