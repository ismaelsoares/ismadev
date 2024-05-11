interface HeadingProps {
  headingPrimary: string;
  headingSub: string;
}

export const Heading = ({ headingPrimary, headingSub }: HeadingProps) => {
  return (
    <div className="text-center p-2">
      <h1 className="text-2xl md:text-[28px] text-yellow-500">{headingSub}</h1>
      <h1 className="text-4xl sm:text-[30px] md:text-[38px] dark:text-white">
        {headingPrimary}
      </h1>
    </div>
  );
};
