const displayManipulation = (() => {
  const _display = document.querySelector(".user-display");
  const returnHeading = (data) => {
    const heading = document.createElement("h3");
    if (data == "new-delhi") {
      heading.textContent = "New Delhi Patients";
    } else if (data == "19-positive") {
      heading.textContent = "Covid 19 Positive";
    } else if (data == "ct-scan") {
      heading.textContent = "CT Scan";
    } else if (data == "10-greater") {
      heading.textContent = "Experience > 10";
    } else if(data == "rt-pcr"){
      heading.textContent = "RT PCR and New Delhi"
    } else if(data == "ct-scan-delhi"){
      heading.textContent = "CT Scan and New Delhi"
    }
    return heading;
  };
  const returnTable = (data, type, subType) => {
    const covidTable = document.createElement("table");
    if (type == "patient") {
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
    } else if (type == "doctor") {
      if (subType == "10-greater") {
        covidTable.innerHTML = `
      <tr>
        <th> First Name </th>
        <th> Last Name </th>
        <th> Experience </th>
      </tr>`;
        data.forEach((element) => {
          const row = document.createElement("tr");
          const firstNameData = element["DFIRSTNAME"];
          const lastNameData = element["DLASTNAME"];
          const expData = element["EXPERIENCE"];
          const firstName = document.createElement("td");
          const lastName = document.createElement("td");
          const exp = document.createElement("td");

          firstName.textContent = firstNameData;
          lastName.textContent = lastNameData;
          exp.textContent = expData;
          row.appendChild(firstName);
          row.appendChild(lastName);
          row.appendChild(exp);

          covidTable.appendChild(row);
        });
      } else{
        console.log(data);
        covidTable.innerHTML = `
        <tr>
          <th> First Name </th>
          <th> Last Name </th>
        </tr>`;
        data.forEach((element) => {
          const row = document.createElement("tr");
          const firstNameData = element["DFIRSTNAME"];
          const lastNameData = element["DLASTNAME"];
          const firstName = document.createElement("td");
          const lastName = document.createElement("td");

          firstName.textContent = firstNameData;
          lastName.textContent = lastNameData;
          row.appendChild(firstName);
          row.appendChild(lastName);

          covidTable.appendChild(row);
        });
      }
    }

    return covidTable;
  };
  const updateDisplay = (data, type) => {
    if (type == "patient") {
      _display.innerHTML = `
      <div class='info-list-display'>
        <h2 class="display-heading">Patients</h2>
      </div>
      `;
      const appendTo = document.querySelector(".info-list-display");
      for (element in data) {
        appendTo.appendChild(returnHeading(element));
        appendTo.appendChild(returnTable(data[element], "patient"));
      }
    } else if (type == "doctor") {
      _display.innerHTML = `
      <div class='info-list-display'>
        <h2 class="display-heading">Doctors</h2>
      </div>
      `;
      const appendTo = document.querySelector(".info-list-display");
      for (element in data) {
        appendTo.appendChild(returnHeading(element));
        appendTo.appendChild(returnTable(data[element], "doctor", element));
      }
    }
  };
  return {
    updateDisplay,
  };
})();

const navigationHandler = (() => {
  const patient = document.querySelector(".patient-list");
  const doctor = document.querySelector(".doctor-list");
  const doctorClick = async (e) => {
    const send = {
      type: "hospital-doctor-list",
    };
    const response = await fetch("../get-data.php", {
      body: JSON.stringify(send),
      method: "POST",
    });
    const data = await response.json();
    console.log(data);
    displayManipulation.updateDisplay(data, "doctor");
  };
  const patientClick = async (e) => {
    const send = {
      type: "hospital-patient-list",
    };
    const response = await fetch("../get-data.php", {
      body: JSON.stringify(send),
      method: "POST",
    });
    const data = await response.json();
    displayManipulation.updateDisplay(data, "patient");
  };

  const addListeners = () => {
    patient.addEventListener("click", patientClick);
    doctor.addEventListener("click", doctorClick);
  };

  return {
    addListeners,
  };
})();

navigationHandler.addListeners();
