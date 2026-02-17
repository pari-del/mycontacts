import styles from './ContactItem.module.css';


function ContactItem({ data: { id, name, lastName, email, phone }, deleteHandler }) {


  return (

    < li className = { styles.item } key={id} >
        <p>
          {name}  {lastName}
        </p>
        <p>
          <span>📬</span>{email}
        </p>
        <p>
          <span>📞</span>{phone}
        </p>
          <span><button onClick={()=>deleteHandler(id)}>🗑️</button></span>
        
      </li >
    
  )
}

export default ContactItem