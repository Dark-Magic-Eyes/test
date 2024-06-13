const CommonTitle = ({ title }: { title: string }) => {
  return (
    <div className="flex px-2 py-3 items-start gap-[10px] flex-1 self-stretch rounded bg-[#E4EAF3]">
      <p className="w-fit text-[#140E24] size-[13px] not-italic font-medium leading-[13px] tracking-[-0.26px]">
        {title}
      </p>
    </div>
  );
};

export default CommonTitle;
