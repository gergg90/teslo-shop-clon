import { redirect } from "next/navigation";

function PageAuth() {
  redirect("/auth/login");
}

export default PageAuth;
