'use client';
import Link from "next/link"
import { useRouter } from "next/navigation";
const Landing = () => {

    const router = useRouter();
    const goToDash = () => {
        router.push("/dashboard");
    }
    return (
        <div className="">
            This is landing page
            <button onClick={goToDash}>
            
            
                Go to dashboard
                </button>
        </div>
    )
}
export default Landing;