import "../../styles/InputBox.css"

function InputBox() {
    return(
        <div className="inputbox-root">
            <form >
                <input className="inputtextbox" type='text'/>
                <input className="submitbutton" type="submit" value="Go" />
            </form>
        </div>
    )
    
}

export default InputBox