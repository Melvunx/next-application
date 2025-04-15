import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { GithubIcon } from "lucide-react";

import { signIn } from "next-auth/react";

export default function Page() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Connectez-vous !</CardTitle>
        <CardDescription>
          Pour accéder à votre compte, veuillez vous connecter avec votre compte
          Github.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          onClick={async () =>
            await signIn("github", { redirectTo: "/dashboard" })
          }
        >
          Se connecter avec Github <GithubIcon />
        </Button>
      </CardContent>
    </Card>
  );
}
