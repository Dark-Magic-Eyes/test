import Image from "next/image";
import CommonTextField from "../TextField/CommonTextField";

const SolBalanceField = ({balance} : {balance:string}) => {
    return (
        <div className="flex flex-col justify-center items-end self-stretch">
            <div className="flex justify-between items-start self-stretch">
                <CommonTextField>Your Balance</CommonTextField>
                <div className="flex justify-center items-center gap-[6px]">
                    <CommonTextField>{balance} TON</CommonTextField>
                </div>
            </div>
        </div>
    )
}

export default SolBalanceField;