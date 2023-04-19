const Menu = () => {
    return (
        <div className="bg-dark font-primary text-white h-screen pt-10 p-6 flex flex-col gap-20 sticky top-0 right-0">
            <div className="brand flex items-center">
                <img
                    src="https://raw.githubusercontent.com/trishan6969/sign-in-page/main/images/logo.png"
                    alt="Trishan Bank Logo"
                    className="w-20"
                />
                <h1 className="text-2xl ml-8 font-bold">Trishan Bank Limited</h1>
            </div>

            <div className="menus">
                <button className="bg-primary w-full text-left p-4 rounded-md font-bold flex items-center gap-2 hover:bg-secondary transition ease-in ">
                    <svg className="w-7" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    Verify KYC
                </button>
            </div>

        </div>
    );
};

export default Menu;