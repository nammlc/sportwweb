const signUp = document.getElementById('signUp');
const signInsignOu = document.getElementById('sign-in__sign-out');
if(signUp){
    signUp.addEventListener('click',function(){
        const signUpBtn = document.createElement('div');
        signUpBtn.classList.add('signUpForm');
        signUpBtn.onclick = function(e){
            if(e.target.closest('.over_lay') &&!e.target.closest('.form')){
                console.log('delete');
                signInsignOu.removeChild(signUpBtn);}
        }
        signUpBtn.innerHTML = `
            <div class="over_lay">
                <form action="#" class="form" >
                    <div class="form_body">
                        <h1>Đăng ký</h1>
                        <div class="name">
                            <label for="name">Nhập tên</label>
                            <br>
                            <input type="text" name="name" id="name">
                            <br>
                        </div>
                        <span id="errorname" class="span"></span>
                        <br>
                        <div class="pass">
                            <label for="pass">Nhập mật khẩu</label>
                            <br>
                            <input type="password" name="pass" id="pass" >
                            <br>
                        </div>
                        <span id="errorpass" class="span"></span>
                        <br>
        
                        <div class="passagain">
                            <label for="passagain">Nhập lại mật khẩu</label>
                            <br>
                            <input type="password" name="passagain" id="passagain" >
                            <br>
                        </div>
                        <span id="errorpassagain" class="span"></span>
                        <br>
        
                        <div class="phone">
                            <label for="phone">Nhập số điện thoại</label>
                            <br>
        
                            <input type="text" name="phone" id="phone"  >
                            <br>
                        </div>
                        <span id="errorphone" class="span"></span>
                        <br>
        
                        <div class="email">
                            <label for="email">Nhập email</label>
                            <br>
                            <input type="email" name="email" id="email" >
                            <br>
                        </div>
                        <span id="erroremail" class="span"></span>
                        <br>
                        <button type="submit" id="submit" onclick="Submit()"> Đăng ký</button>
                    </div>
                </form>
            </div>
        `;
        signInsignOu.appendChild(signUpBtn);
    });
}
