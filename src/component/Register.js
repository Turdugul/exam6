import React from 'react';

const register = () => {
    return (
        <div>
              <form className="container shadow mb-4 mt-4" action="handler.php">
            <p><label class="cs" for="textField">Логин:</label>
                <input maxlength="25" name="login" id="textField"/>
            </p>
            <p><label class="cs" for="passField">Пароль:</label>
                <input type="password" maxlength="25" name="password" id="passField"/>
            </p>
            <p><input type="submit" value="Войти" class="cs submitField"/></p>
            <p><input type="submit" value="Забыл пароль" class="css submitField class"/></p>
        </form>

        </div>
    );
};

export default register;