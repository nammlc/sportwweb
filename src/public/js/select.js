const select = document.getElementById('select');
const form = document.getElementById('form-create');
select.addEventListener('change',function(){
    const selectOptition = select.value;
    form.innerHTML = `
        <form action="/${selectOptition}/store" method="post">

            <div class="form-group">
            <label for="phara1">Mô tả</label>
            <input type="text" name="phara1" id="phara1" class="form-control">
            <h1 id ="errorphara1"></h1>
            </div>

            <div class="form-group">
            <label for="name">Tên</label>
            <input type="text" name="name" id="name" class="form-control">
            <h1 id ="errorname"></h1>
            </div>

            <div class="form-group">
            <label for="summary">summary</label>
            <input type="text" name="summary" id="summary" class="form-control">
            <h1 id ="errorsummary"></h1>
            </div>

            <div class="form-group">
            <label for="img1">Ảnh</label>
            <input type="text" name="img1" id="img1" class="form-control">
            <h1 id ="errorimg1"></h1>
            </div>
            <button type="button" class="btn btn-primary" id="check-submit">Thêm bài báo</button>
            <h1 id="errorsubmit"></h1>
        </form>
    `;

    const phara1 = document.getElementById('phara1');

    const errorphara1 = document.getElementById('errorphara1');

    phara1.addEventListener('blur',function(){
        const value = phara1.value;
        if(value == '')
            errorphara1.innerHTML ="can't be null in this site";
        else
            errorphara1.innerHTML = "";
    })

    const summary = document.getElementById('summary');

    const errorsummary = document.getElementById('errorsummary');

    summary.addEventListener('blur',function(){
        const value = summary.value;
        if(value == '')
            errorsummary.innerHTML ="can't be null in this site";
        else
            errorsummary.innerHTML = "";
    })

    const namee = document.getElementById('name');

    const errornamee = document.getElementById('errorname');

    namee.addEventListener('blur',function(){
        const value = namee.value;
        const leng = value.length;
        if(value == '')
            errornamee.innerHTML ="can't be null in this site";
        else
            errornamee.innerHTML = "";
        if(leng<10)
            errornamee.innerHTML = "name has to be longer than 10 character";
        else
            errornamee.innerHTML = " ";
    })

    const img1 = document.getElementById('img1');

    const errorimg1 = document.getElementById('errorimg1');

    img1.addEventListener('blur',function(){
        const value = img1.value;
        if(value == '')
            errorimg1.innerHTML ="can't be null in this site";
        else
            errorimg1.innerHTML = "";
    })

    const checkSubmit = document.getElementById('check-submit');

    const errorsubmit = document.getElementById('errorsubmit');
    checkSubmit.addEventListener('click',function(){
        const valuephara = phara1.value;
        const valuename = namee.value;
        const valueimg1 = img1.value;
        const valuesummary = summary.value;
        if(valueimg1 == '' || valuename == '' || valuephara == '' || valuesummary == ''|| valuename.length < 10){
            alert("Fill full site before submit");
            checkSubmit.setAttribute("type","button");
        }
        else{
            errorsubmit.innerHTML = ""; 
            checkSubmit.setAttribute("type","submit");
        }
    });
});

