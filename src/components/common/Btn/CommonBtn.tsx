const CommonBtn = ({btnText, btnFunction} : {btnText:string, btnFunction: ()=>void}) => {
    return <button onClick={btnFunction} className="flex px-[40px] py-[12px] flex-col justify-center items-center gap-[10px] rounded-[4px] bg-[#375BD2] [box-shadow:0px_12px_32px_-12px_rgba(0,_0,_0,_0.25)]">
        <p className="text-[14px] not-italic font-medium leading-[20px]">{btnText}</p>
    </button>
}

export default CommonBtn;