import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp";

import React from "react";

function verify() {
  return (
    <main className="w-full h-screen flex justify-center items-center">
      <Card className="min-w-80 border-0 shadow-white">
        <CardHeader>
          <CardTitle>Verification</CardTitle>
          <CardDescription>OTP send to your mail!</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <InputOTP maxLength={6}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </form>
        </CardContent>
        <CardFooter className="flex-col w-full">
          <Button className="w-full ">Verify</Button>

          <div className="mt-6 ">
            <p className="text-xs text-zinc-500">© 2024 Bugs And Glitches.</p>
          </div>
        </CardFooter>
      </Card>
    </main>
  );
}

export default verify;
