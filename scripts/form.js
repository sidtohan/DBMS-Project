const formHandler = () => {
  const loginOptions = document.querySelector(".login-options");
  const generateForm = (type) => {
    const loginForm = document.createElement("form");
    const idDiv = document.createElement("div");
    const idHeading = document.createElement("h3");
    const id = document.createElement("input");

    idHeading.textContent = "ID";
    idHeading.classList.add("id-heading");
    id.type = "text";
    id.required = "";
    id.name = "id";
    idDiv.appendChild(idHeading);
    idDiv.appendChild(id);

    const nameDiv = document.createElement("div");
    const nameHeading = document.createElement("h3");
    const name = document.createElement("input");

    if (type == "patient" || type == "doctor") {
      nameHeading.textContent = "First Name";
    } else if (type == "hospital") {
      nameHeading.textContent = "Hospital Name";
    } else {
      nameHeading.textContent = "Supplier Name";
    }

    nameHeading.classList.add("name-heading");
    name.type = "text";
    name.required = "";
    name.name = "name";
    nameDiv.appendChild(nameHeading);
    nameDiv.appendChild(name);

    const formType = document.createElement("input");
    formType.type = "text";
    formType.defaultValue = type;
    formType.classList.add("hide-pls");
    formType.name = "type";
    const submitButton = document.createElement("button");
    submitButton.type = "submit";

    const arrowImage = new Image();
    arrowImage.src = "./assets/right-arrow.svg";
    submitButton.appendChild(arrowImage);

    loginForm.classList.add("login-form");
    loginForm.appendChild(formType);
    loginForm.appendChild(idDiv);
    loginForm.appendChild(nameDiv);
    loginForm.appendChild(submitButton);
    loginForm.action = "auth.php";
    loginForm.method = "POST";
    return loginForm;
  };

  const clearArea = () => {
    loginOptions.innerHTML = "";
  };

  const addForm = (type) => {
    clearArea();
    const form = generateForm(type);
    loginOptions.classList.add("login-active");
    loginOptions.appendChild(form);
  };

  return {
    addForm,
  };
};

const cardClickHandler = (e) => {
  const doctor = document.querySelector(".doctor");
  const patient = document.querySelector(".patient");
  const hospital = document.querySelector(".hospital");
  const supplier = document.querySelector(".supplier");

  doctor.addEventListener("click", (e) => {
    formHandler().addForm("doctor");
  });
  patient.addEventListener("click", (e) => {
    formHandler().addForm("patient");
  });
  hospital.addEventListener("click", (e) => {
    formHandler().addForm("hospital");
  });
  supplier.addEventListener("click", (e) => {
    formHandler().addForm("supplier");
  });
};

cardClickHandler();
