import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import { fetchCustomers } from './asyncActions/customers';
import { addCashAction, getCashAction } from './store/cashReducer';
import { decCount, incCount } from './store/countReducer';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';

const App = () => {

  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customers.customers);
  const count = useSelector(state => state.count.count);
  const dispatch = useDispatch();

  const inc = () => {
    dispatch(incCount());
  }

  const dec = () => {
    dispatch(decCount());
  }

  const addCash = (cash) => {
    dispatch(addCashAction(cash));
  }

  const getCash = (cash) => {
    dispatch(getCashAction(cash));
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now()
    }
    dispatch(addCustomerAction(customer));
  }

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id));
  }

  return (
    <div
      className='App'
      style={{ display: 'flex', width: '100%', alignItems: 'center', flexDirection: 'column' }}>
      {count}
      <div style={{ margin: '10px 0', display: 'flex', justifyContent: 'space-between', width: '300px' }}>
        <button onClick={() => inc()}>inc</button>
        <button onClick={() => dec()}>dec</button>
      </div>
      {cash}
      <div style={{ margin: '10px 0', display: 'flex', justifyContent: 'space-between', width: '300px' }}>
        <button onClick={() => addCash(Number(prompt()))}>add cash</button>
        <button onClick={() => getCash(Number(prompt()))}>get cash</button>
      </div>
      <div style={{ margin: '10px 0', display: 'flex', justifyContent: 'space-between', width: '300px' }}>
        <button onClick={() => addCustomer(prompt())}>add customer</button>
        <button onClick={() => dispatch(fetchCustomers())}>add many customer</button>
        <button onClick={() => removeCustomer({ id: Number(prompt()) })}>delete customer</button>
      </div>
      {customers.length > 0
        ? <div>
          {customers.map((customer, i) => {
            return <div
              style={{ cursor: 'pointer' }}
              key={i}
              onClick={() => removeCustomer(customer)}>
              {customer.name}
            </div>
          })
          }
        </div>
        : <div>Клиенты отсутствуют</div>}
    </div>
  )
}

export default App
