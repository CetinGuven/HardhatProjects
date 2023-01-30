
const fs= require('fs');

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account: ${deployer.address}");

    const balance = await deployer.getBalance();
    console.log("Account balance: ${balance.toString()}");

    const MyToken = await ethers.getContractFactory("MyToken");
    const mytoken = await MyToken.deploy();

    console.log("Contract address: ${ mytoken.address}");

    const data = {
        address: mytoken.address,
        abi:JSON.parse( mytoken.interface.format('json'))
    };
    fs.writeFileSync('frontend/src/MyToken.json', JSON.stringify(data));
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });