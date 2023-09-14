import './form.css'

const Form = () =>{
    return(
        <form className="form">
            <label className='label'>CARDHOLDER NAME</label>
            <input className="input" placeholder="e.g. John Carlsen"></input>
            <label className='label'>CARD NUMBER</label>
            <input  className="input" placeholder="0000 0000 0000 0000"></input>
            <div className='dateAndCvc'>
            <div>
            <label className='label'>EXP. DATE MM/YY</label>
            <div className='dateAndCvc'>
            <input className='input date' placeholder="MM"/>
            <input className='input date' placeholder="YY"/>
            </div>
            </div>
            <div>
            <label className='label'>CVC</label>
            <div>
            <input className='input cvc' placeholder="e.g. 123"/>
            </div>
            </div>
            </div>
            <button>Confirm</button>
        </form>
    )
}

export default Form;