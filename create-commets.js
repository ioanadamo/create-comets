const candidateId = "a8cfec33-483b-4966-a9d7-a36895e1c8f2"

let data1 = {
  "candidateId": candidateId,
  "row": 0,
  "column": 0
}

let data2 = {
  "candidateId": candidateId,
  "row": 0,
  "column": 0
}

let column2 = 9

function postCommets(data) {
  fetch("https://challenge.crossmint.io/api/polyanets", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json"
    }
  });
}

function createCommets() {
  for (var i = 0; i < 11; i++) {
    if (i >= 2 && i <= 8) {
      data1.row = i
      data1.column = i
  
      postCommets(data1)

      data2.row = i;
      column2 = column2 - 1;
      data2.column = column2;
  
      postCommets(data2)
    }
  }
}

createCommets()
