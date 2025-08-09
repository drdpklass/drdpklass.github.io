
function filterPubs(){
  const q = document.getElementById('pubQuery').value.toLowerCase();
  const year = document.getElementById('pubYear').value;
  const rows = document.querySelectorAll('#pubTable tbody tr');
  rows.forEach(r=>{
    const text = r.innerText.toLowerCase();
    const y = r.getAttribute('data-year');
    let visible = true;
    if(q && !text.includes(q)) visible = false;
    if(year && year!=='all' && y!==year) visible = false;
    r.style.display = visible ? '' : 'none';
  });
}
document.addEventListener('DOMContentLoaded', ()=>{
  if(document.getElementById('pubQuery')){
    document.getElementById('pubQuery').addEventListener('input', filterPubs);
    document.getElementById('pubYear').addEventListener('change', filterPubs);
  }
});
