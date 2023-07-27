//url used

let url = "https://kontests.net/api/v1/all";

// function to get the data

async function getData() {
  let tests;
  try {
    const data = await fetch(url, {
      method: "GET",
      headers: {
        "content-Type": "application/json",
      },
    });
    tests = data.json();
    // console.log(tests)
  } catch (error) {
    console.log(error);
  }
  return tests;
}

// function to display the data

async function displayData() {
  let test_data = await getData();
  // console.log(test_data);

  //target data-list
  const testList = document.querySelector(".data-list");

  testList.innerHTML = "";

//foreach loop to display the data using card.

  test_data.forEach((element) => {
    testList.innerHTML += `
    
    <div class="card" style="width: 18rem;">
  <img src="./images/R.png" class="card-img-top" alt="...">
  <div class="card-body text-center">
    <h5 class="card-title">${element.name}</h5>
    <p class="card-text">upcoming contests</p>
  </div>
  <ul class="list-group list-group-flush text-center">
    <li class="list-group-item">start time: ${element.start_time}</li>
    <li class="list-group-item">end time: ${element.end_time}</li>
    <li class="list-group-item">Within 24 hours: ${element.in_24_hours}</li>
  </ul>
  <div class="card-body d-flex justify-content-center">
    <a class="btn btn-primary" href="${element.url}" role="button">${element.site}</a>
  </div>
</div>
        `;
  });
}

displayData();
