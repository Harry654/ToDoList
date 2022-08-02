const HomePage = (props) => {
    return(
        <div id="HomeScreen">
            <p>Hello there, I'm {props.username}</p>
            <img id="logo" src={props.logo} alt="react logo" />
        </div>
    );
}

export default HomePage; 