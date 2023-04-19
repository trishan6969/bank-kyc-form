import Header from "components/Dashboard/Header";
import KycForm from "components/Dashboard/Form";

const Dashboard = () => {
    return (
        <div className="dashboard flex flex-col w-full justify-center items-center font-primary">
            <Header />
            <KycForm/>
        </div>

    );
};

export default Dashboard;