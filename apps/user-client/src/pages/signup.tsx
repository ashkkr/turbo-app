import { SignupCard } from "@repo/ui/components";
import axios from "axios";

export default function SignupPage() {
  return (
    <SignupCard
      onSignup={async (username: string, password: string) => {
        try {
          const response = await axios.post("/api/signup", {
            username: username,
            password: password,
          });

          localStorage.setItem("signuptoken", response.data.token);
        } catch (e) {
          console.log(e);
        }
      }}
    />
  );
}
