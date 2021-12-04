const displayManipulation = (() => {
  const _display = document.querySelector(".user-display");
  const updateDisplay = (data, type) => {
    if (type == "profile") {
      const fname = data["fname"];
      const lname = data["lname"];
      const mname = data["mname"];
      const phone = data["phone"];
      const address = data["address"];
      _display.innerHTML = `
      <div class='user-display-profile'>
        <h2>PROFILE</h2>
        <div class='user-profile-data'>
          <div class='attributes'>
            <div class='attribute'>Name</div>
            <div class='attribute'>Phone</div>
            <div class='attribute'>Address</div>
          </div>
          <div class="user-details">
            <div class="detail">${fname} ${mname} ${lname}</div>
            <div class="detail">${phone}</div>
            <div class="detail">${address}</div>
          </div>
        </div>
      </div>
      `;
    } else if (type == "equip") {
      _display.innerHTML = `
      <div class='user-display-equipment'>
        <h2>EQUIPMENT</h2>
        <div class='user-equipment-data'>
          <div class='attributes equip'>
            <div class='attribute'>EQID</div>
            <div class='attribute'>Category</div>
          </div>
          <div class="equipment-details">
          </div>
        </div>
      </div>`;
      const equipmentDetails = _display.querySelector(".equipment-details");
      data.forEach((element) => {
        const eqId = element["EQID"];
        const category = element["EQCategory"];
        
        const idDiv = document.createElement("div");
        idDiv.classList.add("equipment");
        idDiv.textContent = eqId;

        const categoryDiv = document.createElement("div");
        categoryDiv.classList.add("equipment");
        categoryDiv.textContent = category;

        equipmentDetails.appendChild(idDiv);
        equipmentDetails.append(categoryDiv);
      });
    }
  };
  return {
    updateDisplay,
  };
})();

const navigationHandler = (() => {
  const _profile = document.querySelector(".profile");
  const _equipment = document.querySelector(".equipment");
  const profileClick = async (e) => {
    const send = {
      type: "patient",
    };
    const response = await fetch("../get-data.php", {
      body: JSON.stringify(send),
      method: "POST",
    });
    const data = await response.json();
    displayManipulation.updateDisplay(data, "profile");
  };

  const equipmentClick = async (e) => {
    const send = {
      type: "equip",
    };
    const response = await fetch("../get-data.php", {
      body: JSON.stringify(send),
      method: "POST",
    });
    const data = await response.json();
    displayManipulation.updateDisplay(data, "equip");
  };

  const addListeners = () => {
    _profile.addEventListener("click", profileClick);
    _equipment.addEventListener("click", equipmentClick);
  };

  return {
    addListeners,
  };
})();

navigationHandler.addListeners();
