
(function(){

    let title = document.querySelector('.title');
    let from = document.querySelector('.from');
    let to= document.querySelector('.to');
    let add_title = document.querySelector('.add_title');
    let result = document.querySelector('.result');


    add_title.addEventListener('click',function (e) {
        if(title.value.length<20){
            window.t_value=title.value;
        }else{
            title.value="Less Than 20";
        }
        let f_value=from.value;
        let to_value=to.value;
        let pm="12:00";
        if (f_value>=pm){
            window.real_f_time=f_value+"pm";
        }else {
            window.real_f_time=f_value+"am";
        }
        if (to_value>pm){
            window.real_to_time=to_value+"pm";
        }else {
            window.real_to_time=to_value+"am";
        }
        if (t_value===""|f_value===""|to_value===""){
            title.placeholder="Please fill all";
        }else {
            let e = document.createElement('tr');
            e.innerHTML = " <th style=\"vertical-align: middle\" scope=\"row\">\n" + "<input type=\"checkbox\"  onclick='myFunction(this.id)' ><i>Unfinished</i>\n" + "</th>\n" +
                " <td style=\"vertical-align: middle\" scope=\"row\">"+t_value+"</td>\n" +
                " <td style=\"vertical-align: middle\">"+real_f_time+"</td>\n" +
                " <td style=\"vertical-align: middle\">"+real_to_time+"</td>\n" +
                " <td style=\"vertical-align: middle\">\n" +
                " <button class=\"btn btn-outline-danger\" onclick='delFunction(this.id)'>\n" +
                " <i class=\"fas fa-trash fa-fw\"></i>\n" + " </button>\n" +
                " <button class=\"btn btn-outline-success\" onclick='editFunction(this.id)'>\n" +
                " <i class=\"fas fa-edit fa-fw\"></i>\n" + " </button>\n" +
                " </td>";

            result.prepend(e);
            e.setAttribute("class", "table-danger");
            title.value="";
            from.value="";
            to.value="";
            e.setAttribute("id",Math.random().toString(36).substr(2,9));
            let edit=e.lastElementChild.lastElementChild;
            edit.setAttribute("id",Math.random().toString(36).substr(2,9));
            let del=e.lastElementChild.firstElementChild;
            del.setAttribute("id",Math.random().toString(36).substr(2, 9));
            let child=e.firstElementChild.firstElementChild;
            child.setAttribute("id",Math.random().toString(36).substr(2, 9));
        }
    });
})();
function editFunction(edit_id) {
    let parent_edit=document.getElementById(edit_id).parentElement.parentElement;
    let check=parent_edit.firstElementChild.firstElementChild;
    if (check.checked==true){
        alert("YOu finish it. You can't edit.")
    }else{
        window.edit=parent_edit.children;
        let old_title=edit[1].innerHTML;
        let old_from=edit[2].innerHTML.substr(0,5);
        let old_to=edit[3].innerHTML.substr(0,5);
        edit[1].innerHTML="<input type=\"text\" class=\"form-control title\" id=\"exampleInputEmail1\" onblur='update_data()' aria-describedby=\"emailHelp\" value= required>\n";
        edit[1].firstElementChild.setAttribute("value",old_title);
        edit[2].innerHTML="<input type=\"time\" class=\"form-control from\" id=\"from\" name=\"from\" onblur='update_data()' min=\"01:00\" max=\"24:00\" required>\n";
        edit[2].firstElementChild.setAttribute("value",old_from);
        edit[3].innerHTML="<input type=\"time\" class=\"form-control to\" id=\"to\" name=\"to\" onblur='update_data()' min=\"01:00\" max=\"24:00\" required>\n";
        edit[3].firstElementChild.setAttribute("value",old_to);
    }

}
function update_data() {
    let new_title=edit[1].firstElementChild;
    let new_from=edit[2].firstElementChild;
    let new_to=edit[3].firstElementChild;
    let pm="12:00";
    if (new_from.value>=pm){
        window.real_up_f_time=new_from.value+"pm";
    }else {
        window.real_up_f_time=new_from.value+"am";
    }
    if (new_to.value>pm){
        window.real_up_to_time=new_to.value+"pm";
    }else {
        window.real_up_to_time=new_to.value+"am";
    }
    if (new_title.value===""|new_from.value===""|new_to.value===""){
        new_title.placeholder="Please fill all";
    }else {
        edit[1].innerHTML=new_title.value;
        edit[2].innerHTML=real_up_f_time;
        edit[3].innerHTML=real_up_to_time;
    }
}
function delFunction(del_id) {
    let del=confirm("Are you sure want to delete?");
    if (del==true){
        document.getElementById(del_id).parentElement.parentElement.remove();
    }
}
function myFunction(one) {
    let checkBox = document.getElementById(one);
    let parent=checkBox.parentElement.parentElement;
    let child=checkBox.parentElement.children;
    if (checkBox.checked == true) {
        parent.setAttribute("class", "table-success");
        child[1].innerHTML="Finished";

    } else {
        parent.setAttribute("class", "table-danger");
        child[1].innerHTML="Unfinished";
    }
}
