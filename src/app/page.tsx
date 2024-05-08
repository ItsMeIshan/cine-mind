import Login from "@/components/Login";
import { redirect } from "next/navigation";
import { auth } from "@/utils/firebase";

export default function Home() {
  const user = auth.currentUser;
  if (user) {
    console.log("here>>>");
    redirect("/browse");
  }
  return <Login />;
}
