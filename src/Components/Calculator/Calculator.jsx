import React,{useState} from 'react'
import Navbar from './Navbar'

let inputDetails = {
  loanAmount:'',
  interestRate:'',
  loanTenure:'',
}
const Calculator = () => {
  const [store,setStore] = useState(inputDetails);
  const [data,setData] = useState([]);
  const [edit,setEdit] = useState(false);
  const [hide,setHide] = useState(false);

  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [loanTenure, setLoanTenure] = useState(0);
  const [emi, setEmi] = useState(0);

  const calculateEmi = () => {
    //Calculate monthly interest rate
    const r = interestRate / (12 * 100);
    //Calculate loan tenure in months
    const n = loanTenure * 12;
    //Calculate EMI
    const emi = (loanAmount * r * (1 + r) ** n) / ((1 + r) ** n - 1);
    setEmi(emi);
  }

  
  const editHandler = (e) => {
    const value = e.target.value
    setStore(store =>({...store,[e.target.name] : value}))
  }
  const addData = () => {
    if(edit){
      const updateData = data.map((row)=>row.id=== store.id ? store:row);
      setData(updateData);
      setEdit(false);
      setStore(inputDetails)
      setHide(!hide)
    }
    else{
      let listItems = data;
       const item = {
        id:data.length,
        ...store
       }
       listItems = [...data,item];
       setData(listItems);
       clearData();
       setHide(!hide)
       //Calculate monthly interest rate
    const r = interestRate / (12 * 100);
    //Calculate loan tenure in months
    const n = loanTenure * 12;
    //Calculate EMI
    const emi = (loanAmount * r * (1 + r) ** n) / ((1 + r) ** n - 1);
    setEmi(emi);
    }
  }
  const clearData = () => {
    setStore(inputDetails);
  }
  const editRow = (row) => {
    setStore(row);
    setEdit(true);
    setHide(!hide)
  }
  const deleteRow = (id) =>{
    const filtered = data.filter(item=>item.id !== id);
    console.log(filtered);
    setData(filtered);
    }
  return (
    <div>
        <Navbar/>
        <div>
        {hide ? null : <><div className='con'>
        <h1>EMI History</h1>
        <button className='new' onClick={()=>{setHide(!hide)}}>Calculate EMI</button>
      </div>
      <div className='tab'>
        <table className="table table-bordered">
          <thead>
            <tr className="table-primary">
              <th scope="col">LoanAmount</th>
              <th scope="col">InterestRate</th>
              <th scope="col">LoanTenure</th>
              <th scope="col">EMI Amount</th>
              <th scope="col">Change</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
          {data && data.map((row,i) =>
            <tr className="table-primary">
              <th scope="row">{row.loanAmount}</th>
              <td>{row.interestRate}</td>
              <td>{row.loanTenure}</td>
              <td>{row.emi}</td>
              <td><button onClick={()=>{editRow(row)}} className="btn btn-success">Edit</button></td>
              <td><button onClick={()=>{deleteRow(row.id)}} className="btn btn-danger">Delete</button></td>
            </tr>
          )}
          </tbody>
        </table>
      </div></> }
      {hide ? <div>
        <div className='container'>
          <input name='loanAmount' value={store.loanAmount} label='loanAmount' placeholder='loanAmount' onChange={editHandler}  className='input'/>
          <input name='interestRate' value={store.interestRate} label='interestRate' placeholder='interestRate' onChange={editHandler}  className='input'/>
          <input name='loanTenure' value={store.loanTenure} label='loanTenure' placeholder='loanTenure' onChange={editHandler}  className='input' />
          {/* <input name='batch' value={store.batch} label='Batch' placeholder='month' onChange={editHandler}  className='input'/> */}
        </div>
        <div>
          <button onClick={addData} className="btn btn-success button">{edit ? 'Update' : 'submit'}</button>
          <button onClick={clearData} className="btn btn-danger button">Clear</button>
        </div>
      </div> : null}
        </div>
    </div>
  )
}

export default Calculator