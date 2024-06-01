import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // You can handle form submission here, e.g., send data to server
  };

  return (
    <div>
      <div
        className="flex flex-col items-center justify-center h-[1000px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/0Qk5HSG/wallpaperflare-com-wallpaper.jpg')",
        }}
      >
        <div className="bg-[#1f2340]  bg-opacity-50 backdrop-blur-lg p-8 rounded-lg shadow-lg w-[700px]">
          <h2 className="text-4xl font-bold text-center text-[#F9F9EB]  mb-6">
            WELCOME BACK!
          </h2>
          <h2 className="font-semibold text-xl text-center text-[#F2F1EB]  mb-6">
            We are so excited to see you again! Log In <br /> to your
            TaskBusks Account!
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 ">
            <div>
              <label className="block text-xl font-medium text-[#F2F1EB]">
                Email address
              </label>
              <input
                id="email"
                {...register("email", { required: true })}
                type="email"
                placeholder="Enter your Email"
                className="block w-full p-4 mt-1 rounded-md "
              />
              {errors.email && (
                <span className="text-red-500">Email is required</span>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-xl font-medium text-[#F2F1EB]"
              >
                Password
              </label>
              <input
                id="password"
                {...register("password", { required: true })}
                type="password"
                placeholder="Enter your password"
                className="block w-full p-4 mt-1 rounded-md "
              />
              {errors.password && (
                <span className="text-red-500">Password is required</span>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-xl font-medium text-[#F2F1EB] bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                placeholder="Enter your Email"
              >
                Login
              </button>
            </div>
          </form>
        </div>
        <p className="text-xl text-[#F2F1EB] mt-3">
          DO NOT HAVE AN ACCOUNT?
          <span className="text-blue-600 text-xl">
            <Link to="/registration"> Registration</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
