import { LuTrendingUpDown } from "react-icons/lu";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex">
      <div className="  w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12 bg-gray-100">
        <h2 className="text-lg font-medium text-black">Expense Tracker</h2>
        {children}
      </div>

      <div className="hidden md:block w-[40vw] h-screen bg-violet-50 bg-auth-bg-img bg-cover bg-center overflow-hidden p-8 relative">
        <div className="w-48 h-48 rounded-[40px] bg-purple-600 absolute -top-7 -left-5"></div>
        <div className="w-48 h-56 rounded-[40px] border-[20px] border-fuchsia-600 absolute top-[30%] -right-10"></div>
        <div className="w-48 h-48 rounded-[40px] border-voilet-500 absolute -bottom-7 -left-5"></div>

        <div className="grid grid-cols-1 z-20">
          <StatsInfoCard
            icon={<LuTrendingUpDown />}
            label="Track Your Income & Expenses"
            value="430,000"
            color="bg-primary"
          />
        </div>

        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          className="w-64 lg:w-[90%] absolute bottom-10 shadow-lg shadow-blue-400/15"
          alt=""
        />
      </div>
    </div>
  );
};
export default AuthLayout;

const StatsInfoCard = ({ icon, label, value, color }) => {
  return (
    <div className="flex gap-6 bg-white p-4 rounded-xl shadow-md shadow-purple-400/10 border border-gray-200/5 z-10">
      <div
        className={`w-12 h-12 flex items-center justify-center text-[26px] text-white bg-purple-600 ${color} rounded-full drop-shadow-xl`}
      >
        {icon}
      </div>

      <div>
        <h6 className="text-sx text-gray-500 mb-1">{label}</h6>
        <span className="text-[20px]">Rs{value}</span>
      </div>
    </div>
  );
};
