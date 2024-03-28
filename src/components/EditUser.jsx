import React, { useEffect, useState } from 'react'
import Input from '../ui/Input';
import { useNavigate, useParams } from 'react-router-dom';
import AuthService from '../service/Auth';

const EditUser = () => {
    const [username, setTitle] = useState();
    const [email, setDescription] = useState("");
    const tokencha = useParams().token;
    const navigate = useNavigate()
    useEffect(()=> {
        const userCha = async () => {
            try {
                const response = await AuthService.getUser();
                setTitle(response.user.username);
                setDescription(response.user.email);
            } catch (error) {
                console.log("error");
            }
        }
        userCha()
    }, [tokencha])
    const putSubmit = async(e) => {
        e.preventDefault();
        const user = { username, email }
        try {
            const response = await AuthService.editUser(user, `Token ${tokencha}`);
            console.log(response);
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div className="text-center">
      <h1 className="fs-2">Edit User</h1>
      <div className="w-75 mx-auto">
        <form onSubmit={putSubmit}>
          <Input label={"Username"} state={username} setState={setTitle} />
          <Input label={"Useremail"} state={email} setState={setDescription} />
          <button className="w-100 btn btn-lg btn-primary mt-2" type="submit">
            Create
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditUser