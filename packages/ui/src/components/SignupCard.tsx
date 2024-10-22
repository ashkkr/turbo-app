import { Button, Card, TextField } from "@mui/material";
import { useState } from "react";

export function SignupCard(){
    const [email,setEmail] = useState("");
    const [pswd,setPswd] = useState("");

    return <Card>
        <TextField label="email" onChange={(e) => setEmail(e.target.value)}></TextField>
        <TextField label="password" onChange={(e) => setPswd(e.target.value)}></TextField>
        <Button>Sign Up</Button>
    </Card>
}