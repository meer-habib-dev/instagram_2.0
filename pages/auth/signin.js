import { async } from "@firebase/util";
import React from "react";
import { getProviders, signIn } from "next-auth/react";
import Header from "../../components/Header";
const SignIn = ({ providers }) => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen py-4 px-16 -mt-40 text-center">
        <img className="w-80" src="https://links.papareact.com/ocw" alt="" />
        <p className="font-sm italic">
          This is a partitially real app build for educational purpose
        </p>
        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="bg-blue-500 p-3 rounded-lg text-white"
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}

export default SignIn;
