import { SignupCard } from "@repo/ui/components";

export default function SignupPage() {
  return (
    <SignupCard
      onSignup={(username: string, password: string) => {
        alert(username);
        alert(password);
      }}
    />
  );
}
