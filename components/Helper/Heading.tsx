interface HeadingProps {
  headingPrimary: string;
  headingSub: string;
}

export const Heading = ({ headingPrimary, headingSub }: HeadingProps) => {
  return (
    <div className="text-center p-2">
      <h1 className="font-semibold text-[22px] md:text-[28px] text-yellow-300">
        {headingSub}
      </h1>
      <h1 className="font-bold text-[25px] sm:text-[30px] md:text-[38px] text-white">
        {headingPrimary}
      </h1>
    </div>
  );
};
