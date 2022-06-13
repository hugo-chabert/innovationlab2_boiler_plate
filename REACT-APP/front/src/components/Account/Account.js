import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import userApi from '../../services/userApi'
import '../../assets/account.css';


class Account extends React.Component{

    state = {
        account: null,
        error: null,
    };

    componentDidMount = async () => {
        try {
            const data = await userApi.profile(localStorage.getItem('id'));
            this.setState({ account: data });
        } catch (error) {
            this.setState({ error });
        }
    };

    render(){

        const { error, account } = this.state;

        // Print errors if any
        if (error) {
            return <div>An error occured: {error.message}</div>;
        }

        return (

            <div classname="App">
                <div class="account">
                    <h1>Paramètres du compte</h1>
                    <p>Consultez et mettez à jour vos informations de compte, votre profil et bien plus.</p>
                    <div class="container-profil">
                        <p>Informations basiques</p>
                        <hr/>
                        <form action="" method="post">
                            <div class="form-profil">
                            <label for ="username">Nom du compte :</label>
                            <input id="username" type="text" name="username" value={this.state.account?.username} />
                            <hr/>
                            <label for ="email">Email :</label>
                            <input id="email" type="text" name="email" value={this.state.account?.email} />
                            <hr/>
                            <label for ="password">Mot de passe :</label>
                            <input id="password" type="password" name="password" placeholder="Mot de passe" />
                            <button type="submit" name="update">Mettre à jour</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            );
    }
}

export default Account;