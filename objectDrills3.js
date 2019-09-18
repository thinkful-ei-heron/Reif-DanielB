const funObj = {
  foo: 'fooo',
  bar: 'barr',
  fum: 'fumm',
  quux: 'quxx',
  spam: 'spamm'
}

for (const key in funObj){
  console.log(`${key}: ${funObj[key]}`)
}


peopleJobs = [
  {name: 'daniel', jobTitle: 'code monkey', boss: 'the man'},
  {name: 'reif', jobTitle: 'uber coder', boss: 'the man'},
  {name: 'blake', jobTitle: 'something', boss: 'the man'},
  {name: 'jake', jobTitle: 'monopoly man', boss: 'the man'},
  {name: 'constance', jobTitle: 'owner'}
]

peopleJobs.forEach(e => {
	if(!(e.boss)){
		console.log(`${e.name} has no boss, he is the ${e.jobTitle}`)
	}else{
		console.log(`${e.name} is a ${e.jobTitle} and reports to ${e.boss}`)
	}
})

function decode(string){
  let result = '';
  let arr = string.split(' ');
  let cypher = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
  };

  for (let i = 0; i < arr.length; i++){
    let currentChar = arr[i][0];
    let currentIndex = cypher[`${currentChar}`];
    if(arr[i][currentIndex] !== undefined) {
      result += arr[i][currentIndex];
    }
    else {
      result += ' ';
    }
  }
  return result;
}

console.log(decode('craft block argon meter bells brown croon droop'));
