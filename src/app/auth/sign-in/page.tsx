import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React from "react";

function signIn() {
  return (
    <main className="w-full h-screen flex justify-center items-center">
      <Card className="min-w-80 border-0 shadow-white">
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
          <CardDescription>Welcome Back, Start Learning Now!</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Email Address</Label>
                <Input
                  id="name"
                  placeholder="Email Address"
                  type="email"
                  required
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col w-full">
          <Link href='/auth/verify' className="w-full"><Button className="w-full ">Submit</Button></Link>
          <div className="w-full flex justify-center items-center gap-3 my-4">
            <Separator className="w-28" />
            <p className="text-zinc-600">or</p>
            <Separator className="w-28" />
          </div>
          <Link href="/auth/sign-up" className="w-full">
            <Button variant="outline" className="w-full">
              Sign Up
            </Button>
          </Link>
          <div className="mt-6 ">
            <p className="text-xs text-zinc-500">© 2024 Bugs And Glitches.</p>
          </div>
        </CardFooter>
      </Card>
    </main>
  );
}

export default signIn;
