'use client';

import Button from "@/components/Button/Button"
import { useRouter } from "next/navigation"

const ButtonToServiceOverview: React.FC = () => {
    const router = useRouter()
    return(
        <>
            <div>
                <Button onCLick={() => router.push("/")}>
                    What we do
                </Button>
            </div>
        </>
    )
}

export default ButtonToServiceOverview