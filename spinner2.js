let spinner = '|/-\|/';

for (i=0; i<spinner.length; i++){

  let spin = spinner[i];

  if (i === 3){
    spin = "\\";
  };

  setTimeout(() => {
    process.stdout.write(`\r${spin}   `);
  }, 300 * i);

};


