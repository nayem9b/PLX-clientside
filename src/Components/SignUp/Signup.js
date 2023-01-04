import { getAuth, updateProfile } from "firebase/auth";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";
import bg from "../Assets/mesh-872.png";
const SignUp = () => {
  const { googleSignIn, userSignUp } = useContext(AuthContext);
  const navigate = useNavigate();
  const auth = getAuth();
  const handleOnSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const userName = form.userName.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password, userName);
    userSignUp(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        updateProfile(auth.currentUser, {
          displayName: userName,
        }).catch((error) => console.log(error));
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => console.log(result));
    navigate("/");
  };

  return (
    <div>
      <section class=' overflow-hidden'>
        <div class='flex min- overflow-hidden'>
          <div class='relative flex-1 hidden w-0 overflow-hidden lg:block'>
            <img
              class='absolute inset-0 object-cover w-full h-full '
              src={bg}
              alt=''
            />
          </div>
          <div class='flex flex-col justify-center flex-1 px-4 py-12 overflow-hidden sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
            <div class='w-full max-w-xl mx-auto lg:w-96'>
              <div>
                <Link
                  to='/'
                  class='text-3xl text-medium font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
                  Pet Finder
                </Link>
                <h2 class='mt-6 text-3xl font-extrabold text-neutral-600'>
                  Sign in.
                </h2>
              </div>

              <div class='mt-8'>
                <div class='mt-6'>
                  <form class='space-y-6' onSubmit={handleOnSubmit}>
                    <div>
                      <label
                        for='userName'
                        class='block text-sm font-medium text-neutral-600'>
                        {" "}
                        User Name{" "}
                      </label>
                      <div class='mt-1'>
                        <input
                          id='userName'
                          name='userName'
                          type='text'
                          placeholder='user name'
                          class='block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300'
                          data-dashlane-rid='639a2c6a013136c1'
                          data-kwimpalastatus='dead'
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        for='email'
                        class='block text-sm font-medium text-neutral-600'>
                        {" "}
                        Email address{" "}
                      </label>
                      <div class='mt-1'>
                        <input
                          id='email'
                          name='email'
                          type='email'
                          autocomplete='email'
                          required=''
                          placeholder='Your Email'
                          class='block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300'
                          data-dashlane-rid='639a2c6a013136c1'
                          data-kwimpalastatus='dead'
                        />
                      </div>
                    </div>

                    <div class='space-y-1'>
                      <label
                        for='password'
                        class='block text-sm font-medium text-neutral-600'>
                        {" "}
                        Password{" "}
                      </label>
                      <div class='mt-1'>
                        <input
                          id='password'
                          name='password'
                          type='password'
                          autocomplete='current-password'
                          required=''
                          placeholder='Your Password'
                          class='block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300'
                          data-dashlane-rid='d5e7311619cb637e'
                          data-kwimpalastatus='dead'
                        />
                      </div>
                    </div>

                    <div class='flex items-center justify-between'>
                      <div class='flex items-center'>
                        <input
                          id='remember-me'
                          name='remember-me'
                          type='checkbox'
                          placeholder='Your password'
                          class='w-4 h-4 text-blue-600 border-gray-200 rounded focus:ring-blue-500'
                          data-dashlane-rid='ad3065fc5b31c10a'
                        />
                        <label
                          for='remember-me'
                          class='block ml-2 text-sm text-neutral-600'>
                          {" "}
                          Remember me{" "}
                        </label>
                      </div>

                      <div class='text-sm'>
                        <a
                          href='#'
                          class='font-medium text-blue-600 hover:text-blue-500'>
                          {" "}
                          Forgot your password?{" "}
                        </a>
                      </div>
                    </div>

                    <div>
                      <button
                        type='submit'
                        class='flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                        data-dashlane-rid='94711dc67c50b5db'
                        data-kwimpalastatus='dead'>
                        Sign up
                      </button>
                    </div>
                  </form>
                  <div class='relative my-4'>
                    <div class='absolute inset-0 flex items-center'>
                      <div class='w-full border-t border-gray-300'></div>
                    </div>
                    <div class='relative flex justify-center text-sm'>
                      <span class='px-2 text-neutral-600 bg-white'>
                        {" "}
                        Or continue with{" "}
                      </span>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={handleGoogleSignIn}
                      class='w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'>
                      <div class='flex items-center justify-center'>
                        <img
                          className='h-8'
                          src='https://cdn-icons-png.flaticon.com/512/2991/2991148.png'
                          alt=''
                        />
                        <span class='ml-4'> Log in with Google</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
