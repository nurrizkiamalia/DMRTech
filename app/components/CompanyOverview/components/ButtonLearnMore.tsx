'use client';

import Button from "@/components/Button/Button"
import { useRouter } from "next/navigation"

const ButtonLearnMore: React.FC = () => {
    const router = useRouter()
    return(
        <>
            <div>
                <Button onCLick={() => router.push("/About")} className="border-none  !p-0 hover:!bg-transparent hover:!text-dspLimeGreen ">
                    See More
                </Button>
            </div>
        </>
    )
}

export default ButtonLearnMore