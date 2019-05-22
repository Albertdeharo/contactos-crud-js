var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["nombre"] = document.getElementById("nombre").value;
    formData["email"] = document.getElementById("email").value;
    formData["empresa"] = document.getElementById("empresa").value;
    formData["ciudad"] = document.getElementById("ciudad").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("listaContactos").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.nombre;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.email;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.empresa;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.ciudad;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
    document.getElementById("empresa").value = "";
    document.getElementById("ciudad").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("nombre").value = selectedRow.cells[0].innerHTML;
    document.getElementById("email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("empresa").value = selectedRow.cells[2].innerHTML;
    document.getElementById("ciudad").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.nombre;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.empresa;
    selectedRow.cells[3].innerHTML = formData.ciudad;
}

function onDelete(td) {
    if (confirm('Estas seguro ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("listaContactos").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("nombre").value == "") {
        isValid = false;
        document.getElementById("nombreValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("nombreValidationError").classList.contains("hide"))
            document.getElementById("nombreValidationError").classList.add("hide");
    }
    return isValid;
}