'use client';

import Button from "@/components/Button/Button"
import { useRouter } from "next/navigation"

const ButtonLearnMore: React.FC = () => {
    const router = useRouter()
    return(
        <>
            <div>
                <Button onCLick={() => router.push("/About")}>
                    Learn More
                </Button>
            </div>
        </>
    )
}

export default ButtonLearnMore