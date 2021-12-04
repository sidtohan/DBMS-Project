const displayManipulation = (() => {
  const _display = document.querySelector(".user-display");
  const updateDisplay = (data) => {
    const fname = data['fname'];
    const lname = data['lname'];
    const experience = data['experience'];
    _display.innerHTML = `
    <div class='user-display-profile'>
      <h2>PROFILE</h2>
      <div class='user-profile-data'>
        <div class='attributes'>
          <div class='attribute'>Name</div>
          <div class='attribute'>Experience</div>
        </div>
        <div class="user-details">
          <div class="detail">${fname} ${lname}</div>
          <div class="detail">${experience}</div>
        </div>
      </div>
    </div>
    `
  };
  return {
    updateDisplay,
  };
})();

const navigationHandler = (() => {
  const _profile = document.querySelector(".profile");

  const profileClick = async (e) => {
    const send = {
      type: "doctor"
    }
    const response = await fetch("../get-data.php", {
      body: JSON.stringify(send),
      method: "POST",
    });
    const data = await response.json();
    displayManipulation.updateDisplay(data);
  };

  const addListeners = () => {
    _profile.addEventListener("click", profileClick);
  };

  return {
    addListeners,
  };
})();

navigationHandler.addListeners();
