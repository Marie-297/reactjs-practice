import { Button, Card, Input, Link } from "@nextui-org/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { login } from "../firebase/config";
import { FaEyeSlash } from "react-icons/fa6";
import { TbEyeFilled } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isVisible, setIsVisible] = useState(false)
  const toggleVisibility = () => setIsVisible(!isVisible)

  // App loading state
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  
  const onSubmit = async (data) => {
    const { email, password } = data;
    setLoading(true)
    try {
      await login(email, password)
      navigate({pathname: "/dashboard"})
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-[url('https://images.pexels.com/photos/128878/the-last-shirt-dollar-bill-20-euro-folded-128878.jpeg?auto=compress&cs=tinysrgb&w=1200')] bg-no-repeat bg-cover">
      <Card className="bg-transparent px-5 py-16" isBlurred>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h4 className="font-bold text-3xl text-white">Login</h4>
          <Input
            type="email"
            label="Email"
            className="mt-7"
            {...register("email", {required:true})}
            isRequired
            isInvalid = {errors.email ? true: false}
            errorMessage="Please enter your email"
          />
          <Input
             label="Password"
             endContent={
               <button
                 className="focus:outline-none"
                 type="button"
                 onClick={toggleVisibility}
               >
                 {isVisible? (
                   <FaEyeSlash className="text-2xl text-white pointer-events-none" />
                 ):
                 (<TbEyeFilled className="text-2xl text-default-400 pointer-events-none" />)}
                
               </button>
             }
             
             className="mt-7"
             {...register("password", {required:true})}
             isRequired
             isInvalid = {errors.password ? true: false}
             errorMessage="Please enter your password"
          />
          <Button
            className="mt-7 w-full py-6"
            type="submit"
            color="primary"
            isLoading={loading}
          >
            Sign In
          </Button>
        </form>
        <div className="mt-10">
          <p className="text-white">
            Don&apos;t have an account? <Link href="/signup">Sign Up</Link>
          </p>
        </div>
      </Card>
    </div>
  );
};
export default Login;
