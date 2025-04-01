import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Home } from "lucide-react";
import './SignUp(style).css'; // Ensure this path is correct

export default function SignUp() {
  // Social sign-up options data
  const socialSignUpOptions = [
    { provider: "Google", icon: "G" },
    { provider: "Facebook", icon: "f" },
    { provider: "Apple", icon: "" },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted');
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-cover bg-center" style={{ backgroundImage: 'url(/sign-up.png)' }}>
      {/* Navigation Bar */}
      <header className="w-full h-[92px] bg-[#1a2c50]">
        <div className="container mx-auto flex items-center justify-between h-full px-14">
          {/* Logo */}
          <div>
            <img
              className="w-[206px] h-[54px] object-cover"
              alt="Prata Logo"
              src="" // Update with the correct image source
            />
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center gap-8">
            <a
              href="#"
              className="font-semibold text-[#e4d7c4] text-[25px]"
            >
              Home
            </a>
            <a
              href="#"
              className="font-semibold text-[#e4d7c5] text-[25px]"
            >
              Help
            </a>
          </nav>
        </div>
      </header>

      {/* Sign Up Card */}
      <div className="flex justify-center items-center min-h-[calc(100vh-92px)]">
        <Card className="w-[502px] bg-cover bg-center p-8 relative">
          <CardContent className="p-0">
            {/* Home Icon */}
            <div className="absolute top-[35px] left-24">
              <Home className="w-[23px] h-[23px]" />
            </div>

            {/* Form Title */}
            <h2 className="text-2xl font-semibold mb-6 mt-16 text-center">
              Create an account
            </h2>

            {/* Sign Up Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="username" className="block text-sm font-medium">
                  Username
                </label>
                <Input id="username" type="text" className="w-full" />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <Input id="email" type="email" className="w-full" />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium">
                  Password
                </label>
                <Input id="password" type="password" className="w-full" />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium"
                >
                  Confirm Password
                </label>
                <Input
                  id="confirmPassword"
                  type="password"
                  className="w-full"
                />
              </div>

              {/* Sign In Button */}
              <div className="flex justify-center mt-6">
                <Button className="w-36 h-[34px] bg-[#1a2c50] text-[#e4d7c4] font-semibold text-[15px]">
                  Sign Up
                </Button>
              </div>
            </form>

            {/* Social Sign Up Options */}
            <div className="mt-6 space-y-3">
              {socialSignUpOptions.map((option, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full flex items-center justify-center gap-2 border border-gray-300"
                >
                  <span className="font-bold">{option.icon}</span>
                  <span>Sign Up with {option.provider}</span>
                </Button>
              ))}
            </div>

            {/* Login Link */}
            <div className="mt-8 text-center">
              <span className="text-[15px]">
                Already have an Account?{" "}
              </span>
              <a
                href="#"
                className="text-[#319fff] text-[15px]"
              >
                Log In
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}