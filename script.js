 function getFormvalue(event) {
      event.preventDefault(); // prevent page reload

      const firstName = document.querySelector('[name="fname"]').value.trim();
      const lastName  = document.querySelector('[name="lname"]').value.trim();

      const fullName = `${firstName} ${lastName}`.trim(); // handles empty inputs

      if (fullName === "") {
        alert("Please enter your name.");
      } else {
        alert(fullName);
      }
    }