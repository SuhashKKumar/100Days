import Button from "../UI/Button";
import { useEmailHandler } from "@/hooks/useEmailHandler";

const MobileLoginMethod = () => {
    const { emailHandler } = useEmailHandler();
    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
                <label htmlFor="number" className="font-semibold text-sm">
                    Mobile (personal or work)
                </label>
                <div className="border border-gray-300 rounded-lg p-2 w-full flex">
                    <input
                        type="number"
                        placeholder="+91"
                        className="w-[15%] border p-1 rounded"
                    />
                    <input
                        type="number"
                        id="number"
                        minLength={10}
                        maxLength={10}
                        className="w-full ms-2"
                    />
                </div>
            </div>
            <Button
                variant="primary"
                label="Continue"
                extraStyles="w-full"
                clickHandler={emailHandler}
            />
        </div>
    );
};

export default MobileLoginMethod;
