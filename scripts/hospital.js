const displayManipulation = (() => {
  const _display = document.querySelector(".user-display");
  const returnHeading = (data) => {
    const heading = document.createElement("h3");
    if(data == "new-delhi"){
      heading.textContent = "New Delhi Patients";
    } else if(data == "19-positive"){
      heading.textContent = "Covid 19 Positive";
    } else{
      heading.textContent = "CT Scan";
    }
    return heading;
  }
  const returnTable = (data) => {
    const covidTable = document.createElement("table");
    covidTable.innerHTML = `
      <tr>
        <th> First Name </th>
        <th> Last Name </th>
      </tr>`;
    data.forEach((element) => {
      const row = document.createElement("tr");
      const firstNameData = element["PFIRSTNAME"];
      const lastNameData = element["PLASTNAME"];
      const firstName = document.createElement("td");
      const lastName = document.createElement("td");

      firstName.textContent = firstNameData;
      lastName.textContent = lastNameData;
      row.appendChild(firstName);
      row.appendChild(lastName);

      covidTable.appendChild(row);
    });
    return covidTable;
  };
  const updateDisplay = (data, type) => {
    if (type == "patient") {
      _display.innerHTML = `
      <div class='patient-list-display'>
        <h2 class="display-heading">Patients</h2>
      </div>
      `;
      const appendTo = document.querySelector(".patient-list-display");
      for(element in data){
        appendTo.appendChild(returnHeading(element));
        appendTo.appendChild(returnTable(data[element]));
      }

    } else {
    }
  };
  return {
    updateDisplay,
  };
})();

const navigationHandler = (() => {
  const patient = document.querySelector(".patient-list");

  const patientClick = async (e) => {
    const send = {
      type: "hospital-patient-list",
    };
    const response = await fetch("../get-data.php", {
      body: JSON.stringify(send),
      method: "POST",
    });
    const data = await response.json();
    console.log(data);
    displayManipulation.updateDisplay(data, "patient");
  };

  const addListeners = () => {
    patient.addEventListener("click", patientClick);
  };

  return {
    addListeners,
  };
})();

navigationHandler.addListeners();
