const HomePage = (props) => {
    return(
        <div className="screen">
            <img id="logo" src={props.logo} alt="react logo" />
            <h1 className="text">Hello there, I'm {props.username}</h1>
            <button id="link">About Us</button>
        </div>
    );
}

export default HomePage;