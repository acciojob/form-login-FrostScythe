function getFormvalue() {
  const firstName = document.querySelector('[name="fname"]').value.trim();
  const lastName  = document.querySelector('[name="lname"]').value.trim();

  alert(firstName + " " + lastName);
  
  return false; // prevents page reload after alert
}
