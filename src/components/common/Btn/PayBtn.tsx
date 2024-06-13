const PayBtn = ({btnFunction} : {btnFunction: ()=>void}) => {
    return <button onClick={btnFunction} className="flex w-[49px] p-[6px] justify-center items-center gap-[10px] rounded-[4px] bg-[#375BD2]">
        <p className="text-[14px] not-italic font-medium leading-[20px]">Pay</p>
    </button>
}

export default PayBtn;