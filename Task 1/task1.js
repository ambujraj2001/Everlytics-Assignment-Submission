let pipeline_name = "";
let project_name = "";
let bucket_name = "";
let file_name = "";
let gcs_credentials = "";
let run_every = "";
let ele = "";
let ele1 = "";
let satus = 0;
function validiate() {
  pipeline_name = document.getElementById("1").value;
  project_name = document.getElementById("2").value;
  bucket_name = document.getElementById("3").value;
  file_name = document.getElementById("4").value;
  gcs_credentials = document.getElementById("5").value;
  run_every = document.getElementById("6").value;
  ele = document.getElementById("error");
  ele1 = document.getElementById("8");
  console.log(ele1);
  len();
  if (satus == 0) {
    specialchar();
    if (satus == 0) {
      start();
    }
  }
}

function len() {
  if (pipeline_name.length < 5) {
    ele.setAttribute(
      "class",
      "alert alert-danger alert-dismissible fade show container"
    );
    satus = 1;
    ele.innerHTML =
      "<strong>Pipeline Name should be of length of Minimum 5</strong>";
  } else if (project_name.length < 5) {
    ele.setAttribute(
      "class",
      "alert alert-danger alert-dismissible fade show container"
    );
    satus = 1;
    ele.innerHTML =
      "<strong>Project Name should be of length of Minimum 5</strong>";
  } else if (bucket_name.length < 5) {
    ele.setAttribute(
      "class",
      "alert alert-danger alert-dismissible fade show container"
    );
    satus = 1;
    ele.innerHTML =
      "<strong>Bucket Name should be of length of Minimum 5</strong>";
  } else if (file_name.length < 5) {
    ele.setAttribute(
      "class",
      "alert alert-danger alert-dismissible fade show container"
    );
    satus = 1;
    ele.innerHTML =
      "<strong>File Name should be of length of Minimum 5</strong>";
  } else if (gcs_credentials.length < 5) {
    ele.setAttribute(
      "class",
      "alert alert-danger alert-dismissible fade show container"
    );
    satus = 1;
    ele.innerHTML =
      "<strong>GCS Credentials should be of length of Minimum 5</strong>";
  } else if (run_every.length < 5) {
    ele.setAttribute(
      "class",
      "alert alert-danger alert-dismissible fade show container"
    );
    satus = 1;
    ele.innerHTML = "<strong>Runtime should be of length of Minimum 5</strong>";
  }
}

function specialchar() {
  if (/[^a-zA-Z0-9-/]/.test(pipeline_name)) {
    ele.setAttribute(
      "class",
      "alert alert-danger alert-dismissible fade show container"
    );
    satus = 1;
    ele.innerHTML =
      "<strong>Pipeline Name should not have special characters</strong>";
  } else if (/[^a-zA-Z0-9-/]/.test(project_name)) {
    ele.setAttribute(
      "class",
      "alert alert-danger alert-dismissible fade show container"
    );
    satus = 1;
    ele.innerHTML =
      "<strong>Project Name should not have special characters</strong>";
  } else if (/[^a-zA-Z0-9-/]/.test(bucket_name)) {
    ele.setAttribute(
      "class",
      "alert alert-danger alert-dismissible fade show container"
    );
    satus = 1;
    ele.innerHTML =
      "<strong>Bucket Name should not have special characters</strong>";
  } else if (/[^a-zA-Z0-9\-\/]/.test(file_name)) {
    ele.setAttribute(
      "class",
      "alert alert-danger alert-dismissible fade show container"
    );
    satus = 1;
    ele.innerHTML =
      "<strong>File Name should not have special characters</strong>";
  } else if (/[^a-zA-Z0-9\-\/]/.test(gcs_credentials)) {
    ele.setAttribute(
      "class",
      "alert alert-danger alert-dismissible fade show container"
    );
    satus = 1;
    ele.innerHTML =
      "<strong>GCS Credentials should not have special characters</strong>";
  } else if (/[^a-zA-Z0-9\-\/]/.test(run_every)) {
    ele.setAttribute(
      "class",
      "alert alert-danger alert-dismissible fade show container"
    );
    satus = 1;
    ele.innerHTML =
      "<strong>Runtime should not have special characters</strong>";
  }
}

function start() {
  if (
    pipeline_name.charAt(0) == "-" ||
    pipeline_name.charAt(0) == "+" ||
    pipeline_name.charAt(0) == "_"
  ) {
    ele.setAttribute(
      "class",
      "alert alert-danger alert-dismissible fade show container"
    );
    satus = 1;
    ele.innerHTML =
      "<strong>Pipeline Name should not begin with + ,- , _</strong>";
  } else if (
    project_name.charAt(0) == "+" ||
    project_name.charAt(0) == "-" ||
    project_name.charAt(0) == "_"
  ) {
    ele.setAttribute(
      "class",
      "alert alert-danger alert-dismissible fade show container"
    );
    satus = 1;
    ele.innerHTML =
      "<strong>Project Name should not begin with + ,- , _</strong>";
  } else if (
    bucket_name.charAt(0) == "+" ||
    bucket_name.charAt(0) == "-" ||
    bucket_name.charAt(0) == "_"
  ) {
    ele.setAttribute(
      "class",
      "alert alert-danger alert-dismissible fade show container"
    );
    satus = 1;
    ele.innerHTML =
      "<strong>Bucket Name should not begin with + ,- , _</strong>";
  } else if (
    file_name.charAt(0) == "+" ||
    file_name.charAt(0) == "-" ||
    file_name.charAt(0) == "_"
  ) {
    ele.setAttribute(
      "class",
      "alert alert-danger alert-dismissible fade show container"
    );
    satus = 1;
    ele.innerHTML = "<strong>File Name should not begin with + ,- , _</strong>";
  } else if (
    gcs_credentials.charAt(0) == "+" ||
    gcs_credentials.charAt(0) == "-" ||
    gcs_credentials.charAt(0) == "_"
  ) {
    ele.setAttribute(
      "class",
      "alert alert-danger alert-dismissible fade show container"
    );
    satus = 1;
    ele.innerHTML =
      "<strong>GCS Credentials should not begin with + ,- , _</strong>";
  } else if (
    run_every.charAt(0) == "+" ||
    run_every.charAt(0) == "-" ||
    run_every.charAt(0) == "_"
  ) {
    ele.setAttribute(
      "class",
      "alert alert-danger alert-dismissible fade show container"
    );
    satus = 1;
    ele.innerHTML = "<strong>Runtime should not begin with + ,- , _</strong>";
  }
}
