import React from 'react';
// Assuming you might use ShadCN UI components if sticking with that style
// import { Button } from "@/components/ui/button"; // Adjust path if needed
// import { Card, CardContent } from "@/components/ui/card"; // Adjust path if needed
// import { Input } from "@/components/ui/input"; // Adjust path if needed
// import { Home } from "lucide-react";

// Import the specific CSS. Decide if you want this OR Tailwind primarily.
import '../styles/SignUp.css'; // Adjusted path

// Placeholder simple components if not using ShadCN
const Button = ({ className, children, ...props }) => <button className={`btn ${className}`} {...props}>{children}</button>;
const Card = ({ className, children }) => <div className={`card ${className}`}>{children}</div>;
const CardContent = ({ children }) => <div className="card-content">{children}</div>;
const Input = ({ className, ...props }) => <input className={`input ${className}`} {...props} />;
const Home = () => <span>🏠</span>; // Simple placeholder for Home icon


export default function SignUp() {
  // Social sign-up options data
  const socialSignUpOptions = [
    { provider: "Google", icon: "G" },
    { provider: "Facebook", icon: "f" },
    { provider: "Apple", icon: "" }, // Use Apple symbol
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted');
    // Example: Redirect or show success message
  };

  // Note: The style={{ backgroundImage: 'url(/sign-up.png)' }} assumes sign-up.png
  // is in the `public` folder of your React project.
  return (
    <div className="signup-page-container" style={{ backgroundImage: 'url(/sign-up.png)' }}>
      {/* Navigation Bar (Consider making this a reusable component) */}
      <header className="signup-header bg-[#1a2c50]"> {/* Using hex color might conflict if SignUp.css defines it differently */}
        <div className="container">
          {/* Logo */}
          <div>
            <img
              className="logo-image" // Use class from SignUp.css or Tailwind
              alt="Prata Logo"
              src="/logo.png" // Assuming logo is in public folder
            />
          </div>

          {/* Navigation Links */}
          <nav className="nav-links"> {/* Use class from SignUp.css or Tailwind */}
            <a href="#"> Home </a>
            <a href="#"> Help </a>
          </nav>
        </div>
      </header>

      {/* Sign Up Card */}
      {/* Using Tailwind classes here AND SignUp.css might lead to style conflicts. Choose one approach. */}
      <div className="flex justify-center items-center signup-content-wrapper">
        <Card className="signup-card w-[502px] p-8 relative"> {/* Mixed classes */}
          <CardContent className="p-0">
            {/* Home Icon - Positioning needs review based on chosen CSS method */}
            {/* <div className="absolute top-[35px] left-24">
              <Home className="w-[23px] h-[23px]" />
            </div> */}

            {/* Form Title */}
            <h2 className="text-2xl font-semibold mb-6 mt-16 text-center"> {/* Tailwind */}
              Create an account
            </h2>

            {/* Sign Up Form */}
            <form onSubmit={handleSubmit} className="space-y-4"> {/* Tailwind spacing */}
              <div className="form-group"> {/* From SignUp.css? or Tailwind space-y-2? */}
                <label htmlFor="username"> Username </label>
                <Input id="username" type="text" required />
              </div>

              <div className="form-group">
                <label htmlFor="email"> Email </label>
                <Input id="email" type="email" required />
              </div>

              <div className="form-group">
                <label htmlFor="password"> Password </label>
                <Input id="password" type="password" required />
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword"> Confirm Password </label>
                <Input id="confirmPassword" type="password" required />
              </div>

              {/* Sign Up Button */}
              <div className="button-group justify-center mt-6"> {/* Centering div */}
                <Button type="submit" className="btn-primary"> {/* Use consistent button class */}
                  Sign Up
                </Button>
              </div>
            </form>

            {/* Social Sign Up Options */}
            <div className="social-login mt-6 space-y-3"> {/* Tailwind spacing */}
               <p>Or sign up with:</p>
              {socialSignUpOptions.map((option, index) => (
                <Button
                  key={index}
                  type="button"
                  variant="outline" // ShadCN concept, adapt if using plain CSS/Tailwind
                  className={`social-btn ${option.provider.toLowerCase()}`} // Use classes like .google, .facebook
                >
                  <span className="icon">{option.icon}</span>
                  <span>Sign Up with {option.provider}</span>
                </Button>
              ))}
            </div>

            {/* Login Link */}
            <div className="bottom-link mt-8 text-center"> {/* Tailwind text alignment */}
              <span> Already have an Account?{" "} </span>
              <a href="/signin"> {/* Link to your sign-in route */}
                Log In
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}