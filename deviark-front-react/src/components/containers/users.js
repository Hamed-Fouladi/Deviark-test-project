import {useEffect, useState} from "react";

//components
import {Multiselect} from 'multiselect-react-dropdown'

//style
import style from './style.module.css'

const Users = ({colorApi}) => {
  const [colors, setColors] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [user, setUser] = useState('');
  const [message, setMessage ] = useState('');

  useEffect(() => {
    colorApi.getColors('/colors').then((data) => {
      setColors(data);
    })

  },[]);

  const onSelect = (list, item) => {
    const newColorArray = [];
    list.forEach((element) => {
      newColorArray.push(element.color);
    });
    setSelectedColors(newColorArray);
  }

  const onSubmit = async () => {
    try {
      if (!user.trim() || !selectedColors.length ) return setMessage("Fulfill all the inputs!!!");
      const res = await colorApi.addUser({name: user, colors: selectedColors});
      setMessage(res.message);
    } catch (e) {
      setMessage(e.message);
    }
  }
  return (

    <div style={{width: "90%", display: "flex", justifyContent: "center"}}>

      <div className={style.user}>
        <input onChange={(e) => setUser(e.target.value)} className={style.name} type="text" placeholder={"Your name..."}/>
        <Multiselect onSelect={onSelect} options={colors} displayValue="color" placeholder={"Select colors"}/>
        { message ? <p>{ message }</p> : null }
        <button onClick={() => onSubmit()}>Send</button>
      </div>
    </div>
  );
}

export default Users;