 import { Button } from "@/components/ui/button";
 import { onBoardUser } from "@/modules/auth/actions";
 
 
 import Link from "next/link";
 import { redirect } from "next/navigation";

const HomePage= async() =>{
    const user= await onBoardUser();
    // const profile= await getCurrentUsername();
    
    if(!user.success){
        return redirect('/sign-in');
    }
 }

 export default HomePage;