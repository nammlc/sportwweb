const signIn = document.getElementById('signIn');
const signInsignOut = document.getElementById('sign-in__sign-out');
if(signIn){
    signIn.addEventListener('click',function(){
        const signInBtn = document.createElement('div');
        signInBtn.classList.add('signInForm');
        signInBtn.onclick = function(e){
            if(e.target.closest('.over_lay') &&!e.target.closest('.form')){
                console.log('delete');
                signInsignOut.removeChild(signInBtn);}
        }
        signInBtn.innerHTML = `
            <div class="over_lay">
                <form action="#" class="form" >
                    <div class="form_body">
                        <h1>Đăng nhập</h1>
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
        

                        <button type="submit" id="submit" onclick="Submit()"> Đăng nhập</button>
                    </div>
                </form>
            </div>
        `;
        signInsignOut.appendChild(signInBtn);
    });
}
