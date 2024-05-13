'use client';

import Button from "@/components/Button/Button"
import { useRouter } from "next/navigation"

const ButtonToService: React.FC = () => {
    const router = useRouter()
    return(
        <>
            <div>
                <Button onCLick={() => router.push("/ServiceCompany")}>
                    What We Do
                </Button>
            </div>
        </>
    )
}

export default ButtonToService