$(function(){
    load();
    // 添加正在进行的项
    $('#title').keydown(function(event) {
        // 按下回车键时添加正在进行的项
        if(event.keyCode === 13 && $(this).val()){
            var data = loadData();
            data.unshift({"title":$(this).val(),"done":false});
            $(this).val('');
            saveData(data);
            load();
        }  
    })
    // 正在进行的项更改为已经完成的项
    $('#todolist').on('change','input[type=checkbox]',function() {
        updata($(this).parent().attr('index'),'done',true);
    })
    // 已经完成的项更改为正在进行的项
    $('#donelist').on('change','input[type=checkbox]',function() {
        updata($(this).parent().attr('index'),'done',false);
    })
    // 删除当前项
    del('#todolist');
    del('#donelist');
    // 编辑当前项
    $('#todolist').on('click','p',function() {
        var $p = $(this);
        var value = $(this).text();
        var index = $p.parent().attr('index'); 
        $p.html(`<input type="text" value='${value}' id='input-${index}'>`);
        // 选中文本
        $(`#input-${index}`)[0].setSelectionRange(0, $(`#input-${index}`).val().length);
        // 获取焦点
        $(`#input-${index}`).focus();
        // 输入框鼠标形状设置
        $(`#input-${index}`).css('cursor','text');
        $(`#input-${index}`).blur(function(){
            blurSaveData(`#input-${index}`)
        });
        // 在输入框点击时失焦
        $(`#input-${index}`).click(function() {
            $(`#input-${index}`).blur();
        });
        // 在输入框按下回车键，失焦保存数据
        $(`#input-${index}`).keydown(function() {
            if(event.keyCode === 13){
                blurSaveData(`#input-${index}`);
                $(`#input-${index}`).blur();
            }
        })
        // 失焦保存数据
        function blurSaveData(id){
            // 保存数据
            if($(id).val().length === 0){
                $p.html(value);  
                // $p.html($(`#input-${index}`).val());             
                alert('不能为空！');
            }else{
                updata(index,'title',$(id).val());
            } 
        }
    })
    // 删除数据
    function del(id) {
        $(id).on('click','a',function() {
            console.log($(this).parent());
            $(this).parent().remove();
            var data = loadData();
            var index = $(this).parent().attr('index');
            data.splice(index,1);
            saveData(data);
        })
    }
    // 更新数据
    function updata(index,key,value) {
        var data = loadData();
        data[index][key] = value;
        saveData(data);
        load();
    }
    // 获取本地浏览器的数据
    function loadData() {
        var collection = localStorage.getItem('doList');
        if(collection){
            return JSON.parse(collection);
        }else{
            return [];
        }
    }
    // 保存数据到本地浏览器
    function saveData(data) {
        localStorage.setItem('doList',JSON.stringify(data))
    }
    // 加载数据
    function load(){
        var todoCount = 0;
        var doneCount = 0;
        var todoStr = '';
        var doneStr = '';
        var data = loadData();
        data.forEach(function(item,index,array) {
            if(!data[index].done){
                // 加载正在进行的项
                todoStr += `
                <li index=${index}>
                    <input type="checkbox">
                    <p id='p-${index}'>${data[index].title}</p>
                    <a href="javascript:void(0);">一</a>
                </li>`;
                todoCount++;
            }else{
                // 加载已经完成的项
                doneStr += `
                <li index=${index}>
                    <input type="checkbox" checked='checked'>
                    <p id='p-${index}'>${data[index].title}</p>
                    <a href="javascript:void(0);"></a>
                </li>`;
                doneCount++;
            }
            $('#todolist').html(todoStr);
            $('#donelist').html(doneStr);
        })
        // 加载正在进行的项的数目
        $('#todocount').text(todoCount);
        // 加载已经完成的项的数目
        $('#donecount').text(doneCount);
    }

})
