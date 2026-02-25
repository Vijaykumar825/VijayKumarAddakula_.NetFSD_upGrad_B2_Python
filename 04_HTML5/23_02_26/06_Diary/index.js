function saveNote() {
    const notevalue = document.getElementById('note');
    note = notevalue.value;
    localStorage.setItem('note', note);
    alert('Note saved!');
    notevalue.value = '';
}
function clearNote() {
    localStorage.removeItem('note');
    document.getElementById('note').value = '';
    alert('Note cleared!');
}

saveNote();
clearNote();