const Form = () => {
    return (
        <>
            <form className="form">
                <div className="inputField">
                    <label htmlFor="cityName">City Name:</label>
                    <input type="text" id="cityName" placeholder="Enter a city name" name="city" />
                </div>
            </form>
        </>
    );
}

export default Form;
