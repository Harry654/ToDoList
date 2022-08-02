const HomePage = (props) => {
    return(
        <div id="HomeScreen">
            <h1 className="greeting">Hello there, I'm {props.username}</h1>
            <img id="logo" src={props.logo} alt="react logo" />
        </div>
    );
}

export default HomePage;