import { Button, Divider, Input } from "@heroui/react";
import { useContext, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { motion } from "framer-motion";
import { EyeSlashFilledIcon } from "@/assets/icons/EyeSlashFilledIcon";
import { EyeFilledIcon } from "@/assets/icons/EyeFilledIcon";
import { Player } from "@lottiefiles/react-lottie-player";
import { Icons } from "@/assets/icons/Icons";

import { AuthContext } from "@/hooks/AuthContextProvider";
import usePostMutate from "@/hooks/shared/usePostMutate";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import Info from "@/assets/icons/InfoIcon";
import useAxiosSecure from "@/hooks/useAxios";
import AuthHeader from "../components/auth/AuthHeader";

const SignIn = () => {
  const Axios = useAxiosSecure();
  const navigate = useNavigate();
  const location = useLocation();
  const { path } = location.state || {};
  const { user, setUser, googleSignIn } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);

  const onSuccess = (res) => {
    toast.success("Successfully Logged In");
    Cookies.set("user", res?.data?.data?.accessToken, { expires: 30 });
    setUser(res?.data?.data?.user);
    setIsLoading(false);
    navigate(path || "/admin");
  };

  const onError = (err) => {
    toast.error(err?.response?.data?.message || "Something went wrong");
    setIsLoading(false);
  };

  const { mutate, isPending } = usePostMutate(
    "/auth/login",
    onSuccess,
    onError
  );

  const onSubmit = async (userData) => {
    setIsLoading(true);
    mutate(userData);
  };

  const toggleVisibility = () => setIsVisible(!isVisible);

  const providerSignIn = async (payload) => {
    const token = await payload.user.getIdToken();
    console.log(token);

    const response = await Axios.post(
      "/auth/provider",
      {},
      {
        headers: {
          Authorization: token,
        },
      }
    );
    toast.success("Successfully logged in");
    setUser(response?.data?.data?.user);
    navigate(path || "/admin");
    Cookies.set("user", response?.data?.data?.accessToken, { expires: 30 });

    console.log(response?.data);

    return response;
  };
  return (
    <div
      style={{
        background: "linear-gradient(to right, #F1FBFF, #F1EDEB, #F8DAB0)",
      }}
      // className="w-full md:grid grid-cols-3 flex items-center justify-center"
      className="w-full flex items-center justify-center"
    >
      <Card
        radius="none"
        shadow="none"
        className="bg-transparent w-[493px] h-[722px]"
      >
        <CardHeader className="p-0 w-full text-center flex flex-col  gap-5">
          <AuthHeader />
        </CardHeader>

        <CardBody className="p-0">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="text-center flex flex-col gap-5 mt-8 "
          >
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{ required: "Email is required" }}
              render={({ field }) => (
                <div>
                  <Input
                    {...field}
                    type="email"
                    isInvalid={errors.email ? true : false}
                    classNames={{
                      errorMessage: "text-left",
                      inputWrapper: "bg-white",
                    }}
                    label="Email Address"
                    placeholder="web.munnaahmed@gmail.com"
                    labelPlacement="outside"
                    radius="lg"
                    errorMessage={errors.email && errors.email.message}
                  />
                </div>
              )}
            />

            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password is incorrect",
                },
              }}
              render={({ field }) => (
                <div>
                  <Input
                    {...field}
                    type={isVisible ? "text" : "password"}
                    isInvalid={errors.password ? true : false}
                    errorMessage={errors.password && errors.password.message}
                    classNames={{
                      errorMessage: "text-left",
                      inputWrapper: "bg-white",
                    }}
                    label="Password"
                    labelPlacement="outside"
                    placeholder="************"
                    radius="lg"
                    endContent={
                      <button type="button" onClick={toggleVisibility}>
                        {isVisible ? (
                          <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                          <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                        )}
                      </button>
                    }
                  />
                </div>
              )}
            />

            <div className="text-[#5A5C5F]  cursor-pointer underline text-tiny text-right ">
              Forgot Password?
            </div>
            <Button
              disabled={isLoading}
              isLoading={isLoading}
              color="primary"
              radius="lg"
              className="w-full font-bold"
              type="submit"
            >
              Login
            </Button>
            {/* <div className="relative flex items-center">
              <Divider className="flex-1" />
              <div className="relative flex justify-center text-xs uppercase">
                <span className=" px-2 text-muted-foreground">Or</span>
              </div>
              <Divider className="flex-1" />
            </div> */}
            {/* <Button
              color="secondary"
              onClick={() => {
                googleSignIn()
                  .then((result) => {
                    // setUser(result.user);

                    setIsLoading(false);
                    console.log(result);
                    if (result?.user) {
                      providerSignIn(result);
                    }
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              }}
            >
              <Icons.google className="mr-2 h-4 w-4" />
              Continue with Google
            </Button> */}
          </form>
          <div className="flex justify-center gap-2 mt-3">
            <p className="text-[#5A5C5F] text-base">Need an account?</p>{" "}
            <Link to={"/signup"} className="font-semibold text-[#141414]">
              Sign Up
            </Link>
          </div>
        </CardBody>
        <CardFooter className="p-0"></CardFooter>
        <div className="max-w-sm w-full  rounded-lg  shadow-md"></div>
      </Card>
    </div>
  );
};

export default SignIn;

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "-100vh",
  },
  exit: {
    x: "100vh",
    transition: {
      ease: "easeInOut",
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,

      type: "spring",
    },
  },
};
