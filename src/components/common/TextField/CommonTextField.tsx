const CommonTextField = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <p className="text-[#262626] text-[12px] not-italic font-medium leading-[16px]">
      {children}
    </p>
  );
};
export default CommonTextField;
