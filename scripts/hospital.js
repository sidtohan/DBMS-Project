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
    } else if (data == "rt-pcr") {
      heading.textContent = "RT PCR and New Delhi";
    } else if (data == "ct-scan-delhi") {
      heading.textContent = "CT Scan and New Delhi";
    } else if (data == "medical-cat-pname") {
      heading.textContent = "Category with Patient Names";
    } else if (data == "medical-cat-count") {
      heading.textContent = "Category with Count";
    } else if (data == "supply-ventilator") {
      heading.textContent = "Supplying Ventilator";
    } else if (data == "supply-name-mob") {
      heading.textContent = "Name and mobile number";
    } else if (data == "supply-oxygen") {
      heading.textContent = "Suppling oxygen cylinders";
    } else if (data == "supply-life-support") {
      heading.textContent = "Supplying life support";
    } else if (data == "hospital-ventilator") {
      heading.textContent = "Hospitals having ventilators";
    } else if (data == "hospital-life-support") {
      heading.textContent = "Count of hospitals having life support";
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
      } else {
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
    } else if (type == "medical-equipment") {
      if (subType == "medical-cat-pname") {
        covidTable.innerHTML = `
        <tr>
          <th> Equipment Category </th>
          <th> First Name </th>
          <th> Last Name </th>
        </tr>`;
        data.forEach((element) => {
          const row = document.createElement("tr");
          const categoryData = element["EQCATEGORY"];
          const firstNameData = element["PFIRSTNAME"];
          const lastNameData = element["PLASTNAME"];

          const firstName = document.createElement("td");
          const lastName = document.createElement("td");
          const category = document.createElement("td");

          firstName.textContent = firstNameData;
          lastName.textContent = lastNameData;
          category.textContent = categoryData;

          row.appendChild(category);
          row.appendChild(firstName);
          row.appendChild(lastName);

          covidTable.appendChild(row);
        });
      } else {
        covidTable.innerHTML = `
        <tr>
          <th> Equipment Category </th>
          <th> Count </th>
        </tr>`;
        data.forEach((element) => {
          const row = document.createElement("tr");
          const categoryData = element["EQCATEGORY"];
          const countData = element["EQUIP_COUNT"];

          const category = document.createElement("td");
          const count = document.createElement("td");

          category.textContent = categoryData;
          count.textContent = countData;

          row.appendChild(category);
          row.appendChild(count);
          covidTable.appendChild(row);
        });
      }
    } else if (type == "supplier") {
      if (subType == "supply-ventilator") {
        covidTable.innerHTML = `
      <tr>
        <th> Supplier Name </th>
      </tr>`;
        data.forEach((element) => {
          const row = document.createElement("tr");
          const nameData = element["SNAME"];

          const name = document.createElement("td");

          name.textContent = nameData;
          row.appendChild(name);

          covidTable.appendChild(row);
        });
      } else if (
        subType == "supply-name-mob" ||
        subType == "supply-oxygen" ||
        subType == "supply-life-support"
      ) {
        covidTable.innerHTML = `
      <tr>
        <th> Supplier Name </th>
        <th> Supplier Mobile Number </th>
      </tr>`;
        data.forEach((element) => {
          const row = document.createElement("tr");
          const nameData = element["SNAME"];
          const phoneData = element["SMOB_NO"];

          const name = document.createElement("td");
          const phone = document.createElement("td");

          name.textContent = nameData;
          phone.textContent = phoneData;

          row.appendChild(name);
          row.appendChild(phone);
          covidTable.appendChild(row);
        });
      }
    } else if (type == "hospital") {
      if (subType == "hospital-ventilator") {
        covidTable.innerHTML = `
      <tr>
        <th> Hospital Name </th>
      </tr>`;
        data.forEach((element) => {
          const row = document.createElement("tr");
          const nameData = element["HOSPITAL_NAME"];

          const name = document.createElement("td");
          name.textContent = nameData;

          row.appendChild(name);
          covidTable.appendChild(row);
        });
      } else if (subType == "hospital-life-support") {
        covidTable.innerHTML = `
      <tr>
        <th> Count Of Hospitals </th>
      </tr>`;
        data.forEach((element) => {
          const row = document.createElement("tr");
          const countData = element["COUNT_HOSPITAL"];

          const count = document.createElement("td");
          count.textContent = countData;

          row.appendChild(count);
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
    } else if (type == "equipments") {
      _display.innerHTML = `
      <div class='info-list-display'>
        <h2 class="display-heading">Equipment</h2>
      </div>
      `;
      const appendTo = document.querySelector(".info-list-display");
      for (element in data) {
        appendTo.appendChild(returnHeading(element));
        appendTo.appendChild(
          returnTable(data[element], "medical-equipment", element)
        );
      }
    } else if (type == "supplier") {
      _display.innerHTML = `
      <div class='info-list-display'>
        <h2 class="display-heading">Suppliers</h2>
      </div>
      `;
      const appendTo = document.querySelector(".info-list-display");
      for (element in data) {
        appendTo.appendChild(returnHeading(element));
        appendTo.appendChild(returnTable(data[element], "supplier", element));
      }
    } else if (type == "hospital") {
      _display.innerHTML = `
      <div class='info-list-display'>
        <h2 class="display-heading">Hospitals</h2>
      </div>
      `;
      const appendTo = document.querySelector(".info-list-display");
      for (element in data) {
        appendTo.appendChild(returnHeading(element));
        appendTo.appendChild(returnTable(data[element], "hospital", element));
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
  const medicalList = document.querySelector(".medical-equipment-list");
  const supplier = document.querySelector(".supplier-list");
  const hospital = document.querySelector(".hospital");
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

  const equipmentClick = async (e) => {
    const send = {
      type: "medical-equipment-list",
    };
    const response = await fetch("../get-data.php", {
      body: JSON.stringify(send),
      method: "POST",
    });
    const data = await response.json();
    displayManipulation.updateDisplay(data, "equipments");
  };

  const supplyClick = async (e) => {
    const send = {
      type: "supplier-list",
    };
    const response = await fetch("../get-data.php", {
      body: JSON.stringify(send),
      method: "POST",
    });
    const data = await response.json();
    displayManipulation.updateDisplay(data, "supplier");
  };

  const hospitalClick = async (e) => {
    const send = {
      type: "hospital-list",
    };
    const response = await fetch("../get-data.php", {
      body: JSON.stringify(send),
      method: "POST",
    });
    const data = await response.json();
    displayManipulation.updateDisplay(data, "hospital");
  };

  const addListeners = () => {
    patient.addEventListener("click", patientClick);
    doctor.addEventListener("click", doctorClick);
    medicalList.addEventListener("click", equipmentClick);
    supplier.addEventListener("click", supplyClick);
    hospital.addEventListener("click", hospitalClick);
  };

  return {
    addListeners,
  };
})();

navigationHandler.addListeners();
