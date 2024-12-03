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
    formData["iName"] = document.getElementById("iName").value;
    formData["Ingredients"] = document.getElementById("Ingredients").value;
    formData["Country"] = document.getElementById("Country").value;
    formData["Price"] = document.getElementById("Price").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.iName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Ingredients;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Country;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Price;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("iName").value = "";
    document.getElementById("Ingredients").value = "";
    document.getElementById("Country").value = "";
    document.getElementById("Price").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("iName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("Ingredients").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Country").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Price").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.iName;
    selectedRow.cells[1].innerHTML = formData.Ingredients;
    selectedRow.cells[2].innerHTML = formData.Country;
    selectedRow.cells[3].innerHTML = formData.city;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("iName").value == "") {
        isValid = false;
        document.getElementById("iNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("iNameValidationError").classList.contains("hide"))
            document.getElementById("iNameValidationError").classList.add("hide");
    }
    return isValid;
}