import { Button, Card, TextField } from "@mui/material";
import { useState } from "react";

export function SignupCard(props: {
  onSignup: (username: string, password: string) => void;
}) {
  const [email, setEmail] = useState("");
  const [pswd, setPswd] = useState("");

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "30vw",
        margin: "auto",
        marginTop: "20vh",
        gap: "20px",
        padding: "40px",
      }}>
      <TextField
        label="email"
        onChange={(e) => setEmail(e.target.value)}></TextField>
      <TextField
        label="password"
        onChange={(e) => setPswd(e.target.value)}></TextField>
      <Button
        onClick={async () => {
          props.onSignup(email, pswd);
        }}>
        Sign Up
      </Button>
    </Card>
  );
}
