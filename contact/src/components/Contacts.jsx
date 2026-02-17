import { useState } from "react";
import ContactsList from "./ContactsList";
import inputs from "../constants/inputs";
import { v4 } from "uuid";
import styles from "./Contacts.module.css";



function Contacts() {
    const [contacts, setContacts] = useState([]);  //برای آرایه ای از اطلاعات است-----به عنوان پراپس به بقیه کامپوننت ها پاس میدهیم
    const [alert, setAlert] = useState(""); //رشته خالی در جاوااسکریپت برابر با فالس است
    const [contact, setContact] = useState({ //برای یک دونه اس 
        id: "",
        name: "",
        lastName: "",
        email: "",
        phone: "",

    });
    const changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setContact((contact) => ({ ...contact, [name]: value }))
    }
    const addHandler = () => {
        if (!contact.name || !contact.lastName || !contact.phone) {
            setAlert('please enter valid data');
            return;
        }
        setAlert("");

        const newContact = { ...contact, id: v4() };
        setContacts((contacts) => [...contacts, newContact])
        //setContacts((contacts) => [...contacts, contact])//کانتکت های قبلی رو کپی بگیر داخل آپدیت و کانتکت جدید رو بهش اضافه کن
        setContact({
            name: "",
            lastName: "",
            email: "",
            phone: "",
        })   //مقادیر رو بعد از آپدیت کردن خالی کن
    }

    const deleteHandler = id => {
        const newContacts = contacts.filter(contact => contact.id !== id)
        setContacts(newContacts)
    }


    return (
        <div className={styles.container}>
            <div className={styles.form}>

                {
                    inputs.map((input, index) => (
                        <input
                            key={index}
                            type={input.type}
                            placeholder={input.placeholder}
                            name={input.name}
                            value={contact[input.name]}
                            onChange={changeHandler}
                        />
                    ))}

                <button onClick={addHandler}>Add Contact</button>
            </div>

            <div className={styles.alert}>{alert && <p>{alert}</p>}</div>
            <ContactsList contacts={contacts} deleteHandler={deleteHandler} />
        </div>
    )
}

export default Contacts