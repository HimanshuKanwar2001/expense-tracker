import AuthLayout from "../../components/layouts/AuthLayout";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Inputs/Input";
import { validateEmail } from "../../utils/helper";
import { useState } from "react";
import ProfilePhotoSelector from "../../components/Inputs/ProfilePhotoSelector";

const SignUp = () => {
  const [profilePic, setProfilePic] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  //Handle sing Up Form Submit
  const handleSignUp = async (e) => {
    e.preventDefault();
  //  let profileImageUrl="";

  if(!fullName){
    setError("Full name is required.");
    return; 
  }
  if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!password || password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }
    setError("");
    // Sign Up API call
    // If successful, navigate to login or dashboard
    // navigate("/dashboard");
  };
  return (
    <>
      <AuthLayout>
        <div className="lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center ">
          <h3 className="text-xl font-semibold text-black">
            Create an Account
          </h3>
          <p className="text-xs text-slate-700 mt-[5px] mb-6">
            Join us today by entering your details below
          </p>

          <form onSubmit={handleSignUp}>
            {/* <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} /> */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                label="Full Name"
                type="text"
                placeholder="Enter your full name"
              />

              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label="Email Address"
                type="text"
                placeholder="john@example.com"
              />
              <div className="col-span-2">
                <Input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  label="Password"
                  type="password"
                  placeholder="Min 8 Characters"
                />
              </div>
            </div>

            {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}
            <button type="submit" className="btn-primary">
              SignUp
            </button>
            <p className="text-[13px] text-slate-800 mt-3">
              Already have an account ?{" "}
              <Link
                to="/Login"
                className="font-medium text-purple-500 underline"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </AuthLayout>
    </>
  );
};
export default SignUp;
