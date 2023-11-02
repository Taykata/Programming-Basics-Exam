function pcStore(input) {

    let cpuInDolars = Number(input[0]);
    let gpuInDolars = Number(input[1]);
    let ramInDolars = Number(input[2]);
    let ramCount = Number(input[3]);
    let percentDiscount = Number(input[4]);

    let cpuInLeva = cpuInDolars * 1.57;
    let gpuInLeva = gpuInDolars * 1.57;
    let ramInLeva = ramInDolars * 1.57;

    let totalRamPrice = ramInLeva * ramCount;
    let cpuWithDiscount = cpuInLeva - (cpuInLeva * (percentDiscount * 100) / 100);
    let gpuWithDiscount = gpuInLeva - (gpuInLeva * (percentDiscount * 100) / 100);

    let totalSum = totalRamPrice + cpuWithDiscount + gpuWithDiscount;

    console.log(`Money needed - ${totalSum.toFixed(2)} leva.`);

}

pcStore(["500", "200", "80", "2", "0.05"]);

// Exercise 1